const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};



module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if all fields are provided
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Find user by email
    const user = await User.findOne({ email });

    // If user is not found, return error message
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Incorrect email or password", // More generic message to avoid exposing which one was wrong
      });
    }

    // Compare the provided password with the stored hashed password
    const auth = await bcrypt.compare(password, user.password);

    // If password doesn't match, return error message
    if (!auth) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    // If authentication is successful, create a token
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    // Respond with success message
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/*
The user's inputs are obtained from the req.body in the code above, and you then check the email to make sure no past registrations have been made. We'll use the values obtained from req.body to create the new user after that has occurred.

You don't need to worry about how the unique _id was obtained because MongoDB always assigns a new user with a unique _id

The newly formed user's _id is then supplied as an parameter to the createSecretToken() function, which handles token generation.

The cookie will be sent to the client with key of "token", and value of token.
*/

// whether the email and password match any previously stored user in the database.
