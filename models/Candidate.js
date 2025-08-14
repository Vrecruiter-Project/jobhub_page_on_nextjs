import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Embedded education schema
const educationSchema = new mongoose.Schema({
  qualification: { type: String, trim: true },
  fieldOfStudy: { type: String, trim: true },
  educationProgress: { type: String, trim: true },
  yearPass: { type: String, trim: true }
}, { _id: false });

// Main candidate schema
const candidateSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
    select: false
  },
  role: {
    type: String,
    default: 'candidate'
  },
  number: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'],
    trim: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other']
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    required: true,
    trim: true
  },
  resume: {
    type: String // URL or file path
  },
  video: {
    type: String // URL to video
  },
  remark: {
    type: String
  },
  enrollment: {
    type: Boolean
  },
  education: [educationSchema],
  fresher: {
    type: Boolean,
    default: true
  },
  experience: {
    type: String,
    trim: true
  },
  appliedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }]
}, { timestamps: true });

// Hash password before saving
candidateSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Password comparison method
candidateSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.models.registeredcandidates || mongoose.model('registeredcandidates', candidateSchema);

// registeredcandidates