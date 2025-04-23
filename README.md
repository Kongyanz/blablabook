# projet-blablabook-2

## How to do a good EADME

import AppUser from "../models/AppUser.js";
import bcrypt from "bcrypt";
// import express-session from "express-session";

export const displayLoginForm = (req, res) => {
    res.render("login");
};

export const userConnexion = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body)
        const emailUser = await AppUser.findOne({ where: { email } });
        if (!emailUser) {
            return res.status(401).render("login", { error});
        }
        const isPasswordValid = await bcrypt.compare(password, emailUser.password);
        if (!isPasswordValid) {
            return res.status(401).render("login", { error: "Données invalides !" });
        }
        req.session.userId = emailUser.id
        res.redirect("/home");
    } catch (error) {
        res.status(500).render("login",{error: "Unexpected server error. Please try again later." });
    }
};