const User = require('../../models/User');

const rateUser = async (req, res) => {
  try {
    const { userId } = req.user; // Rating from this user
    const { targetUserId, rating } = req.body; // Rating for this user

    // Validate rating value
    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: 'Rating must be between 1 and 5'
      });
    }

    // Find target user
    const targetUser = await User.findById(targetUserId);
    if (!targetUser) {
      return res.status(404).json({
        success: false,
        message: 'Target user not found'
      });
    }

    // Check if user is rating themselves
    if (userId === targetUserId) {
      return res.status(400).json({
        success: false,
        message: 'Users cannot rate themselves'
      });
    }

    // Find existing rating from this user
    const existingRatingIndex = targetUser.ratings.findIndex(
      r => r.user.toString() === userId
    );

    if (existingRatingIndex !== -1) {
      // Update existing rating
      targetUser.ratings[existingRatingIndex].value = rating;
      targetUser.ratings[existingRatingIndex].createdAt = new Date();
    } else {
      // Add new rating
      targetUser.ratings.push({
        user: userId,
        value: rating,
        createdAt: new Date()
      });
    }

    // Calculate new average rating
    const totalRatings = targetUser.ratings.reduce((sum, r) => sum + r.value, 0);
    targetUser.averageRating = totalRatings / targetUser.ratings.length;

    await targetUser.save();

    res.status(200).json({
      success: true,
      message: 'Rating submitted successfully',
      averageRating: targetUser.averageRating
    });

  } catch (error) {
    console.error('Error submitting rating:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting rating',
      error: error.message
    });
  }
};

module.exports = rateUser;
