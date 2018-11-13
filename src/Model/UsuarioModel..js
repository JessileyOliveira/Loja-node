const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = function(){
    const UsuarioSchema = new Schema({
        
        nome:{
            type: String,
            required: true
        },

        email:{
            type: String,
            required: true
        },
        
        endereco:[{
            logradouro:{
                type: String,
                required: true
            },
            bairro:{
                type: String,
                required: true
            },
            cidade:{
                type: String,
                required: true
            },
            estado:{
                type: String,
                required: true
            },
            numero:{
                type: Number,
                required: true
            },
            complemento:{
                type: String,
                required: false
            },
            cep:{
                type: String,
                required: false
            }
        }],

        nascimento:{
            type: Date,
            default: true
        },

        telefone:[{

            numero:{
                type: String,
                required: true
            },
            tipo:{
                type: String,
                required: true
            }
        }],

        sexo:{
            type: Number,
            required: true
        },

        login:{
            type: String,
            required: true
        },

        senha:{
            type: String,
            required: true
        },

        carrinho:[{
            qunatidade:{
                type: Number,
                required: true,
                default: 1
            }
            // ,

            // estoque:{
            //     type: Schema.Types.ObjectId,
            //     ref: 'Estoque'
            // }

        }]

    });

    return mongoose.model('Usuario', UsuarioSchema)
}
