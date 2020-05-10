const express = require("express");
const cors = require("cors");
const uuid = require("uuid").v4;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  const todoList = [];
  for (let i = 0; i < 10; i++) {
    todoList.push({
      id: uuid(),
      content: `内容-----${i}`,
      status: i % 3 === 0,
    });
  }
  res.send(todoList);
});

app.listen(3000, () => {
  console.log("ok");
});
