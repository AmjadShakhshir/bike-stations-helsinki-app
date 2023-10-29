import { z } from "zod";

export const stationSchema = z.object({
    Departure: z.string(),
    Return: z.string(),
    "Departure station id": z.string(),
    "Departure station name": z.string(),
    "Return station id": z.string(),
    "Return station name": z.string(),
    "Covered distance (m)": z.string(),
    "Duration (sec.)": z.string()
})

export const requestSchema = z.object({
    body: stationSchema,
});