// models/Complaint.js
const mongoose = require('mongoose');
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
    dealId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Deal',
      required: true
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

  const Complaint = mongoose.model('Complaint', complaintSchema);
  module.exports = Complaint;