const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const usersFile = "users.json";
const bcrypts = require("bcryptjs");

// INIT APP
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// ROUTES
const authRouter = require("./routes/auth");

app.use(authRouter)

// LISTENING PORT
app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
