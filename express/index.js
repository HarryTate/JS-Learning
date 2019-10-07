const express = require("express");
const path = require("path");
const app = express();

const members = [
  {
    id: 1,
    name: "James",
    email: "james@gmail.com",
    status: "active"
  },
  {
    id: 2,
    name: "Roger",
    email: "roger@gmail.com",
    status: "inactive"
  },
  {
    id: 3,
    name: "Beatrice",
    email: "beatrice@gmail.com",
    status: "inactive"
  }
];
/* app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
}); */
app.get("/api/members", (req, res) => {
  res.json(members);
});
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
