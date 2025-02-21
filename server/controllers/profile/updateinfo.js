const User = require('../../models/User');

const updateUserInfo = async (req, res) => {
  try {
    const { userId } = req.user;
    const { name, email, phone, address, bio } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Update fields if provided
    if (name) user.name = name;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    if (address) user.address = address;
    if (bio) user.bio = bio;

    await user.save();

    res.status(200).json({
      success: true,
      message: 'User information updated successfully',
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        bio: user.bio
      }
    });

  } catch (error) {
    console.error('Error updating user information:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating user information',
      error: error.message
    });
  }
};

module.exports = updateUserInfo;
