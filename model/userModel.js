const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({

    name:{
        type:String,
        required:[true,"El nombre es obligatorio"],
        minlength:[3,"Al menos debe de tener 3 caracteres"],
        maxlength:[30, "Al menos 3o caracteres"]
    },
    lastName:{
        type:String,
        required:[true, "El apellido es Requerido"]
    },
    email:{
        type:String,
        required:[true,"El correo es obligatorio"],
        unique:[true,"El email ya existe"],
        trim:true
    },
    password:{
        type:String,
        required:[true,"La contraseña es obligatoria"],
        minlength:[3,"Al menos debe de tener 3 caracteres"],
        
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    isActive:{
        type:Boolean,
        default:true
    }
});
const userModel=mongoose.model("User",userSchema,"users");

module.exports=userModel;