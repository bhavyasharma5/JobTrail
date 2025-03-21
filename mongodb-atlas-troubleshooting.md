# MongoDB Atlas Authentication Troubleshooting Guide

## Current Issue
We're encountering a "bad auth : Authentication failed" error when trying to connect to your MongoDB Atlas cluster. This is a common issue with several possible solutions.

## Step 1: Verify Database User Credentials

1. Log in to your [MongoDB Atlas Dashboard](https://cloud.mongodb.com/)
2. Go to your project and select your cluster (JobTrail)
3. In the left sidebar, click on "Database Access"
4. Check the user you've created with `readWriteAnyDatabase@admin` permissions
5. Click "Edit" next to this user
6. Reset the password to something simple (for testing purposes):
   - Click "Edit Password"
   - Enter a simple password (e.g., `Test12345`) without special characters
   - Click "Update User"

## Step 2: Update Your .env File

Update your .env file with the new password:

```
MONGO_URL=mongodb+srv://YOUR_USERNAME:YOUR_NEW_PASSWORD@jobtrail.v34fk.mongodb.net/?retryWrites=true&w=majority&authSource=admin
```

Make sure to replace:
- `YOUR_USERNAME` with your actual MongoDB user (not your Atlas account email)
- `YOUR_NEW_PASSWORD` with the new password you just set

## Step 3: Verify Network Access

1. In your MongoDB Atlas dashboard, go to "Network Access" in the left sidebar
2. Ensure that your current IP address is in the allowlist, or add "Allow Access from Anywhere" (0.0.0.0/0) for testing
3. Wait a few minutes for the changes to propagate

## Step 4: Test the Connection Again

Run the test script again:
```
node test-db-connection.js
```

## If It's Still Not Working

Try these additional solutions:

1. **Create a completely new database user**:
   - Go back to "Database Access"
   - Click "Add New Database User"
   - Choose "Password" authentication method
   - Enter a new username and password
   - Select "Built-in Role" as "Atlas admin"
   - Click "Add User"
   - Update your .env file with this new user's credentials

2. **Check if your password contains special characters**:
   - If your password has special characters, they might need to be URL encoded
   - Consider changing to a password with only letters and numbers for testing

3. **Try the MongoDB Shell**:
   - If you have MongoDB shell installed, try connecting directly using:
   ```
   mongosh "mongodb+srv://jobtrail.v34fk.mongodb.net/" --username YOUR_USERNAME
   ```
   - Enter your password when prompted
   - This will help determine if the issue is with your application or the credentials themselves

4. **Check Atlas Status**:
   - Visit [MongoDB Atlas Status](https://status.mongodb.com/) to ensure there are no ongoing service issues

## Other Common Issues

- **Confusion between Atlas account password and database user password**: Make sure you're using the database user password, not your Atlas account password
- **VPN interference**: If you're using a VPN, try disconnecting it
- **Firewall blocking the connection**: Check if your firewall is blocking the connection to MongoDB Atlas
- **DNS resolution issues**: Try using a different DNS resolver

Remember, for production use, once we resolve the connection issue, you should:
1. Use a strong password
2. Restrict IP access to only necessary addresses
3. Store your credentials securely 