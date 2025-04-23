import { AppUser} from "../models/association.js";
export const appuserController = {
    async getUserById(req, res) {
    
        const userId = req.params.id; // Extract the user ID from the route parameter
        const user = await AppUser.findByPk(userId); // Fetch the user from the database using the primary key
  
        if (!user) {
          return res.redirect("/user-informations"); // Handle case where user doesn't exist
        }
  
        res.render("user-informations", { user }); // Pass the user data to the EJS view
   
  },
    
  async remove(req, res) {
    try {
      const idToDelete = req.params.id; // Extract the user ID from the route parameter
      const user = await AppUser.findByPk(idToDelete); // Fetch the user from the database

      if (!user) {
        // Redirect to an error page if the user is not found
        return res.redirect("/error");
      }

      // Delete the user
      await user.destroy();

      // Redirect to a success page or another route
      res.redirect("/succes");
    } catch (error) {
      console.error("Error deleting user:", error);
      // Redirect to a generic error page in case of an unexpected error
      res.redirect("/error");
    }
  },
};