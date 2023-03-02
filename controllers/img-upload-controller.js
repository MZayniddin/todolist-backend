const { read_file, write_file } = require("../fs/fs-api");

const ImgUpload = {
  UPLOAD: (req, res) => {
    console.log(req.user);
    const { id } = req.user;

    res.send({
      img_name: req.file.filename,
    });
  },
};

module.exports = ImgUpload;
