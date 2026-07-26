const Driver = require("../model/Driver");
const User = require("../model/user");
const customer = require("../model/Customer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const coonectedDatabase = require("../connection/connection");

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    await coonectedDatabase();
    const foundUser = await User.findOne({ email: email.toLowerCase().trim() });

    if (foundUser) {
      return res.send(400).json({
        msg: "user already registerd with this email",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    // specification
// newUser / payLoad are defined inside if block the local variables not global  
      let newUser 
      let payLoad
    if (role === "Driver") {
       newUser = await Driver.create({
        name: name.toLowerCase().trim(),
        email: email.toLowerCase().trim(),
        password: hashedPassword,
        role: "Driver",
      });
       payLoad = {
        id: newUser._id,
        role: "Driver",
      };
    }

    if (role === "Customer") {
       newUser = await customer.create({
        name: name.toLowerCase().trim(),
        email: email.toLowerCase().trim(),
        password: hashedPassword,
        role: "Customer",
      });
       payLoad = {
        id: newUser._id,
        role: "Customer",
      };
    }

    const token = await jwt.sign(payLoad ,process.env.JWT_SECRET, { expiresIn: '1d' })

    return res.status(201).json({
      data: newUser,
      token:token ,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
const login = async (req, res) => {
  try {
    return res.send('working on login ')
  } catch (error) {

  }
};
const logout = async (req, res) => {
  try {
    return res.send('working on logout ')

  } catch (error) {

  }
};

module.exports = {
  register,
  login,
  logout,
};
