
import { Router } from "express"; 
import jwt from "jsonwebtoken";
import Proyectos from "../models/proyectos.model.js";


const router = Router();

const secretKey = process.env.SECRET_KEY || "secret";

router.post("/my-proyect", async (req, res) => {
  const { proyectoName, password } = req.body;
  
console.log("aqui1" , proyectoName);
console.log("aqui2" , password);
  try {
    // busca el usuario por correo electrónico en la base de datos
    
    const proyecto = await Proyectos.findOne({ proyectoName: proyectoName });
    const proyectocontra = await Proyectos.findOne({ password: password });
    // verifica si el usuario y la contraseña son válidos
    
    const isValidUser = proyecto &&  proyectocontra;

    console.log("true o false ??" , isValidUser)
    
    // si el usuario y la contraseña son válidos, genera un token JWT y responde con él
    const token = isValidUser ? jwt.sign({ proyectoName }, secretKey, { expiresIn: "5d"  }) : null;
    
    return token ? res.json({ token }) : res.status(401).json({ message: "proyectoName or password are invalid" });
    console.log("salio bien")
  } catch (error) {
    console.error(error);
    console.log("ni modo hubo error")
    res.status(500).json({ message: "Internal server error" });
  }
});




import { nombre } from "../models/collection.model.js";

router.get('/api/user', async (req, res) => {
  try {
    // Obtener el token de autorización de la cabecera de la solicitud
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace('Bearer ', '');

    // Verificar el token y extraer el proyectoName
    const decodedToken = jwt.verify(token, secretKey);
    const { proyectoName } = decodedToken;
  

    // Buscar el proyecto en la base de datos y responder con los datos del usuario
    const collectionModel = await nombre(proyectoName);
   

    
    const docColeccion = await collectionModel.find({etapa:"1"});
    res.json(docColeccion);
    console.log("la coleccion fue enviada")
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Unauthorized' });
    console.log("nada fue enviado")
  }
});

// resto del código igual que en el ejemplo anterior
export default router;