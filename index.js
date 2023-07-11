import express from "express";
import cors from "cors"
import morgan from "morgan";
import path from "path";
import 'dotenv/config';
import './src/database/db_conexion'

const app = express();

// puerto
app.set('port',4000);

// middelwares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));

