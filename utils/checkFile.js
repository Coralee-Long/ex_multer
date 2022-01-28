const multer = require("multer");
const path = require("path");

const checkFile = (req, file, next) => {
  console.log(req.file);
  // if(!req){
  //     return cb(new Error("No file! Attach one!"));
  // } else {
  // console.log("yey")
  // }
};

module.exports = checkFile;

// const checkUpload = (req, file, cb, next) => {
//   if (
//     !file.mimetype === "image/jpeg" ||
//     "image/png" ||
//     "image/jpg" ||
//     "image/gif"
//   ) {
//     return cb(new Error("Please use only png / jpg, jpeg, gif files"));
//   } else {
//     next();
//   }
// };
