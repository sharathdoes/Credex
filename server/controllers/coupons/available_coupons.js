const Coupon = require('../models/Coupon');

// Get all coupons
const getAllCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find().populate('provider', 'username');
        res.status(200).json(coupons);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching coupons' });
    }
};

// Search coupons by name or info
const searchCoupons = async (req, res) => {
    try {
        const { query } = req.query;
        const coupons = await Coupon.find({
            $or: [
                { couponName: { $regex: query, $options: 'i' } },
                { couponInfo: { $regex: query, $options: 'i' } }
            ]
        }).populate('provider', 'username');
        res.status(200).json(coupons);
    } catch (error) {
        res.status(500).json({ error: 'Error searching coupons' });
    }
};

// Filter coupons by typeOf
const filterCouponsByType = async (req, res) => {
    try {
        const { type } = req.query;
        const coupons = await Coupon.find({ typeOf: type }).populate('provider', 'username');
        res.status(200).json(coupons);
    } catch (error) {
        res.status(500).json({ error: 'Error filtering coupons' });
    }
};

module.exports = { getAllCoupons, searchCoupons, filterCouponsByType };
