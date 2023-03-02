const { read_file, write_file } = require("../fs/fs-api");
const usersFile = "users.json";

const ImgUpload = {
  UPLOAD: (req, res) => {
    try {
      const { id } = req.user;
      console.log(req.file.filename)

      const users = read_file(usersFile);
      users.forEach((user) => {
        if (user.id === id) {
          user.profileImg = req.file.filename;
        }
      });

      write_file(usersFile, users);
      res.send({
        message: "Successfully uploaded",
      });
      
    } catch (err) {
      res.send({ message: err.message });
    }
  },
};

module.exports = ImgUpload;
