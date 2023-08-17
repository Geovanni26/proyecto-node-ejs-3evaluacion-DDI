const express =require("express");
const route = express.Router();
const controladorSesion=require("../controllers/sesionController");

route.post("/iniciar", controladorSesion.iniciar);
route.post("/cerrar",controladorSesion.cerrar);

module.exports=route;
