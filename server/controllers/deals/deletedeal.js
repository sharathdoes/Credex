const Deal = require('../../models/Deal');

const deleteDeal = async (req, res) => {
  try {
    const { dealId } = req.params;

    const deal = await Deal.findById(dealId);
    if (!deal) {
      return res.status(404).json({
        success: false,
        message: 'Deal not found'
      });
    }

    await deal.remove();

    res.status(200).json({
      success: true,
      message: 'Deal deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting deal:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting deal',
      error: error.message
    });
  }
};

module.exports = deleteDeal;
