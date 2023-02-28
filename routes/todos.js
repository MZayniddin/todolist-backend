const { Router } = require("express");
const todoCtr = require("../controllers/todo-controller");

// INIT ROUTER
const router = Router();

router.post("/todo/create", todoCtr.CREATE);

module.exports = router;
