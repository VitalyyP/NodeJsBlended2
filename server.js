const express = require("express");
const dotenv = require("dotenv");
const { colors } = require("./helpers");
const connectDB = require("./config/db");

// load config variables
dotenv.config({ path: "./config/.env" });

const app = express();

// body parser
app.use(express.json());

const { PORT } = process.env;

// routes
const books = require("./routes/booksRouter");
app.use("/api/v1/books", books);

//page not found
app.use((req, res) => {
  res.status(404).json({ mesage: "Not found" });
});

// connect db
connectDB();

const server = app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`.cyan.underline);
});

process.on("unhandledRejection", (err, _) => {
  if (err) {
    console.log(err.message.red.bold);
    server.close(() => process.exit);
  }
});
