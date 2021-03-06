//Modelo clientes

const mongoose= require('mongoose');
const Schema=mongoose.Schema;

//Creacion de Schema 
const clienteSchema = new Schema({
    nombre: String,
    apellido: String,
    cedula: Number,
    direccion: String,
    email: String,
    cel: Number
});

// Creacion del modelo
const Cliente= mongoose.model('Cliente', clienteSchema);
module.exports = Cliente;

