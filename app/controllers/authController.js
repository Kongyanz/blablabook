//import sequelize from "../../models/sequelize";
import emailValidator from "email-validator";
import PasswordValidator from "password-validator";
import bcrypt from "bcrypt";
import  { AppUser } from "../models/association.js"; 


const displaySignUpForm = async (req, res, next ) => {
   try {
    res.render("auth/signup")
   } catch (error) {
    next(error)
   };
}

const displayLoginForm = async (req, res, next ) => {
    try {
     res.render("auth/login")
    } catch (error) {
     next(error)
    };
}

 const handleSignUp = async (req, res, ) => {
    try {
        const { firstname, lastname, email, password, confirmation } = req.body;
        const schema = new PasswordValidator();

        schema
            .is().min(8, "Votre mot de passe doit avoir minimum 8 caractères")
            .has().uppercase(1, "Votre mot de passe doit avoir minimum 1 majuscule")
            .has().symbols(1, "Votre mot de passe doit avoir minimum 1 caractère spécial")
            .has().digits(1, "Votre mot de passe doit avoir minimum 1 chiffre");

        const errors = {};
        
        if (!firstname) errors.firstname = "Le champ prénom doit être rempli";
        if (!lastname) errors.lastname = "Le champ nom doit être rempli";
        if (!email || !emailValidator.validate(email)) errors.email = "Mettez un email valide"; 

        // 🔹 Vérification du mot de passe
        if (!password  || !schema.validate(password))
            errors.password = "Mot de passe non conforme ! (8 caractères, 1 majuscule, 1 chiffre, 1 symbole)";
 
        
        if (password !== confirmation) 
            errors.confirmation = "Les deux mots de passe doivent être identiques";
       
        
         //Vérification de l'existence de l'utilisateur
        if (!errors.email) {
            const existingUser = await AppUser.findOne({ where: { email } });
            if (existingUser) errors.email = "Email existant";
        }
           
        // ✅ Gestion des erreurs et affichage du formulaire
        if (Object.keys(errors).length > 0) {
            return res.status(422).render("auth/signup", { errors, data: req.body });
        }

        // ✅ Hachage du mot de passe et enregistrement en base
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await AppUser.create({ firstname, name: lastname, email, password: hashedPassword });

        // ✅ Vérification de `req.session`
        if (!req.session) req.session = {}; 
        req.session.userId = user.id;
           
        res.redirect("/inscription-reussie");
    } catch (error) {
        res.status(500).render("auth/signup", { errors: { general: "Erreur interne" }, data: req.body });
    }
};

// ✅ Gérer la connexion
 const handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AppUser.findOne({ where: { email } });

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).render("auth/login", { errors: { general: "Email ou mot de passe incorrect" } });
        }
        req.session.userId = user.id;
        res.redirect("/");
    } catch (error) {
        console.error("Erreur de connexion :", error);
        res.status(500).render('errors/500', { error: "Erreur interne" });
    }
};

// ✅ Gérer la déconnexion
  const logout = async (req, res) => {
    try {
        req.session.destroy();
        res.clearCookie("connect.sid");
        res.redirect("/");
    } catch (error) {
        console.error("Erreur de déconnexion :", error);
        res.status(500).redirect("/");
    }
};

const authController = {
    displaySignUpForm,
    displayLoginForm,
    handleSignUp,
    handleLogin,
    logout
};

export default authController;
