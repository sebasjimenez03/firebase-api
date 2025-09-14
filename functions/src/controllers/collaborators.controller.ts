import { Request, Response, NextFunction } from "express";
import * as collaboratorsService from "../services/collaborators.service.js";

export async function listAllCollaborators(_req: Request, res: Response, next: NextFunction) {
  try {
    const data = await collaboratorsService.listCollaborators();
    res.json(data);
  } catch (e) { next(e); }
}