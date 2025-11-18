const multer = require("multer");
const path = require("path");
const fs = require("fs");

// تابع ساخت فولدرهای تاریخ
function createUploadPath() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const uploadPath = path.join("uploads", year.toString(), month, day);

  // اگر وجود نداشت بساز
  fs.mkdirSync(uploadPath, { recursive: true });

  return uploadPath;
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderPath = createUploadPath();
    req.uploadFolder = folderPath; // برای استفاده در کنترلر
    cb(null, folderPath);
  },

  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const fileName = Date.now() + ext;
    cb(null, fileName);
  },
});

function fileFilter(req, file, cb) {
  const allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  if (allowed.includes(file.mimetype)) cb(null, true);
  else cb(new Error("فرمت فایل معتبر نیست"), false);
}

module.exports = multer({ storage, fileFilter });
