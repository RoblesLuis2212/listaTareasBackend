import { Router } from "express";
import Tareasrouter from "./tareas.routes.js";

//http://localhost:3000/tareas
const router = Router();
router.use("/tareas", Tareasrouter);

export default router;
