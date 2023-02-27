const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// INIT APP
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// ROUTES
const authRouter = require("./routes/auth");

app.use(authRouter)

// MIDDLEWARE
const authMiddleware = require("./middleware/auth-middleware");
app.use(authMiddleware)

// LISTENING PORT
app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
