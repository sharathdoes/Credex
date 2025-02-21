const User = require('../../models/User');


const getCreditCardUsers = async (req, res) => {
  try {
    const users = await User.find({ hasCreditCard: true }).select('creditCards').lean();
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error('Error fetching credit card users:', error);
    res.status(500).json({ success: false, message: 'Error fetching users with credit cards' });
  }
};


module.exports = getCreditCardUsers;
