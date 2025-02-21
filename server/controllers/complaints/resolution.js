const Complaint = require('../../models/Complaint');

const resolveComplaint = async (req, res) => {
  try {
    const { complaintId, resolution } = req.body;

    // Verify admin role
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Only admins can resolve complaints'
      });
    }

    // Find the complaint
    const complaint = await Complaint.findById(complaintId);
    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: 'Complaint not found'
      });
    }

    // Add resolution
    complaint.resolution = resolution;
    complaint.status = 'resolved';
    complaint.resolvedAt = new Date();
    complaint.resolvedBy = req.user.userId;

    await complaint.save();

    res.status(200).json({
      success: true,
      message: 'Complaint resolved successfully',
      complaint
    });

  } catch (error) {
    console.error('Error resolving complaint:', error);
    res.status(500).json({
      success: false,
      message: 'Error resolving complaint',
      error: error.message
    });
  }
};

module.exports = resolveComplaint;
