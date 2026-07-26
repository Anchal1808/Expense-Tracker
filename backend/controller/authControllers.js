const User = require("../models/user");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
//login function
const loginUser= async(req,res)=>{
  try{
    const{email,password}=req.body;
    //check that user exist  or not
    const user=await User.findOne({email});
    //if user not found in db
    if(!user){
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
    //password verify
    const isMatch= await bcrypt.compare(password, user.password);
    //check password is crct or not
    if(!isMatch){
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
    //login successful response
    return res.status(200).json({
  message: "Login successful",
  _id: user._id,
  name: user.name,
  email: user.email,
});
  }
  catch(error){
    return res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  registerUser,
  loginUser,
};