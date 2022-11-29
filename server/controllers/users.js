const User = require("../models/user");

module.exports = {
  signup: async (req, res) => {
    const { email, password } = req.body;
    try {
      await User.findOne({ email }).then(async (emailExist) => {
        if (emailExist) {
          res.status(404).json({ message: "Email already in use" });
        } else {
          await User.create(req.body);
          res.status(201).json({ message: "user added with success" });
        }
      });
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    }
  },
  signin: async (req, res) => {
    const { email, password } = req.body;
    try {
      await User.findOne({ email }).then(async (user) => {
        if (!user) {
          res.status(404).json({
            message:
              "Email does not exist ! please Enter the right Email or You can creat account",
          });
        }
        if (!password) {
          res.status(404).json({ message: "Wrong Password" });
        } else {
          res.status(201).json({
            message: "welcom to your home page",
          });
        }
      });
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    }
  },
};
