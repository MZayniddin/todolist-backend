const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { read_file, write_file } = require("./fs/fs-api");
dotenv.config();
const usersFile = "users.json";
const bcrypts = require("bcryptjs");

// INIT APP
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.post("/auth/register", async (req, res) => {
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
      password: hashPassword,
    });
    write_file(usersFile, users);
    return res.status(200).send({ message: "Successfully registered" });
  }
  res.status(401).send({ message: "Password length should be more than 6" });
});

// LISTENING PORT
app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
