import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const userAuth = async (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        next('Auth failed');
    }
    const token = authHeader.split(" ")[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET||'aghhsghcagvhGjaHGHcfyF@$&*$&*');
        req.user = payload;
        next();
    } catch (error) {
        next(error)
    } 
};

export default userAuth;