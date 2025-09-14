import { Request, Response, NextFunction } from "express";
import * as productsService from "../services/products.service.js";

export async function listProducts(_req: Request, res: Response, next: NextFunction) {
  try {
    const data = await productsService.list();
    res.json(data);
  } catch (e) { next(e); }
}

export async function getProductById(_req: Request, res: Response, next: NextFunction) {
  try {
    const data = await productsService.get(_req.params.id);
    res.json(data);
  } catch (e) { next(e); }
}
