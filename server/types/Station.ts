import { z } from "zod";

import { stationSchema } from "../schemas/stationSchema";

export type Station = z.infer<typeof stationSchema>;