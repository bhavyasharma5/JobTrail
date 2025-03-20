import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import Job from '../models/JobModel.js';
import { formatImage } from '../middleware/multerMiddleware.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadsDirectory = path.join(__dirname, '..', 'public', 'uploads');

// Ensure uploads directory exists
if (!fs.existsSync(uploadsDirectory)) {
  fs.mkdirSync(uploadsDirectory, { recursive: true });
}

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};
export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};
export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;
  delete newUser.role;

  if (req.file) {
    // Generate a unique filename
    const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}.jpg`;
    const filepath = path.join(uploadsDirectory, filename);
    
    // Save the file
    const file = formatImage(req.file);
    // Remove the data:image/xxx;base64, part
    const base64Data = file.split(',')[1];
    fs.writeFileSync(filepath, Buffer.from(base64Data, 'base64'));
    
    // Set avatar URL for local development
    newUser.avatar = `/uploads/${filename}`;
    newUser.avatarPublicId = filename;
  }
  
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  // Delete old avatar if there was one
  if (req.file && updatedUser.avatarPublicId) {
    try {
      const oldFilepath = path.join(uploadsDirectory, updatedUser.avatarPublicId);
      if (fs.existsSync(oldFilepath)) {
        fs.unlinkSync(oldFilepath);
      }
    } catch (error) {
      console.log('Error deleting old avatar', error);
    }
  }

  res.status(StatusCodes.OK).json({ msg: 'update user' });
};
