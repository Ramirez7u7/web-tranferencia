import { model, Schema } from "mongoose";

const jugadoresEsquema = new Schema({
    nombre:{
        type:String
    },
    epepat:{
        type: String
    },
    Numero:{
        type: Number
    }
})

export const ModeloJugadores = new model("tabla de jugadores",jugadoresEsquema)



