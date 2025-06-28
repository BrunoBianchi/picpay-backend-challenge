import express from "express";
import * as dotenv from "dotenv";
import expressRateLimit from "express-rate-limit";
import { AppDataSource } from "./database/database";
import api from "./views/API/APIRoute";

dotenv.config();
const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  expressRateLimit({
    handler: () => {
      return "Too many requests";
    },
    limit: 100,
    windowMs: 1000 * 60 * 60,
  })
);

app.use('/api',api )

AppDataSource.initialize().then(() => {
  console.log("Database connected");
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  });
});
