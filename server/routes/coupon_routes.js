import {getCoupons,addCoupons,myCoupons, updateCoupon} from "../controllers/home/getCoupons.js"
import {filterCouponsByType, searchCoupons, getAllCoupons} from "../controllers/coupons/available_coupons.js"
import express from "express"
const router=express.Router();

router.get('/getByTypes',getCoupons)
router.get('/getById',myCoupons)
router.get('/getAll',getAllCoupons)
router.get('/getBySearch',searchCoupons)
router.get('/getByFilter',filterCouponsByType)
router.post('/addCoupons', addCoupons)
router.post('/updateCoupons', updateCoupon)


export default router
