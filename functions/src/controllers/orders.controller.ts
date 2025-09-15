import { Request, Response, NextFunction } from "express";
import * as ordersService from "../services/orders.service.js";

export async function getOrders(_req: Request, res: Response, next: NextFunction) {
  try {
    const data = await ordersService.list();
    res.json(data);
  } catch (e) { next(e); }
}

export async function getOrderById(_req: Request, res: Response, next: NextFunction) {
  try {
    const data = await ordersService.get(_req.params.id);
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

export async function createNewOrder(_req: Request, res: Response, next: NextFunction) {
  try {
    validateCreate(_req.body);
    const created = await ordersService.createOrder(_req.body);
    res.status(201).json(created);
  } catch (e) { next(e); }
}


function validateCreate(body: any) {
  const { clientId, sellerId, status } = body || {};
  const errors = [];
  if (!clientId) errors.push('clientId es obligatorio');
  const validStatus = ['ACTIVE', 'CREATED', 'CANCELLED'];
  if (status && !validStatus.includes(status)) {
    errors.push(`status inválido. Usa: ${validStatus.join(', ')}`);
  }
  if (errors.length) {
    const err = new Error(errors.join('; '));
    /* err.status = 400; */
    throw err;
  }
}