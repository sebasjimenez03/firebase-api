import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  const code = typeof err.status === "number" ? err.status : 500;
  const message = typeof err.message === "string" ? err.message : "Internal Server Error";
  const details = err?.issues ?? undefined; // zod errors, etc.
  res.status(code).json({ code, message, details });
}
