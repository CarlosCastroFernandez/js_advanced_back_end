require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDataBase = require("./db/connect");
const router = require("./router/userRouter");
const app = express();
const PORT = parseInt(process.env.PORT) || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-type", "auth-token"],
  })
);

connectDataBase();

app.use("/getAllUser", router);

app.listen(PORT, () => {
  console.log("Escuchando...");
});
