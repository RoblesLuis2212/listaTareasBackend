import { Router } from "express";
import {
  prueba,
  agregarTarea,
  obtenerTareas,
  borrarTarea,
  editarTarea,
  obtenerIDtarea,
} from "../controllers/tareas.controllers.js";

const router = Router();

// router.route("/test").get(prueba);
router.route("/").post(agregarTarea).get(obtenerTareas);
router.route("/:id").get(obtenerIDtarea).delete(borrarTarea).put(editarTarea);

export default router;
