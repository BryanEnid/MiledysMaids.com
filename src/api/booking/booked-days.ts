import type { Request, Response } from "express";
import { getAllBookedDaysController } from "../controllers/Booking";

export default async (req: Request, res: Response) => {
  try {
    switch (req.method) {
      case "GET":
        return GET(req, res);

      default:
        return ErrorHandler("Method not allowed", res);
    }
  } catch (error) {
    return ErrorHandler(error, res);
  }
};

export const GET = (req: Request, res: Response) => {
  return getAllBookedDaysController(req, res);
};

const ErrorHandler = (error: any, res: Response) => {
  console.error(error);
  return res.status(500).json({ error });
};
