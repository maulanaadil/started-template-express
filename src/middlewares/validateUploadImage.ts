import { Request } from "express";
import multer, { FileFilterCallback } from "multer";

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback
): void => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const fileStorage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "./images/");
  },
  filename(req, file, callback) {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadImage = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
  limits: { fileSize: 8 * 1024 * 1024 },
});

export default uploadImage;
