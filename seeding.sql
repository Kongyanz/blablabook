-- SQLBook: Code
BEGIN;
-- Cleaning the database
TRUNCATE TABLE "write", "book", "author", "gender", "get", "belongs", "actor" CASCADE;

-- GENDERS
INSERT INTO "gender" ("id", "name") 
VALUES
(1, 'Fantasy'),
(2, 'Science Fiction'),
(3, 'Mystery'),
(4, 'Historical Fiction'),
(5, 'Biography'),
(6, 'Thriller'),
(7, 'Romance');

-- AUTHORS
INSERT INTO "author" ("id", "name", "surname") 
VALUES
(1, 'J.K.', 'Rowling'),
(2, 'George', 'Orwell'),
(3, 'Agatha', 'Christie'),
(4, 'Dan', 'Brown'),
(5, 'Neil', 'Gaiman'),
(6, 'Terry', 'Pratchett'),
(7, 'Michelle', 'Obama'),   
(8, 'Barack', 'Obama'),
(9, 'J.R.R.', 'Tolkien'),
(10, 'Suzanne', 'Collins'),
(11, 'Stephen', 'King'),
(12, 'Gillian', 'Flynn'),
(13, 'Colleen', 'Hoover'),
(14, 'Veronica', 'Roth'),
(15, 'Andy', 'Weir'),
(16, 'Brandon', 'Sanderson'),
(17, 'Cassandra', 'Clare');

-- USERS
INSERT INTO "actor" ("id", "name", "surname", "email", "password") 
VALUES
(1, 'Emma', 'Stone', 'emma@example.com', 'emm@123'),
(2, 'Liam', 'Miller', 'liam@example.com', 'li@m456');

-- BOOKS
INSERT INTO "book" ("id", "cover", "title", "year", "description") 
VALUES
('9780747532743', '/public/images/harryPotter.webp', 'Harry Potter and the Philosopher''s Stone', 1997, 'A young wizard begins his journey.'),
('9780451524935', '/public/images/1984.webp', '1984', 1949, 'Dystopian future under surveillance.'),
('9780062073488', '/public/images/andThenThereWereNone.webp', 'And Then There Were None', 1939, 'Ten strangers on an island with a killer.'),
('9780385504201', '/public/images/davinciCode.webp', 'The Da Vinci Code', 2003, 'Secrets hidden in art history.'),
('9780060853983', '/public/images/goodOmens.webp', 'Good Omens', 1990, 'The world is ending, chaos ensues.'),
('9781524763138', '/public/images/becoming.webp', 'Becoming', 2018, 'Memoir of Michelle Obama.'),
('9781524763169', '/public/images/aPromisedLand.webp', 'A Promised Land', 2020, 'Memoir by Barack Obama.'),
('9780544003415', '/public/images/hobbit.webp', 'The Hobbit', 1937, 'A hobbit''s adventure begins.'),
('9780439023481', '/public/images/hungerGames.webp', 'The Hunger Games', 2008, 'Children forced to fight in a dystopia.'),
('9780307743657', '/public/images/shining.webp', 'The Shining', 1977, 'Haunted hotel thriller.'),
('9780307588371', '/public/images/goneGirl.webp', 'Gone Girl', 2012, 'Twisted psychological thriller.'),
('9781982137274', '/public/images/itEndsWithUs.webp', 'It Ends With Us', 2016, 'Emotional contemporary romance.'),
('9780062024039', '/public/images/divergent.webp', 'Divergent', 2011, 'Dystopian world divided by factions.'),
('9780553448151', '/public/images/martian.webp', 'The Martian', 2014, 'Astronaut stranded on Mars.'),
('9780765376671', '/public/images/rithmatist.webp', 'The Rithmatist', 2013, 'Magic and chalk drawings come alive.'),
('9780618640157', '/public/images/lord.webp', 'The Lord of the Rings', 1954, 'Epic quest to destroy a powerful ring.');

-- BELONGS
INSERT INTO "belongs" ("isbn_id", "gender_id")
VALUES
('9780747532743', 1),
('9780451524935', 2),
('9780062073488', 3),
('9780385504201', 3),
('9780060853983', 1),
('9781524763138', 5),
('9781524763169', 5),
('9780544003415', 1),
('9780439023481', 2),
('9780307743657', 6),
('9780307588371', 6),
('9781982137274', 7),
('9780062024039', 2),
('9780553448151', 2),
('9780765376671', 1),
('9780618640157', 1);

-- WRITE
INSERT INTO "write" ("author_id", "isbn_id")
VALUES
(1, '9780747532743'),
(2, '9780451524935'),
(3, '9780062073488'),
(4, '9780385504201'),
(7, '9781524763138'),
(8, '9781524763169'),
(9, '9780544003415'),
(10, '9780439023481'),
(11, '9780307743657'),
(13, '9781982137274'),
(14, '9780062024039'),
(15, '9780553448151'),
(9, '9780618640157'),
(5, '9780060853983'), (6, '9780060853983'),
(7, '9781524763169'), (8, '9781524763169'),
(1, '9780439023481'), (10, '9780439023481'),
(3, '9780307588371'), (12, '9780307588371'),
(16, '9780765376671'), (17, '9780765376671');

-- GET
INSERT INTO "get"("actor_id", "isbn_id") 
VALUES
(1, '9780747532743'),
(1, '9780439023481'),
(2, '9780553448151');

COMMIT