import express from "express";
import cors from "cors";
import route from "./routes/route.js";

const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});