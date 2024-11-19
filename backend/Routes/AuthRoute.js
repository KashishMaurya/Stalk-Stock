const {
  Signup,
  Login,
} = require("../Controllers/AuthController");

// Make sure you're destructuring the correct function
const { userVerification } = require("../Middlewares/AuthMiddleware");


const router = require("express").Router();

// Public routes
router.post("/signup", Signup); 
router.post("/login", Login); 


// router.post("/", userVerification);
// Protected routes (requiring user verification)
router.post("/", userVerification);


//! uncomment this as upper line same hai 
// router.post("/", userVerification, (req, res) => {
//   res.json({ message: "This is a protected route, only accessible by verified users" });
// });


module.exports = router;

// the /signup route has a post method attached to it, when it's been called, the Signup controller will be executed.
