import type { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    switch (req.method) {
      case "GET":
        return res.status(200).json({ status: "OK", message: "Booking endpoint is healthy" });

      default:
        return res.status(405).send({ error: "Method not allowed" });
    }
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error: { error, message: error.message } });
  }
};