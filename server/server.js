const express = require("express");

const app = express();
const PORT = 3003;

app.post("/upload", (req, res) => {
  res.json({ result: "ok" });
});

app.listen(PORT, () => console.log("Express server listening on PORT " + PORT));
