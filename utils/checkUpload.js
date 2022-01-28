const multer = require("multer");
const path = require("path");

const checkUpload = (req, file, cb, next) => {
  if (
    !file.mimetype === "image/jpeg" ||
    "image/png" ||
    "image/jpg" ||
    "image/gif"
  ) {
    return cb(new Error("Please use only png / jpg, jpeg, gif files"));
  } else {
    next();
  }
};

module.exports = checkUpload;
