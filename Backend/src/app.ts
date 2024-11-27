import express from "express";

const app = express();

app.use(express.json());
const port = process.env.PORT;

app.listen(port, () => {
  console.table(` === 🏹 The Server is running on port 🏹 ${port}===`);
});
