import User from '../../models/User.js';

 export const updateUserInterests = async (req, res) => {
  try {
    const { userId, interests } = req.body;

    if (!userId || !interests || !Array.isArray(interests)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid input. User ID and interests array are required.'
      });
    }

    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    user.interests = interests;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'User interests updated successfully',
      interests: user.interests
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating user interests',
      error: error.message
    });
  }
};
