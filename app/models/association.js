import Gender from './Gender.js';
import AppUser from './AppUser.js';
import Author from './Author.js';
import Book from './Book.js';
import AppUserBook from './AppUserBook.js';

Author.belongsToMany(Book, {
    through: 'author_book',
    as: 'books',
    foreignKey: 'author_id',
    otherKey: 'book_id',
});

Book.belongsToMany(Author, {
    through: 'author_book',
    as: 'authors',
    foreignKey: 'book_id',
    otherKey: 'author_id',
});

AppUser.hasMany(AppUserBook, {
    as: 'appUserBooks',
    foreignKey: {
        name: 'app_user_id',
        allowNull: false,
    },
});

AppUserBook.belongsTo(AppUser, {
    as: 'app_user',
    foreignKey: {
        name: 'app_user_id',
        allowNull: false,
    },
});

Book.hasMany(AppUserBook, {
    as: 'appUserBooks',
    foreignKey: {
        name: 'book_id',
        allowNull: false,
    },
});

AppUserBook.belongsTo(Book, {
    as: 'book',
    foreignKey: {
        name: 'book_id',
        allowNull: false,
    },
});

 

Book.belongsTo(Gender, {
    as: 'gender',
    foreignKey: {
        name: 'gender_id',
        allowNull: false,
    },
});

Gender.hasMany(Book, {
    as: 'books',
    foreignKey: {
        name:'gender_id',
        allowNull: false
    }
});

export { Gender, AppUser, Author, Book, AppUserBook };