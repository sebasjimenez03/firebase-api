import { Router } from "express";
import { getOrdersBySeller, getOrders, getOrdersByClient } from "../controllers/orders.controller.js";

const r = Router();
r.get("/", getOrders);
r.get("/seller/:id", getOrdersBySeller);
r.get("/client/:id", getOrdersByClient);


export default r;