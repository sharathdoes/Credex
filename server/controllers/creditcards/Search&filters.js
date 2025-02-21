const User = require('../../models/User');


const filterCreditCardsByType = async (req, res) => {
  try {
    const { cardType } = req.query;
    if (!cardType) {
      return res.status(400).json({ success: false, message: 'Card type is required' });
    }

    const users = await User.find({ hasCreditCard: true })
      .select('-password -creditCards.cardInfo')
      .lean();

    const filteredUsers = users.map(user => {
      const filteredCards = user.creditCards.filter(card => card.cardType === cardType);
      return filteredCards.length > 0 ? { ...user, creditCards: filteredCards } : null;
    }).filter(user => user !== null);

    res.status(200).json({ success: true, count: filteredUsers.length, users: filteredUsers });
  } catch (error) {
    console.error('Error filtering credit cards:', error);
    res.status(500).json({ success: false, message: 'Error filtering credit cards by type' });
  }
};

const searchCreditCards = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ success: false, message: 'Search query is required' });
    }

    const users = await User.find({ hasCreditCard: true })
      .select('-password')
      .lean();

    const filteredUsers = users.map(user => {
      const filteredCards = user.creditCards.filter(card =>
        card.cardName?.toLowerCase().includes(query.toLowerCase()) ||
        card.cardType?.toLowerCase().includes(query.toLowerCase()) ||
        card.cardInfo?.toLowerCase().includes(query.toLowerCase())
      );
      return filteredCards.length > 0 ? { ...user, creditCards: filteredCards } : null;
    }).filter(user => user !== null);

    res.status(200).json({ success: true, count: filteredUsers.length, users: filteredUsers });
  } catch (error) {
    console.error('Error searching credit cards:', error);
    res.status(500).json({ success: false, message: 'Error searching credit cards' });
  }
};

const filterCreditCardsByRating = async (req, res) => {
  try {
    const { minRating = 0 } = req.query;

    const users = await User.find({ hasCreditCard: true, averageRating: { $gte: Number(minRating) } })
      .sort({ averageRating: -1 })
      .select('-password -creditCards.cardInfo')
      .lean();

    res.status(200).json({ success: true, count: users.length, users });
  } catch (error) {
    console.error('Error filtering credit cards by rating:', error);
    res.status(500).json({ success: false, message: 'Error filtering credit cards by rating' });
  }
};


module.exports = {
  filterCreditCardsByType,
  searchCreditCards,
  filterCreditCardsByRating
};
