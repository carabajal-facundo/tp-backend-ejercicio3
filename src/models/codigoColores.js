import { Schema, model } from "mongoose"; 

const codigoColorSchema = new Schema({
    nomColor:{
        type: String,
        minLength: 4,
        maxLength: 50,
        unique: true,
        require: true
    },
    codigo:{
        type: String,
        minLength: 4,
        maxLength: 15,
        unique: true,
        require: true
    }
});

const codigoColor = model('codigo',codigoColorSchema)

export default codigoColor;