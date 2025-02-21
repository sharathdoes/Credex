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

const searchCreditCards = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    const users = await User.find({
      hasCreditCard: true,
      $or: [
        { 'creditCard.cardName': { $regex: query, $options: 'i' }},
        { 'creditCard.cardType': { $regex: query, $options: 'i' }},
        { 'creditCard.cardInfo': { $regex: query, $options: 'i' }}
      ]
    }).select('-password'); // Exclude password only since we're searching in cardInfo

    res.status(200).json({
      success: true,
      count: users.length,
      users
    });

  } catch (error) {
    console.error('Error searching credit cards:', error);
    res.status(500).json({
      success: false,
      message: 'Error searching credit cards'
    });
  }
};

const filterCreditCardsByRating = async (req, res) => {
  try {
    const { minRating = 0 } = req.query;

    const users = await User.find({
      hasCreditCard: true,
      rating: { $gte: Number(minRating) }
    })
    .sort({ rating: -1 }) // Sort by rating in descending order
    .select('-password -creditCard.cardInfo');

    res.status(200).json({
      success: true,
      count: users.length,
      users
    });

  } catch (error) {
    console.error('Error filtering credit cards by rating:', error);
    res.status(500).json({
      success: false,
      message: 'Error filtering credit cards by rating'
    });
  }
};

module.exports = {
  filterCreditCardsByType,
  searchCreditCards,
  filterCreditCardsByRating
};
