import bcrypt from "bcryptjs";
import User from "../../../models/User.js";
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "you ain't signed up brother" });
    }
    const perfect = await bcrypt.compare(password, user.password);
    if (!perfect) {
      return res.status(404).json({ message: "password incorrect" });
    }

    const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h"
    });
    res.status(200).json({ message: " successful", token, user: user });
  } catch (error) {
    console.log("error occured in sign in");
    res.status(404).json({ message: "error occured", error });
  }
};
