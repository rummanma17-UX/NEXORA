import type { Request, Response, NextFunction } from "express";
import { Prisma } from "../generated/prisma/client.js";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
    res.status(409).json({ error: "A record with this value already exists" });
    return;
  }

  console.error(err);
  res.status(500).json({ error: "Internal server error" });
}