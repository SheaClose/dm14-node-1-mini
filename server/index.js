const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  port = process.env.port || 3001,
  bc = require("./controllers/book_controller");

app.use(bodyParser.json());
app.use(cors());

app.get("/api/books", bc.getBooks);
app.post("/api/books", bc.postBook);
app.put("/api/books/:id", bc.updateBook);
app.delete("/api/books/:id", bc.deleteBook);

const path = require("path");
app.use(express.static(path.join(__dirname, "../build")));

app.listen(port, () =>
  console.log(`This is Dr. Crane, I'm listening on port ${port}`)
);
