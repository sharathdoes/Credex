
const Complaint = require('../../models/Complaint');

const getAllComplaints = async (req, res) => {
  try {
    // Get all complaints with populated references
    const allComplaints = await Complaint.find()
      .populate('complainant', '-password -creditCard.cardInfo')
      .populate('against', '-password -creditCard.cardInfo')
      .populate('dealId');

    res.status(200).json({
      success: true,
      complaints: allComplaints
    });

  } catch (error) {
    console.error('Error fetching all complaints:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching complaints',
      error: error.message
    });
  }
};

const getUserComplaints = async (req, res) => {
  try {
    const { userId } = req.user;

    // Find complaints where user is complainant
    const userComplaints = await Complaint.find({ complainant: userId })
      .populate('complainant', '-password -creditCard.cardInfo')
      .populate('against', '-password -creditCard.cardInfo')
      .populate('dealId');

    res.status(200).json({
      success: true,
      complaints: {
        count: userComplaints.length,
        complaints: userComplaints
      }
    });

  } catch (error) {
    console.error('Error fetching user complaints:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching user complaints',
      error: error.message
    });
  }
};

module.exports = {
  getAllComplaints,
  getUserComplaints
};
