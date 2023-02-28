const { Router } = require("express");

// INIT ROUTER
const router = Router();

// IMPORT CONTROLLER
const Auth = require("../controllers/auth-controller");

// REGISTER
router.post("/auth/register", Auth.REGISTER);

// LOGIN
router.post("/auth/login", Auth.LOGIN);

module.exports = router;
