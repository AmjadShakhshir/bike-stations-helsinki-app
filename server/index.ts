import express from 'express';

import { loggingMiddleware } from "./middlewares/logging";
import { apiErrorHandler } from "./middlewares/ApiErrorHandler";
import { routeNotFound } from "./middlewares/routeNotFound";

const app = express();
const PORT = 8020;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiErrorHandler);
app.use(routeNotFound);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});