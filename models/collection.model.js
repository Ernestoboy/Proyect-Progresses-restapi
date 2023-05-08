import mongoose from "mongoose";

const coleccionSchema = new mongoose.Schema(
  {
    Etapa: {
      type: String,
    },
    description: {
      type: String,
    },
    finalizacion: {
      type: String,
    },
    fecha: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const nombre = (holaName) => {
  const nombreColeccion = mongoose.model(holaName, coleccionSchema);
  return nombreColeccion;
};
