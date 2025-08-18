import session from "express-session";
import { AppUser } from "../models/association.js";

export const setupSession = session({
    //  paramétré notre session
    secret: 'totototototo',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, 
        httpOnly: false ,
        maxAge: 1000 * 60 * 60 * 24 // 1 jour
    },
});

export const initUserLocals = async (req, res, next) => {
    // je recupere l'id du user dans la session 
    console.log("session", req.session);
    const userId = req.session.userId;

    if(userId){
        const user = await AppUser.findByPk(userId, { attributes: {exclude: "password"}});
        // dans toutes mes vues j'ai les infos de l'user connecté
        res.locals.user = user;
        // dans tous mes controllers/middlewares j'ai les infos utiles de l'user comme son role / son nom
        req.session.user = user;
    }
    next();
};