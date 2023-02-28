const { Router } = require("express");
const todoCtr = require("../controllers/todo-controller");

// INIT ROUTER
const router = Router();

// CREATE TODO
router.post("/todo/create", todoCtr.CREATE);

// UPDATE TODO
router.post("/todo/update/:id", todoCtr.UPDATE);

// GET TODO LIST
router.get("/todo/list", todoCtr.GET);

module.exports = router;
