import express from "express";
import cors from "cors";

// import errorHandler from "./errors/handler";
import routes from "./routes";

import "./database/connection";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3003);
