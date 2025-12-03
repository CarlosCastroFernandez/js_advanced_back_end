const mongoose = require("mongoose");

const connectDataBase = async () => {
  try {
    await mongoose.connect(process.env.URL_MONGO);
    console.log("Conectado a la base de datos!");
  } catch (error) {
    console.log("Error al conectarse a la base de datos " + error.message);
  }
};

module.exports=connectDataBase;