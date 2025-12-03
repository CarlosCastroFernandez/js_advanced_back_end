const { default: mongoose } = require("mongoose");
const userModel = require("../model/userModel");
const bcrypt=require("bcrypt");

const getAllUser = async (req, res) => {
  try {
    const users = await userModel
      .find()
      .select("name lastName email role isActive _id");
    if (users.length === 0) {
      return res.status(200).send({
        status: "Failed",
        message: "No hay usuarios",
      });
    }
   return res.status(200).send({ data: users });
  } catch (error) {
    return res.status(200).send({
      status: "Failed",
      message: "Hubo un error: " + error.message,
    });
  }
};

const insertAllUser=async (req,res)=>{

  const usuarios = [
  { name: "Juan1", lastName: "Pérez1", email: "juan1@example.com", password: "123456", role: "user" },
  { name: "Ana2", lastName: "García2", email: "ana2@example.com", password: "123456", role: "admin" },
  { name: "Luis3", lastName: "Martínez3", email: "luis3@example.com", password: "123456", role: "user" },
  { name: "María4", lastName: "Rodríguez4", email: "maria4@example.com", password: "123456", role: "user" },
  { name: "Carlos5", lastName: "Sánchez5", email: "carlos5@example.com", password: "123456", role: "admin" },
  { name: "Lucía6", lastName: "Gómez6", email: "lucia6@example.com", password: "123456", role: "user" },
  { name: "Pedro7", lastName: "López7", email: "pedro7@example.com", password: "123456", role: "user" },
  { name: "Elena8", lastName: "Hernández8", email: "elena8@example.com", password: "123456", role: "user" },
  { name: "Javier9", lastName: "Jiménez9", email: "javier9@example.com", password: "123456", role: "admin" },
  { name: "Laura10", lastName: "Ruiz10", email: "laura10@example.com", password: "123456", role: "user" },
  { name: "Usuario11", lastName: "Apellido11", email: "usuario11@example.com", password: "123456", role: "user" },
  { name: "Usuario12", lastName: "Apellido12", email: "usuario12@example.com", password: "123456", role: "user" },
  { name: "Usuario13", lastName: "Apellido13", email: "usuario13@example.com", password: "123456", role: "user" },
  { name: "Usuario14", lastName: "Apellido14", email: "usuario14@example.com", password: "123456", role: "user" },
  { name: "Usuario15", lastName: "Apellido15", email: "usuario15@example.com", password: "123456", role: "admin" },
  { name: "Usuario16", lastName: "Apellido16", email: "usuario16@example.com", password: "123456", role: "user" },
  { name: "Usuario17", lastName: "Apellido17", email: "usuario17@example.com", password: "123456", role: "user" },
  { name: "Usuario18", lastName: "Apellido18", email: "usuario18@example.com", password: "123456", role: "user" },
  { name: "Usuario19", lastName: "Apellido19", email: "usuario19@example.com", password: "123456", role: "user" },
  { name: "Usuario20", lastName: "Apellido20", email: "usuario20@example.com", password: "123456", role: "admin" },
  { name: "Usuario21", lastName: "Apellido21", email: "usuario21@example.com", password: "123456", role: "user" },
  { name: "Usuario22", lastName: "Apellido22", email: "usuario22@example.com", password: "123456", role: "user" },
  { name: "Usuario23", lastName: "Apellido23", email: "usuario23@example.com", password: "123456", role: "user" },
  { name: "Usuario24", lastName: "Apellido24", email: "usuario24@example.com", password: "123456", role: "user" },
  { name: "Usuario25", lastName: "Apellido25", email: "usuario25@example.com", password: "123456", role: "admin" },
  { name: "Usuario26", lastName: "Apellido26", email: "usuario26@example.com", password: "123456", role: "user" },
  { name: "Usuario27", lastName: "Apellido27", email: "usuario27@example.com", password: "123456", role: "user" },
  { name: "Usuario28", lastName: "Apellido28", email: "usuario28@example.com", password: "123456", role: "user" },
  { name: "Usuario29", lastName: "Apellido29", email: "usuario29@example.com", password: "123456", role: "user" },
  { name: "Usuario30", lastName: "Apellido30", email: "usuario30@example.com", password: "123456", role: "admin" },
  { name: "Usuario31", lastName: "Apellido31", email: "usuario31@example.com", password: "123456", role: "user" },
  { name: "Usuario32", lastName: "Apellido32", email: "usuario32@example.com", password: "123456", role: "user" },
  { name: "Usuario33", lastName: "Apellido33", email: "usuario33@example.com", password: "123456", role: "user" },
  { name: "Usuario34", lastName: "Apellido34", email: "usuario34@example.com", password: "123456", role: "user" },
  { name: "Usuario35", lastName: "Apellido35", email: "usuario35@example.com", password: "123456", role: "admin" },
  { name: "Usuario36", lastName: "Apellido36", email: "usuario36@example.com", password: "123456", role: "user" },
  { name: "Usuario37", lastName: "Apellido37", email: "usuario37@example.com", password: "123456", role: "user" },
  { name: "Usuario38", lastName: "Apellido38", email: "usuario38@example.com", password: "123456", role: "user" },
  { name: "Usuario39", lastName: "Apellido39", email: "usuario39@example.com", password: "123456", role: "user" },
  { name: "Usuario40", lastName: "Apellido40", email: "usuario40@example.com", password: "123456", role: "admin" },
  { name: "Usuario41", lastName: "Apellido41", email: "usuario41@example.com", password: "123456", role: "user" },
  { name: "Usuario42", lastName: "Apellido42", email: "usuario42@example.com", password: "123456", role: "user" },
  { name: "Usuario43", lastName: "Apellido43", email: "usuario43@example.com", password: "123456", role: "user" },
  { name: "Usuario44", lastName: "Apellido44", email: "usuario44@example.com", password: "123456", role: "user" },
  { name: "Usuario45", lastName: "Apellido45", email: "usuario45@example.com", password: "123456", role: "admin" },
  { name: "Usuario46", lastName: "Apellido46", email: "usuario46@example.com", password: "123456", role: "user" },
  { name: "Usuario47", lastName: "Apellido47", email: "usuario47@example.com", password: "123456", role: "user" },
  { name: "Usuario48", lastName: "Apellido48", email: "usuario48@example.com", password: "123456", role: "user" },
  { name: "Usuario49", lastName: "Apellido49", email: "usuario49@example.com", password: "123456", role: "user" },
  { name: "Usuario50", lastName: "Apellido50", email: "usuario50@example.com", password: "123456", role: "admin" },
  { name: "Usuario51", lastName: "Apellido51", email: "usuario51@example.com", password: "123456", role: "user" },
  { name: "Usuario52", lastName: "Apellido52", email: "usuario52@example.com", password: "123456", role: "user" },
  { name: "Usuario53", lastName: "Apellido53", email: "usuario53@example.com", password: "123456", role: "user" },
  { name: "Usuario54", lastName: "Apellido54", email: "usuario54@example.com", password: "123456", role: "user" },
  { name: "Usuario55", lastName: "Apellido55", email: "usuario55@example.com", password: "123456", role: "admin" },
  { name: "Usuario56", lastName: "Apellido56", email: "usuario56@example.com", password: "123456", role: "user" },
  { name: "Usuario57", lastName: "Apellido57", email: "usuario57@example.com", password: "123456", role: "user" },
  { name: "Usuario58", lastName: "Apellido58", email: "usuario58@example.com", password: "123456", role: "user" },
  { name: "Usuario59", lastName: "Apellido59", email: "usuario59@example.com", password: "123456", role: "user" },
  { name: "Usuario60", lastName: "Apellido60", email: "usuario60@example.com", password: "123456", role: "admin" }
];


  try {
    const resultado = await userModel.insertMany(usuarios);
    console.log("Usuarios insertados:", resultado.length);
  } catch (err) {
    console.error("Error insertando usuarios:", err);
  }

}

const createNewUser=async (req,res)=>{
    try {
           const {name,lastName,email,password,role,isActive}=req.body;
           const result= await userModel.create({
            name,
            lastName,
            email,
            password:await bcrypt.hash(password,10),
            role,
            isActive
           });
           console.log(result)

           return res.status(200).json({data:result})
        
    } catch (error) {
        return res.status(400).send({status:"Failed",message:error.message});
        
    }
 

}

module.exports = { getAllUser, insertAllUser, createNewUser };
