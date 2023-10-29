import { StationRepo } from "../models/stationModel";

const stationsRepo = new StationRepo();

const getAllStations = () => {
    return stationsRepo.getAll();
}

export default {
    getAllStations
}