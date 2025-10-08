export const prueba = (req, res) => {
  console.log("Desde el controlador de prueba");
  res.send("Prueba desde el controlador");
};

export const agregarTarea = (req, res) => {
  console.log("Tarea agregada...");
  res.send("Desde el controlador agregar tareas");
};

export const obtenerTareas = (req, res) => {
  console.log("Obteniendo tareas...");
  res.send("desde el controlador listar tareas");
};

export const borrarTarea = (req, res) => {
  console.log("Tarea eliminada...");
  res.send("Desde el controlador eliminar tarea");
};

export const editarTarea = (req, res) => {
  console.log("Tarea editada...");
  res.send("Desde el controlador editar tarea...");
};

export const obtenerIDtarea = (req, res) => {
  console.log("El id de la tarea es...");
  res.send("Desde el controlador obtener tarea por ID");
};
