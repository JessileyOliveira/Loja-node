const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = function(){
    const EstoqueSchema = new Schema({
        
        produto:{
            type: Schema.Types.ObjectId,
            ref: 'Produto'
        },

        naoReservado:{
            type: Number,
            required: true
        },
        
        reservado:{
            type: Number,
            default: true,
            default: 0
        },

        cor:{
            type: String,
            required: true
        },

        tamanho:{
            type: String,
            required: true
        },

        tipo:{
            type: String,
            required: true
        }

    });

    return mongoose.model('Estoque', EstoqueSchema)
}
