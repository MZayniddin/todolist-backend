const multer = require("multer");
const path = require("path");
const { Router } = require("express");

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

router.post("/upload", upload.single("file"), (req, res) => {
  console.log("alkj");
  res.send({
    img_name: req.file.filename,
  });
});

module.exports = router;
