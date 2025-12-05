const jwt=require("jsonwebtoken");
const verifyToken = (req, res, next) => {

    const authToken = req.header("auth-token")

    if (!authToken) res.status(403).send("Acceso denegado");
    try {
        const payload = jwt.verify(authToken, process.env.SECRET_TOKEN);
        console.log(payload);
        req.payload = payload;
        next();
    } catch (e) {
        try {
            console.log("SEGUNDO REFRESH");
            const payload = jwt.verify(authToken, process.env.SECRET_REFRESH_TOKEN);

            req.payload = payload;
            next();
        } catch (error) {
            res.status(403).send("Token expire");
        }

    }

}

const verifyAdmin=(req,res,next)=>{

    const {role}=req.payload
    try{
        if (role==="admin"){
        next();
    }else{
        return res.status(200).send({status:"Failed",isAdmin:false})
    }

    }catch(error){
        return res.status(400).send({status:"Failed",message:error.message})
    }
    
}

module.exports={verifyToken,verifyAdmin};