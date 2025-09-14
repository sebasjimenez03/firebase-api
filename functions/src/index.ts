import { onRequest } from 'firebase-functions/v2/https';
import express from 'express';
import cors from 'cors';
import { MY_FIREBASE_ZONE,MY_FIREBASE_DB_ID, } from "./config/secrets.js";

// Router logics
import { Router } from "express";
import productRoutes  from './routes/products.routes.js';
import collaboratorRoutes  from './routes/collaborators.routes.js';
import ordersRoutes  from './routes/orders.routes.js';

const app = express();
app.use(cors());

// VIA ROUTER
const router = Router();

router.use("/products", productRoutes);
router.use("/collaborators", collaboratorRoutes);
router.use("/orders", ordersRoutes);

//MOUNT THE ROUTER
app.use("/v1", router);


export const api = onRequest({ region: 'europe-southwest1', secrets: [MY_FIREBASE_ZONE,MY_FIREBASE_DB_ID,] }, app);