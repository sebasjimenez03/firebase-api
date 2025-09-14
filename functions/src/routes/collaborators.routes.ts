import { Router } from "express";
import { listAllCollaborators } from "../controllers/collaborators.controller.js";

const r = Router();
r.get("/", listAllCollaborators);

export default r;