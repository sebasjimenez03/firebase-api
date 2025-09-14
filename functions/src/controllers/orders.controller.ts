import { Request, Response, NextFunction } from "express";
import * as ordersService from "../services/orders.service.js";

export async function getOrders(_req: Request, res: Response, next: NextFunction) {
  try {
    const data = await ordersService.list();
    res.json(data);
  } catch (e) { next(e); }
}

export async function getOrdersBySeller(_req: Request, res: Response, next: NextFunction) {
  try {
    const data = await ordersService.getSellerOrders(_req.params.id);
    res.json(data);
  } catch (e) { next(e); }
}

export async function getOrdersByClient(_req: Request, res: Response, next: NextFunction) {
  try {
    const data = await ordersService.getClientOrders(_req.params.id);
    res.json(data);
  } catch (e) { next(e); }
}