const crypto=require("crypto");

const static="primera variable para el token";
let refres_static="segunda variable con mas seguridad para el token";

for (let i=0;i<2;i++){
    if (i===1) refres_static+="Aun mas seguridad todavia que antes";
    const hash=crypto.createHmac("sha256",static).update(refres_static).digest("hex");
    console.log(hash);
    
}