import mongoose from "mongoose";
const couponSchema = new mongoose.Schema({
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    typeOf: {
        type: String,
        required: true
    },
    couponName: {
        type: String,
        required: true
    },
    couponInfo: {
        type: String,
        required: true
    },
    claimed: {
        type: Boolean,
        default: false
    },
    claimedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    couponCode: {
        type: String,
        required: true,
        unique: true
    },
    couponExpiryDate: {
        type: Date,
        required: true
    },
    onPool: {
        type: Boolean,
        default: false
    }
});

const Coupon = mongoose.model('Coupon', couponSchema);
export default Coupon;