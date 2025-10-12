import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import { comparePassword, hashPassword } from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { createJWT } from '../utils/tokenUtils.js';

export const register = async (req, res) => {
  try {
    console.log('Registration request received:', req.body);
    const isFirstAccount = (await User.countDocuments()) === 0;
    req.body.role = isFirstAccount ? 'admin' : 'user';

    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    const user = await User.create(req.body);
    console.log('User created successfully:', user._id);
    res.status(StatusCodes.CREATED).json({ msg: 'user created' });
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};
export const login = async (req, res) => {
  try {
    console.log('Login attempt:', { email: req.body.email });
    
    if (!req.body.email || !req.body.password) {
      throw new UnauthenticatedError('Please provide email and password');
    }

    const user = await User.findOne({ email: req.body.email });
    console.log('User found:', user ? 'yes' : 'no');

    const isValidUser =
      user && (await comparePassword(req.body.password, user.password));
    console.log('Password valid:', isValidUser ? 'yes' : 'no');

    if (!isValidUser) throw new UnauthenticatedError('invalid credentials');

    const token = createJWT({ userId: user._id, role: user.role });
    console.log('JWT created successfully');

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: true,
      sameSite: 'none',
      path: '/',
      domain: process.env.NODE_ENV === 'production' ? '.onrender.com' : undefined,
    });
    
    console.log('Cookie set successfully');
    res.status(StatusCodes.OK).json({ 
      msg: 'user logged in',
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};
