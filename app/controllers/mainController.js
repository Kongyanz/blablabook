export  const mainController ={
    renderHomePage(req,res){
        const books = [
            { img: "book1.jpg", title: "A LA RECHERCHE DE LA LUMIERE", genre: "Biographie", year: "2020" },
            { img: "book2.jpg", title: "BRISER LES CHAINES", genre: "Roman", year: "2024" },
            { img: "book3.jpg", title: "TRANSFERENCE", genre: "Thriller", year: "2020" },
            { img: "book4.jpg", title: "GHIBLI LES ARTISANS DU RÊVE", genre: "Animation", year: "2024" }
        ];
        res.render("home", {books});
    }
};


