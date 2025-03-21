// MongoDB Atlas credentials from environment variables are not used here
// This is simply a guide for creating a new user in the MongoDB Atlas web dashboard

/*
1. Log in to MongoDB Atlas at https://cloud.mongodb.com/
2. Select your project
3. In the left sidebar, click "Database Access"
4. Click "ADD NEW DATABASE USER"
5. Fill in these details:
   - Authentication Method: Password
   - Username: jobtrail_app
   - Password: JobTrail123 (or choose a secure password)
   - Database User Privileges: Select "Atlas admin" for testing purposes
                              (Later you can restrict this to "readWrite" on specific databases)
   - Temporary User: Don't check this
6. Click "Add User"
7. After creating the user, go to Network Access
8. Click "ADD IP ADDRESS"
9. Select "Allow Access from Anywhere" (for development)
10. Click "Confirm"

11. Once done, update your .env file with this new connection string:
    MONGO_URL=mongodb+srv://jobtrail_app:JobTrail123@jobtrail.v34fk.mongodb.net/jobtrail?retryWrites=true&w=majority
*/

console.log("This script provides instructions for creating a new MongoDB Atlas user.");
console.log("Please follow the steps in the comments above to create a new user in the MongoDB Atlas dashboard.");
console.log("Then update your .env file with the new connection string."); 