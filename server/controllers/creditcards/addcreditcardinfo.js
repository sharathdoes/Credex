const User = require('../../models/User');

const updateCreditCardInfo = async (req, res) => {
  try {
    const { userId } = req.user;
    const { cardName, cardholderName, cardType, cardInfo } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    user.creditCards.push({ cardName, cardholderName, cardType, cardInfo });
    user.hasCreditCard = true;
    await user.save();

    const userResponse = user.toObject();
    userResponse.creditCards.forEach(card => delete card.cardInfo);

    res.status(200).json({ success: true, message: 'Credit card information updated successfully', user: userResponse });
  } catch (error) {
    console.error('Error updating credit card info:', error);
    res.status(500).json({ success: false, message: 'Error updating credit card information' });
  }
};

module.exports = updateCreditCardInfo;
