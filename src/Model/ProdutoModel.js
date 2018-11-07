const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = function(){
    const ProdutoSchema = new Schema({
        
        codigo:{
            type: String,
            required: true
        },

        nome:{
            type: String,
            required: true
        },

        imagens:[String],
        
        caracteristicas:[{
            titulo:{
                type: String,
                required: true
            },
            valor:{
                type: String,
                required: true
            }
        }],

        status:{
            type: Boolean,
            default: true
        },

        preco:{
            type: Number,
            required: true
        },

        precoPromocional:{
            type: Number,
            required: false
        },

        promocao:{
            type: Boolean,
            default: false
        }

    });

    return mongoose.model('Produto', ProdutoSchema)
}
