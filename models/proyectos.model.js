import mongoose from "mongoose";

const proyectosSchema = new mongoose.Schema(
  {
    proyectoName: {
      type: String ,
      
    },
    password: {
      type: String ,
      
    },

  },
  {
    timestamps: true,
  }
);

export default mongoose.model("proyectos", proyectosSchema);


