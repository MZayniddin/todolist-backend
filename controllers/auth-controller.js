const { read_file, write_file } = require("../fs/fs-api");
const usersFile = "users.json";
const bcrypts = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Auth = {
  REGISTER: async (req, res) => {
    const { email, username, password } = req.body;
    const users = read_file(usersFile);
    const checkUser = users.find((user) => user.email === email);

    if (checkUser)
      return res.status(401).send({ message: "This user already exists!" });
    else if (password?.length >= 6) {
      const hashPassword = await bcrypts.hash(password, 12);
      users.push({
        id: users[users.length - 1] ? users[users.length - 1].id + 1 : 1,
        email: email,
        username,
        password: hashPassword,
        profileImg: "",
      });
      write_file(usersFile, users);
      return res.status(200).send({ message: "Successfully registered" });
    }
    res.status(401).send({ message: "Password length should be more than 6" });
  },

  LOGIN: async (req, res) => {
    const { email, password } = req.body;
    const checkUser = read_file(usersFile).find((user) => user.email === email);
    if (!checkUser) {
      return res.status(404).send({ message: "User not found!" });
    }

    const checkPassword = await bcrypts.compare(password, checkUser.password);

    if (!checkPassword) {
      return res.status(401).send({ message: "Invalid password!" });
    }

    const token = jwt.sign(
      { id: checkUser.id, email: email },
      process.env.SECRET_KEY,
      { expiresIn: process.env.JWT_TIME }
    );

    res.status(200).send({ token: token });
  },
};

module.exports = Auth;
