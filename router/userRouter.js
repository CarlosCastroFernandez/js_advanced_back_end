const express=require("express");
const { getAllUser,insertAllUser, createNewUser } = require("../controller/userController");

const router=express.Router();

router.get("/",getAllUser);
router.post("/insert",insertAllUser);
router.post("/newUser",createNewUser);

module.exports=router;