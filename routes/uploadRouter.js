const uploadRouter = require("express").Router();
const multer = require("multer");
const path = require("path");
const checkUpload = require("../utils/checkUpload");
const checkFile = require("../utils/checkFile");
const upload = require("../utils/upload");

uploadRouter.get("/", (req, res) => {
  res.sendFile("../public/index.html");
});

uploadRouter.post(
  "/upload-profile-pic",
  upload.single("profile_pic"),

  (req, res, next) => {
    const file = req.file;
    const path = `http://localhost:3002/uploads/${req.file.filename}`;
    console.log(path);

    res.send(
      `<h2>Here is the picture:</h2><img src=${path} alt="your uploaded image" width="500px" />`
    );
  }
);

module.exports = uploadRouter;
