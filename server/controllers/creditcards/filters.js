const User = require('../../models/User');

const filterCreditCardsByType = async (req, res) => {
  try {
    const { cardType } = req.query;

    if (!cardType) {
      return res.status(400).json({
        success: false,
        message: 'Card type is required'
      });
    }

    const users = await User.find({
      'creditCard.cardType': cardType,
      hasCreditCard: true
    }).select('-password -creditCard.cardInfo'); // Exclude sensitive information

    res.status(200).json({
      success: true,
      count: users.length,
      users
    });

  } catch (error) {
    console.error('Error filtering credit cards:', error);
    res.status(500).json({
      success: false,
      message: 'Error filtering credit cards by type'
    });
  }
};

module.exports = filterCreditCardsByType;
