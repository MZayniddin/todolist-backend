const { read_file, write_file } = require("../fs/fs-api");

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

  LOGIN: (req, res) => {
    
  }
};

module.exports = Auth