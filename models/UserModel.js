import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  // Basic Information
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: 'lastName',
  },
  location: {
    type: String,
    default: 'my city',
  },
  
  // Professional Information
  jobTitle: {
    type: String,
    default: '',
  },
  skills: {
    type: [String],
    default: [],
  },
  experienceLevel: {
    type: String,
    enum: ['Fresher', '1-3 years', '3-5 years', '5-10 years', '10+ years'],
    default: 'Fresher',
  },
  bio: {
    type: String,
    maxLength: 500,
    default: '',
  },
  
  // Social Links
  linkedin: {
    type: String,
    default: '',
  },
  github: {
    type: String,
    default: '',
  },
  portfolio: {
    type: String,
    default: '',
  },
  
  // Job Preferences
  preferredJobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'],
    default: 'Full-time',
  },
  preferredWorkMode: {
    type: String,
    enum: ['Remote', 'Hybrid', 'On-site'],
    default: 'Hybrid',
  },
  expectedSalary: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'INR',
    },
  },
  
  // Documents
  resume: {
    url: String,
    publicId: String,
  },
  
  // Notification Preferences
  notifications: {
    emailAlerts: {
      type: Boolean,
      default: true,
    },
    applicationUpdates: {
      type: Boolean,
      default: true,
    },
    jobRecommendations: {
      type: Boolean,
      default: true,
    },
    marketingEmails: {
      type: Boolean,
      default: false,
    },
  },
  
  // System Fields
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  avatar: String,
  avatarPublicId: String,
});

UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model('User', UserSchema);
