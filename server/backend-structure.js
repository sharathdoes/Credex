// File Structure
/*
src/
├── models/
│   ├── User.js
│   ├── Coupon.js
│   ├── CreditCardOffer.js
│   ├── Chat.js
│   └── Complaint.js
├── routes/
│   ├── auth.js
│   ├── coupons.js
│   ├── creditCardOffers.js
│   ├── chat.js
│   └── complaints.js
├── controllers/
│   ├── authController.js
│   ├── couponController.js
│   ├── creditCardController.js
│   ├── chatController.js
│   └── complaintController.js
├── middleware/
│   ├── auth.js
│   └── validation.js
├── config/
│   └── db.js
└── app.js
*/

// models/User.js
const mongoose = require('mongoose');

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
  reputation: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

// models/Coupon.js
const couponSchema = new mongoose.Schema({
  provider: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['shopping', 'movie', 'restaurant', 'other']
  },
  code: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  claimedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  terms: {
    type: String
  }
}, { timestamps: true });

// models/CreditCardOffer.js
const creditCardOfferSchema = new mongoose.Schema({
  cardProvider: {
    type: String,
    required: true
  },
  cardType: {
    type: String,
    required: true
  },
  offerDescription: {
    type: String,
    required: true
  },
  terms: {
    type: String,
    required: true
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['available', 'pending', 'accepted', 'completed', 'declined'],
    default: 'available'
  }
}, { timestamps: true });

// models/Chat.js
const chatSchema = new mongoose.Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  messages: [{
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  relatedTo: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'onModel'
  },
  onModel: {
    type: String,
    required: true,
    enum: ['Coupon', 'CreditCardOffer']
  }
}, { timestamps: true });

// models/Complaint.js
const complaintSchema = new mongoose.Schema({
  complainant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  against: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  relatedTo: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'onModel'
  },
  onModel: {
    type: String,
    required: true,
    enum: ['Coupon', 'CreditCardOffer']
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'investigating', 'resolved', 'dismissed'],
    default: 'pending'
  },
  resolution: {
    type: String
  }
}, { timestamps: true });
