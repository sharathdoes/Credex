const User = require('../../models/User');
const Deal = require('../../models/Deal');

const createDeal = async (req, res) => {
  try {
    const { cardName, offerDescription, terms, providerId, requesterId } = req.body;

    if (!cardName || !offerDescription || !terms || !providerId) {
      return res.status(400).json({
        success: false,
        message: 'Card name, offer description, terms and provider ID are required'
      });
    }

    const provider = await User.findById(providerId);
    if (!provider) {
      return res.status(404).json({
        success: false,
        message: 'Provider not found'
      });
    }

    const deal = new Deal({
      cardName,
      offerDescription,
      terms,
      provider: providerId,
      requester: requesterId || null,
      requesterConfirmed:true,
      status: 'pending' // Added deal status as 'pending'
    });

    await deal.save();

    res.status(201).json({
      success: true,
      message: 'Deal created successfully',
      deal
    });

  } catch (error) {
    console.error('Error creating deal:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating deal',
      error: error.message
    });
  }
};

module.exports = createDeal;
