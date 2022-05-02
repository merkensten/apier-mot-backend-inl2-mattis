// imports
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";

// Config
import Config from "./config/Config.js";

// Middlewares
import middlewares from "./api/middlewares/Middlewares.js";

// routes
import ProductRoutes from "./api/routes/Product.routes.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("common"));

// routes
ProductRoutes.routes(app);

// middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// Config
Config.connectToDatabase();
Config.connectToPort(app);

export default app;
