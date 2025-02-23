import bcrypt from "bcryptjs";
import User from "../../../models/User.js";
import jwt from "jsonwebtoken";

export const signup = async (req,res) => {
  try {
    const { name, email, password, phoneNumber, hasCreditCard, creditCards } = req.body;

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "you're already signed up" });
    }
    const hasher = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, hasher);
    const user = new User({
      name,
      email,
      password: hashed,
      phoneNumber,
      hasCreditCard,
      creditCards,
    });
    await user.save();
    
    const token =   jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    const userRes = user.toObject();
    delete userRes.password
    
    return res.status(200).json({ message:"user successfully registered", user:userRes, token });
  } catch (error) {
    console.log("error in signup :", error);
    return res.status(500).json({ message: "error in signup function" });
  }
};
