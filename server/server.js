const express = require("express");
const multer = require("multer");
const { v4: uuid } = require("uuid");
const mime = require("mime-types");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) =>
    cb(null, `${uuid()}.${mime.extension(file.mimetype)}`),
});
const upload = multer({ storage });

const app = express();
const PORT = 3003;

app.use("/uploads", express.static("uploads"));

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({ result: "ok" });
});

app.listen(PORT, () => console.log("Express server listening on PORT " + PORT));
