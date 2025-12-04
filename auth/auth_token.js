const jsonwebtoken = require("jsonwebtoken");


const generateToken = (payload, isRefreshToken) => {

        if (isRefreshToken) {
            return jsonwebtoken.sign(payload, process.env.SECRET_REFRESH_TOKEN, {
                expiresIn: "1d"
            });
        }

        return jsonwebtoken.sign(payload, process.env.SECRET_TOKEN, {
            expiresIn: "60min"
        });


   
}

module.exports=generateToken;