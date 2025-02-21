const Deal = require('../../models/Deal');

const getDeals = async (req, res) => {
  try {
    const { userId } = req.user; 

    // Find deals where user is provider
    const providedDeals = await Deal.find({ provider: userId })
      .populate('provider', '-password -creditCard.cardInfo')
      .populate('requester', '-password -creditCard.cardInfo');

    // Find deals where user is requester
    const requestedDeals = await Deal.find({ requester: userId })
      .populate('provider', '-password -creditCard.cardInfo')
      .populate('requester', '-password -creditCard.cardInfo');

    // Find completed deals where user is either provider or requester
    const completedDeals = await Deal.find({
      status: 'completed',
      $or: [
        { provider: userId },
        { requester: userId }
      ]
    })
    .populate('provider', '-password -creditCard.cardInfo')
    .populate('requester', '-password -creditCard.cardInfo');

    res.status(200).json({
      success: true,
      providedDeals: {
        count: providedDeals.length,
        deals: providedDeals
      },
      requestedDeals: {
        count: requestedDeals.length,
        deals: requestedDeals
      },
      completedDeals: {
        count: completedDeals.length,
        deals: completedDeals
      }
    });

  } catch (error) {
    console.error('Error fetching user deals:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching user deals',
      error: error.message
    });
  }
};

module.exports = getDeals;
