const Deal = require('../../models/Deal');
const User = require('../../models/User');

const dealFinalStage = async (req, res) => {
  try {
    const { dealId } = req.params;
    const { providerConfirmed, requesterConfirmed } = req.body;

    const deal = await Deal.findById(dealId);
    if (!deal) {
      return res.status(404).json({
        success: false,
        message: 'Deal not found'
      });   
    }

    // Update confirmation status
    if (providerConfirmed !== undefined) {
      deal.providerConfirmed = providerConfirmed;
    }
    if (requesterConfirmed !== undefined) {
      deal.requesterConfirmed = requesterConfirmed;
    }

    // If both parties confirmed, mark deal as completed
    if (deal.providerConfirmed && deal.requesterConfirmed) {
      deal.status = 'completed';
    }

    await deal.save();

    res.status(200).json({
      success: true,
      message: 'Deal status updated successfully',
      deal
    });

  } catch (error) {
    console.error('Error updating deal final stage:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating deal status',
      error: error.message
    });
  }
};

const acceptAndTalk = async (req, res) => {
  try {
    const { userId, ownerId } = req.body;

    const user = await User.findById(userId);
    const owner = await User.findById(ownerId);

    if (!user || !owner) {
      return res.status(404).json({
        success: false,
        message: 'User or owner not found'
      });
    }

    // Add owner to user's friends array if not already present
    if (!user.friends.includes(ownerId)) {
      user.friends.push(ownerId);
      await user.save();
    }

    // Add user to owner's friends array if not already present 
    if (!owner.friends.includes(userId)) {
      owner.friends.push(userId);
      await owner.save();
    }

    res.status(200).json({
      success: true,
      message: 'Friend added successfully',
      user
    });

  } catch (error) {
    console.error('Error in accept and talk:', error);
    res.status(500).json({
      success: false,
      message: 'Error adding friend',
      error: error.message
    });
  }
};

module.exports = {
  dealFinalStage,
  acceptAndTalk
};
