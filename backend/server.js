require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const todosRouter = require("./routes/todos");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/todos", todosRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.log("MongoDB error:", err));
