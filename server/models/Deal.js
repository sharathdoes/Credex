const mongoose=require('mongoose')

const dealSchema = new mongoose.Schema({

    cardName: {
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
    providerConfirmation: {
      type: Boolean,
      default: false
    },
    requesterConfirmation: {
      type: Boolean, 
      default: false
    },
    status: {
      type: String,
      enum: ['available', 'pending', 'accepted', 'completed', 'declined'],
      default: 'available'
    }
  }, { timestamps: true });

// Add pre-save middleware to check confirmations
dealSchema.pre('save', function(next) {
  if (this.providerConfirmation && this.requesterConfirmation) {
    this.status = 'completed';
  }
  next();
});

const Deal=mongoose.model('Card',dealSchema)
module.exports=Deal;