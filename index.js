const express = require("express");
const app = express();
const multer = require("multer");
const uploadRouter = require("./routes/uploadRouter");
const PORT = process.env.PORT || 3002;
bodyParser = require("body-parser");
app.use(express.static("public"));

app.use("/", uploadRouter);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
