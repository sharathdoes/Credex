const Coupon = require('../../models/Coupon');

const getCouponsByTypes = async (req, res) => {
  try {
    const { types } = req.body;

    if (!types || !Array.isArray(types)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid input. Types array is required.'
      });
    }

    const coupons = await Coupon.find({
      typeOf: { $in: types },
      claimed: false,
      onPool: false,
      couponExpiryDate: { $gt: new Date() }
    }).populate('provider');

    res.status(200).json({
      success: true,
      coupons
    });

  } catch (error) {
    res.status(500).json({
      success: false, 
      message: 'Error fetching coupons',
      error: error.message
    });
  }
};

module.exports = {
  getCouponsByTypes
};
