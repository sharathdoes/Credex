// models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  ratings: [{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    value: { type: Number, min: 1, max: 5 },
    createdAt: Date
  }],
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  friends:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }],
  bio: {
    type: String
  },
  interests: [{
    type: String,
    trim: true
  }],
  hasCreditCard: {
    type: Boolean,
    default: false
  },
  creditCard: {
    cardName:{
      type:String,
      required:false
    },
    cardholderName: {
      type: String,
      trim: true
    },
    cardType: {
      type: String,
      enum: ['visa', 'mastercard', 'amex', 'discover']
    },
    cardInfo: {
      type: String,
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
