import express from "express"
import {signin} from "../controllers/landing/auth/signin.js"
import {signup} from "../controllers/landing/auth/signup.js"
import { updateUserInterests } from "../controllers/landing/interests.js";
const router=express.Router();

router.post('/sign-in', signin);
router.post('/sign-up', signup);
router.post('/update-interests', updateUserInterests);

export default router