const { Router } = require("express");

// INIT ROUTER
const router = Router();


router.post("/todo/create", (req, res) => {
  console.log(req.user)
})