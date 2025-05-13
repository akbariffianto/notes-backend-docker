import express from "express";
import cors from "cors";
import route from "./routes/Route.js";
import "./model/index.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
 origin: [
    "http://localhost:5173",
  ], 
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 

app.use(express.json());
app.use(cookieParser());
app.use(route);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});