const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// INIT APP
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// MIDDLEWARE
const authMiddleware = require("./middleware/auth-middleware");

// ROUTES
const authRouter = require("./routes/auth");
const todoRouter = require("./routes/todos");
app.use(authRouter);
app.use(authMiddleware);
app.use(todoRouter);

// LISTENING PORT
app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
