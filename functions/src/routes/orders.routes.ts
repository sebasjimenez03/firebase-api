import { Router } from "express";
import { getOrdersBySeller, getOrders, getOrdersByClient, createNewOrder } from "../controllers/orders.controller.js";

const r = Router();
r.get("/", getOrders);
r.get("/seller/:id", getOrdersBySeller);
r.get("/client/:id", getOrdersByClient);

r.post('/', createNewOrder);
/* r.put('/:id', c.updateClient);
r.delete('/:id', c.disableClient); */


export default r;