import { Router } from "express";
import { listProducts,getProductById } from "../controllers/products.controller.js";

const r = Router();
r.get("/", listProducts);
r.get("/:id", getProductById);



export default r;