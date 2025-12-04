const express=require("express");
const { getAllUser,insertAllUser, createNewUser, login, editUser } = require("../controller/userController");
const {verifyToken,verifyAdmin} = require("../middleware/middleware");

const router=express.Router();

router.get("/",verifyToken,verifyAdmin, getAllUser);
router.post("/insert",insertAllUser);
router.post("/newUser", verifyToken,verifyAdmin,createNewUser);
router.post("/login",login);
router.put("/edit",verifyToken,verifyAdmin,editUser);

module.exports=router;