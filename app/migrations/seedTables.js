import { AppUser, Author, Gender, Book, AppUserBook}  from '../models/association.js';
import sequelize from '../models/sequelize.js';

await AppUser.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
});
await Author.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
});
await Gender.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
});
await Book.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
});
await AppUserBook.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
});

//Fake data creation
const userData = await AppUser.bulkCreate([
    { name: "Jean", firstname: "Dupont", email:"dupont@at.com", password:"azerty"},
    { name: "Marie", firstname: "Durand", email: "durand@at.com", password:"azerty"} 
]);

const authorData = await Author.bulkCreate([
        { name: "J.K.", firstname: "Rowling"},
        { name: "George", firstname: "Orwell"},
        { name: "Agatha", firstname: "Christie"},
        { name: "Dan", firstname: "Brown"},
        { name: "Neil", firstname: "Gaiman"},
        { name: "Terry", firstname: "Pratchett"},
        { name: "Michelle", firstname: "Obama"},
        { name: "Barack", firstname: "Obama"},
        { name: "J.R.R.", firstname: "Tolkien"},
        { name: "Suzanne", firstname: "Collins"},
        { name: "Stephen", firstname: "King"},
        { name: "Gillian", firstname: "Flynn"},
        { name: "Colleen", firstname: "Hoover"},
        { name: "Veronica", firstname: "Roth"},
        { name: "Andy", firstname: "Weir"},
        { name: "Brandon", firstname: "Sanderson"},
        { name: "Cassandra", firstname: "Clare"}
    ]);

const genderData = await Gender.bulkCreate([
        { name: "Fantasy"},
        { name: "Science Fiction"},
        { name: "Mystery"},
        { name: "Historical Fiction"},
        { name: "Biography"},
        { name: "Thriller"},
        { name: "Romance"}
    ]);

const bookData = await Book.bulkCreate([
        { isbn: 9780747532743, cover: 'harryPotter.webp', title: "Harry Potter and the Philosopher's Stone", year: 1997, description: 'A young wizard begins his journey.', gender_id: 1 },
        { isbn: 9780451524935, cover: '1984.webp', title: '1984', year: 1949, description: 'Dystopian future under surveillance.', gender_id: 2 },
        { isbn: 9780062073488, cover: 'andThenThereWereNone.webp', title: 'And Then There Were None', year: 1939, description: 'Ten strangers on an island with a killer.', gender_id: 3 },
        { isbn: 9780385504201, cover: 'davinciCode.webp', title: 'The Da Vinci Code', year: 2003, description: 'Secrets hidden in art history.', gender_id: 3 },
        { isbn: 9780060853983, cover: 'goodOmens.webp', title: 'Good Omens', year: 1990, description: 'The world is ending, chaos ensues.', gender_id: 1 },
        { isbn: 9781524763138, cover: 'becoming.webp', title: 'Becoming', year: 2018, description: 'Memoir of Michelle Obama.' , gender_id: 5 },
        { isbn: 9781524763169, cover: 'aPromisedLand.webp', title: 'A Promised Land', year: 2020, description: 'Memoir by Barack Obama.' , gender_id: 5 },
        { isbn: 9780544003415, cover: 'hobbit.webp', title: 'The Hobbit', year: 1937, description: "A hobbit's adventure begins." , gender_id: 1 },
        { isbn: 9780439023481, cover: 'hungerGames.webp', title: 'The Hunger Games', year: 2008, description: 'Children forced to fight in a dystopia.' , gender_id: 2 },
        { isbn: 9780307743657, cover: 'shining.webp', title: 'The Shining', year: 1977, description: 'Haunted hotel thriller.' , gender_id: 6 },
        { isbn: 9780307588371, cover: 'goneGirl.webp', title: 'Gone Girl', year: 2012, description: 'Twisted psychological thriller.' , gender_id: 6 },
        { isbn: 9781982137274, cover: 'itEndsWithUs.webp', title: 'It Ends With Us', year: 2016, description: 'Emotional contemporary romance.' , gender_id: 7 },
        { isbn: 9780062024039, cover: 'divergent.webp', title: 'Divergent', year: 2011, description: 'Dystopian world divided by factions.' , gender_id: 2 },
        { isbn: 9780553448151, cover: 'martian.webp', title: 'The Martian', year: 2014, description: 'Astronaut stranded on Mars.' , gender_id: 2 },
        { isbn: 9780765376671, cover: 'rithmatist.webp', title: 'The Rithmatist', year: 2013, description: 'Magic and chalk drawings come alive.' , gender_id: 1 },
        { isbn: 9780618640157, cover: 'lord.webp', title: 'The Lord of the Rings', year: 1954, description: 'Epic quest to destroy a powerful ring.' , gender_id: 1 },
    ]);

await Book.findByPk(1).then((book) => book.addAuthors([1]));
await Book.findByPk(2).then((book) => book.addAuthors([2]));
await Book.findByPk(3).then((book) => book.addAuthors([3]));
await Book.findByPk(4).then((book) => book.addAuthors([4]));
await Book.findByPk(5).then((book) => book.addAuthors([5, 6]));
await Book.findByPk(6).then((book) => book.addAuthors([7]));
await Book.findByPk(7).then((book) => book.addAuthors([8]));
await Book.findByPk(8).then((book) => book.addAuthors([9]));
await Book.findByPk(9).then((book) => book.addAuthors([10]));
await Book.findByPk(10).then((book) => book.addAuthors([11]));
await Book.findByPk(11).then((book) => book.addAuthors([12]));
await Book.findByPk(12).then((book) => book.addAuthors([13]));
await Book.findByPk(13).then((book) => book.addAuthors([14]));
await Book.findByPk(14).then((book) => book.addAuthors([15]));
await Book.findByPk(15).then((book) => book.addAuthors([16]));
await Book.findByPk(16).then((book) => book.addAuthors([9]));

//
const appUserBooks = await AppUserBook.bulkCreate([
    { app_user_id: 1, book_id: 1, status: 'reading' },
    { app_user_id: 1, book_id: 2, status: 'read' },
    { app_user_id: 2, book_id: 5, status: 'to-read' },
    { app_user_id: 2, book_id: 8, status: 'read' },
]);

await sequelize.close();
