import { check } from "express-validator";
import resultadoDeValidacion from "./resultadoValidacion";

export const validacionColor = [
    check("nomColor")
        .notEmpty()
        .withMessage("el nombre del color es obligatorio")
        .isLength({min: 5, max: 100})
        .withMessage("La tarea debe de contener entre 5 y 100 caracteres"),
    check("codigo")
        .notEmpty()
        .withMessage("el codigo del color es obligatorio")
        .isLength({min: 5, max: 100})
        .withMessage("La tarea debe de contener entre 5 y 100 caracteres"),,
    (req,res,next)=>{resultadoDeValidacion(req,res,next)}
    ];