import mongoose, { mongo } from "mongoose";
import Mongoose, { Schema } from "mongoose";

const tareasSchema = new Schema(
  {
    descripcion: {
      type: String,
      minLength: 5,
      maxLength: 100,
      required: true,
      unique: true,
    },
    estado: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Tarea = mongoose.model("tarea", tareasSchema);

export default Tarea;
