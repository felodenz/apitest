import express from "express";
import router from "./handler/handler.js";

const app = express();
app.use(express.json());

app.use("/api/test",router);

app.listen(3000);
