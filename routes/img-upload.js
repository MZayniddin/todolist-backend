const multer = require("multer");
const path = require("path");
const { Router } = require("express");

// INIT ROUTER
const router = Router();

// CONFIG MULTER STORAGE
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// IMPORT CONTROLLER
const uploadCtr = require("../controllers/img-upload-controller");

// UPLOAD IMAGE
router.post("/profile/img", upload.single("file"), uploadCtr.UPLOAD);

module.exports = router;
