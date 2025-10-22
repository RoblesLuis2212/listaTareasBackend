import { json } from "express";
import Tarea from "../models/tareas.js";

export const prueba = (req, res) => {
  console.log("Desde el controlador de prueba");
  res.send("Prueba desde el controlador");
};

export const agregarTarea = async (req, res) => {
  try {
    console.log(req);
    const nuevaTarea = new Tarea(req.body);
    await nuevaTarea.save();
    res.status(201).json({ mensaje: "Tarea agregada exitosamente" });
  } catch (err) {
    res.status(500).json({ mensaje: "Ocurrio un error al crear la tarea" });
  }
  res.send("Desde el controlador agregar tareas");
};

export const obtenerTareas = async (req, res) => {
  try {
    //Buscar la coleccion de tareas
    const tareas = await Tarea.find();
    //devolvemos las tareas solicitadas
    res.status(200).json(tareas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: "Error al obtener las tareas" });
  }
};

export const obtenerIDtarea = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "La tarea solicitada no fue encontrada" });
    }
    res.status(200).json(tareaBuscada);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: "Error al obtener la tarea" });
  }
};

export const borrarTarea = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "La tarea solicitada no fue encontrada" });
    }
    await Tarea.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Tarea eliminada correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: "Ocurrio un error al eliminar la tarea" });
  }
};

export const editarTarea = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "La tarea solicitada no fue encontrada" });
    }
    await Tarea.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "Tarea editada correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: "Ocurrio un error al editar la tarea" });
  }
};
