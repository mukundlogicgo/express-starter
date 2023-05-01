import express from "express";
import morgan from "morgan";
import { DB_URL, PORT } from "./config/defaultValues.js";
import serverStatusRouter from "./routes/serverStatus/serverStatus.js";
import { connectDB } from "./config/db.js";
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", serverStatusRouter);

// start server
if (PORT) {
  app.listen(PORT, async () => {
    console.log(`server running ${PORT}`);
    await connectDB({ DB_URL });
  });
} else {
  console.log(`[ERROR] PORT is required`);
}

// handle global exception
process.on("uncaughtException", (err, origin) => {
  console.error(`[ERROR] Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("[ERROR] Unhandled Rejection at:", promise, "reason:", reason);
});
