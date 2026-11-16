const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const jobRoutes = require("./routes/jobRoutes");
const app = express();

//middlware
app.use(cors());
app.use(express.json());
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("Job portal api is running!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
