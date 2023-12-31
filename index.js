import express from "express";
import cors from "cors"
import morgan from "morgan";
import path from "path";
import 'dotenv/config';
import './src/database/db_conexion'
import rutaColores from "./src/routes/codigoColores.routes";

const app = express();

// puerto
app.set('port',4000);
app.listen( app.get('port'), ()=>{console.log('se esta ejecutando en el puerto: '+app.get('port'))} );

// middelwares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));

// ruta
app.use('/apiColores',rutaColores);