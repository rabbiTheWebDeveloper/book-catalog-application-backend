import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
import { dbConnection } from "./app/utlis/dbConnection";;
import userRoute from "./app/modules/User/user.router";
import reviewRoute from "./app/modules/Review/review.router";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import bodyParser from "body-parser";
import routes from './app/routes';

const app: Application = express();
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(bodyParser.json());
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// db connection
dbConnection();
app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use("/api/v1", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use('/api/v1', routes);
app.use(globalErrorHandler);

export default app;
