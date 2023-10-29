/*  []  List each journey for departure and return stations, 
        covered distance in km and duration in minutes.
    []  Pagination
    []  Filter by departure and return stations
    []  Sort by departure and return stations, covered distance and duration
    []  Search by departure and return stations
    []  Add a new journey
    []  Get single journey
    []  Update a journey
    []  Delete a journey
*/

import { Request, Response, NextFunction } from 'express';

import stationService from '../../services/stationService';
import { ApiError } from '../../middlewares/errors/ApiError';

export function getAllStations(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const stations = stationService.getAllStations();
    if (!stations) {
        next(ApiError.resourceNotFound('Stations not found'));
    }
    res.status(200).json(stations);
}


