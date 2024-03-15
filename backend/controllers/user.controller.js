import User from "../models/user.model.js";
export const getUserforSideBar = async (req, res) => {
  try {
    const loginUserId = req.user._id;
    const allUser = await User.find({ _id: { $ne: loginUserId } }).select(
      "-password"
    );
    res.status(200).json(allUser);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: " User Server error" });
  }
};
