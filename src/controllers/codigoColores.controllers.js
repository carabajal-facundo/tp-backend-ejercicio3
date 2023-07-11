import codigoColor from "../models/codigoColores";

export const listarColores = async (req,res) => {
    try {
        const colores = await codigoColor.find();
        res.status(200).json(colores);
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje:'Error no se encontraron colores'});
    }
};

export const agregarColor = async (req,res) => {
    try {
        const nuevoColor = new codigoColor(req.body);
        await nuevoColor.save();
        res.status(201).json({mensaje: 'se logro agregar el color ingresado'});
    } catch (error) {
        console.log(error);
        res.status(400).json({mensaje:'Error al agregar el color'});
    }
};

export const modificarColor = async (req,res) => {
    try {
        await codigoColor.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({mensaje: 'Se logro modificar el color'});
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje:'Error no se encontro el color'});
    }
};

export const borrarColor = async (req,res) => {
    try {
        await codigoColor.findOneAndDelete(req.params.id);
        res.status(200).json({mensaje: 'se logro elimiinar el color'});
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje:'Error no se encontro color'});
    }
};