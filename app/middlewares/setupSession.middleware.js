import session from "express-session";
import { AppUser } from "../models/association.js";

export const setupSession = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: true,
        sameSite: "strict", 
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 1 jour
    },
});

export const initUserLocals = async (req, res, next) => { 
    const userId = req.session.userId;
    if(userId){
        const user = await AppUser.findByPk(userId, { attributes: {exclude: "password"}});
        res.locals.user = user;
        req.session.user = user;
    }
    next();
};







        // dans toutes mes vues j'ai les infos de l'user connecté