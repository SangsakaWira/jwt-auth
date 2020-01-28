const router = require("express").Router();
const userController = require("../controllers/user");
// const { verifyAuth, verifyAdmin } = require("../config/middleware");

// Register an admin
router.post("/register", userController.register);
router.post("/login", userController.login)

module.exports = router;