const Complaint = require('../../models/Complaint');
const Deal = require('../../models/Deal');

const sendComplaint = async (req, res) => {
  try {
    const { dealId } = req.params;
    const { description } = req.body;

    // Validate required fields
    if (!dealId || !description ) {
      return res.status(400).json({
        success: false,
        message: 'Deal ID, description, '
      });
    }

    // Check if deal exists
    const deal = await Deal.findById(dealId);
    if (!deal) {
      return res.status(404).json({
        success: false,
        message: 'Deal not found'
      });
    }

    // Determine who the complaint is against based on againstProvider flag
    const complainantId = req.user.userId;
    const isProvider = complainantId.equals(deal.provider);
    const isRequester = complainantId.equals(deal.requester);
    const againstUserId = isProvider ? deal.requester : deal.provider;

    // Create new complaint with status 'pending'
    const complaint = new Complaint({
      dealId,
      description,
      complainant: complainantId,
      against: againstUserId,
      status: 'pending' // Set status to 'pending'
    });

    await complaint.save();

    res.status(201).json({
      success: true,
      message: 'Complaint submitted successfully',
      complaint,
      complainantId // Include complainant ID in response
    });

  } catch (error) {
    console.error('Error submitting complaint:', error);
    res.status(500).json({
      success: false, 
      message: 'Error submitting complaint',
      error: error.message
    });
  }
};

module.exports = sendComplaint;
