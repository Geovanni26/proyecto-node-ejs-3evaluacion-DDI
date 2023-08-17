const  express = require("express");
const ejs = require("ejs");
const path = require("path");

var mysql = require("mysql");
var myConnection = require("express-myconnection");
var dbOptions = 
{
    host: "localhost",
    user:"root",
    password:"",
    port: 3306,
    database:"pruebas-alumnos-gggg"
};
var session = require("express-session");

const servidor = express();

servidor.set("puerto", 3000);
servidor.set("view engine", "ejs");
servidor.set("views", path.join(__dirname, "views"));
servidor.engine("html", ejs.renderFile);

servidor.use(express.urlencoded({extended: false}));
servidor.use(express.json());
servidor.use(myConnection(mysql, dbOptions, "single"));
servidor.use(session({
    secret: "miClaveSecreta_nodeJS",
    resave:false,
    saveUninitialized:false
}));

servidor.use("/", require("./models/index.js"));
servidor.use("/alumnos", require("./models/alumnos.js"));
servidor.use("/sesion", require("./models/sesion.js"));
servidor.use("/principal", require("./models/principal.js"));

servidor.use(express.static(path.join(__dirname, "publico")));



//Servidor escuchando
servidor.listen(servidor.get("puerto"), function()
{
    console.log("Servidor escuchando por el puerto: ",servidor.get("puerto"));
});

