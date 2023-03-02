const { Router } = require("express");

// INIT ROUTER
const router = Router();

// IMPORT UPLOAD MIDDLEWARE
const upload = require("../middleware/img-upload-middleware");

// IMPORT CONTROLLER
const uploadCtr = require("../controllers/img-upload-controller");

// UPLOAD IMAGE
router.post("/profile/img", upload.single("file"), uploadCtr.UPLOAD);

module.exports = router;
