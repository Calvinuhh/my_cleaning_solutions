const PORT = 3000;

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("/src/index.html", {
    root: __dirname,
  });
});

app.use(cors());
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto: http://localhost:${PORT}
  `);
});
