import express from "express";

import { stationsController } from "../controllers/stations";

const stationsRouter = express.Router();

stationsRouter.get('/', stationsController.getAllStations);

export default stationsRouter;