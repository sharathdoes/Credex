import Coupon from "../../models/Coupon.js";

export const getCoupons = async (req, res) => {
  try {
    const { types } = req.body;

    if (!types || !Array.isArray(types)) {
      return res.status(400).json({ message: "Invalid Input" });
    }

    const coupons = await Coupon.find({
      typeOf: { $in: types },
      claimed: false,
      onPool: false,
      couponExpiryDate: { $gt: new Date() },
    }).populate("provider");

    res
      .status(200)
      .json({ success: true, message: "Fetched successfully", coupons });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the Coupons", error });
  }
};

export const addCoupons = async (req, res) => {
  try {
    const {
      userId,
      typeOf,
      couponName,
      couponInfo,
      CouponCode,
      couponExpiryDate,
    } = req.body;

    if (!userId || !typeOf || !couponName || !couponInfo || !CouponCode) {
      return res.status(400).json({ message: "Invalid Input" });
    }

    const coupon = new Coupon({
      provider: userId,
      typeOf,
      couponName,
      couponInfo,
      CouponCode,
      couponExpiryDate,
    });
    await coupon.save();

    res
      .status(200)
      .json({ success: true, message: "Added successfully", coupon });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the Coupons", error });
  }
};

export const myCoupons = async (req, res) => {
  try {
    const {
      userId
    } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "Invalid Input" });
    }
    const coupons= await Coupon.find({provider:userId})

    res
      .status(200)
      .json({ success: true, message: "Fetched successfully", coupons });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the Coupons", error });
  }
};


export const updateCoupon = async (req, res) => {
  try {
    const { couponId, userId, typeOf, couponName, couponInfo, CouponCode, couponExpiryDate } = req.body;

    if (!couponId || !userId) {
      return res.status(400).json({ message: "Invalid Input" });
    }

    const coupon = await Coupon.findOne({ _id: couponId, provider: userId });

    if (!coupon) {
      return res.status(404).json({ message: "Coupon not found or unauthorized" });
    }

    coupon.typeOf = typeOf || coupon.typeOf;
    coupon.couponName = couponName || coupon.couponName;
    coupon.couponInfo = couponInfo || coupon.couponInfo;
    coupon.CouponCode = CouponCode || coupon.CouponCode;
    coupon.couponExpiryDate = couponExpiryDate || coupon.couponExpiryDate;

    await coupon.save();

    res.status(200).json({ success: true, message: "Updated successfully", coupon });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while updating the coupon", error });
  }
};