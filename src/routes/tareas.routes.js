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
router.route("/").get(obtenerTareas);
router.route("/:id").get(obtenerIDtarea);
router.route("/").post(agregarTarea);
router.route("/:id").put(editarTarea);
router.route("/:id").delete(borrarTarea);

export default router;
