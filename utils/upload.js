const multer = require("multer");
const path = require("path");

const isPicture = (name, mimetype) => {
  return (
    (name.match(/.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/) &&
      mimetype == "image/png") ||
    mimetype == "image/jpg" ||
    mimetype == "image/jpeg" ||
    mimetype == "image/gif"
  );
};

const fileFilter = (req, file, cb) => {
  // Accept image file types only
  const { originalname, mimetype } = file;
  if (!isPicture(originalname, mimetype)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb("Only image files are allowed!", false);
  }
  cb(null, true);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      "/Users/col/Desktop/WBS/05_Exercises/multer-exercise/public/uploads"
    );
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage, fileFilter });

module.exports = upload;
