                                                            //    -------- With Class Constructot -------
class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    }
    getInfo(){
        return (` 
                title: ${this.title}
                author: ${this.author}
                year: ${this.year}
                isAvailable: ${this.isAvailable}
                `)
    }
    borrowBook(){
        if(this.isAvailable){
            this.isAvailable = false;
            return;
        } 
        else return `book is already borrowed`;
    }
    returnBook(){
        if(!this.isAvailable){
            this.isAvailable = true;
            return;
        }
        else return `book is already available`
    }
    matchesAuthor(authorName){
        return (authorName.toLowerCase() === this.author.toLowerCase());
    }
    matchesTitle(word){
        let lowWord = word.toLowerCase();
        let lowTitle = this.title.toLowerCase();
        return lowTitle.includes(lowWord);
    }
}


class Library{
    constructor(){
        this.books = [];
    }
    addBook(book){
        if(book instanceof Book){
            this.books.push(book);
        }
    }
    removeBook(title){
        if(this.books.find((book) => book.title === title)){
            const idx = this.books.findIndex((book) => book.title === title);
            this.books.splice(idx,1);
        }else return `We dont have this book!`;  
    }
    findBookByTitle(title){
        const book = this.books.find((book) => book.title === title);
        if(!book) return null;
        return book;
    }
    findBooksByAuthor(authorName){
        const res = this.books.filter((book) => book.author === authorName);
        return res;
    }
    getAvailableBooks(){
        const res = this.books.filter((book) => book.isAvailable);
        return res;
    }
    borrowBook(title){
        const book = this.books.find((book) => book.title === title);
        if(!book) return `book can not find`;
        book.borrowBook();
    }
    returnBook(title){
        const book = this.books.find((book) => book.title === title);
        if(!book) return `book can not find`;
        book.returnBook();
    }
    showAllBooks(){
        if(!this.books.length) return;
        const res = [];
        for(let i = 0; i < this.books.length; ++i){
            res.push(this.books[i].getInfo());
        }
        return res;
    }
    countBooks(){
        return this.books.length;
    }
    countAvailableBooks(){
        return this.getAvailableBooks().length;
    }
    searchBooks(word){
        return this.books.filter((book) => book.title.includes(word));
    }
    getOldestBook(){
        if(!this.books.length) return null;

        let oldestY = this.books[0].year;
        for(let i = 1 ; i < this.books.length; ++i){
            let year = this.books[i].year;
            if(oldestY > year){
                oldestY = year;
            }
        }
        return this.books.find((book) => book.year === oldestY);
    }
}






const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);



                                                            //-----tests-----
console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
console.log(library.showAllBooks());








//                                                                //-------- With Function Constructot -------
// function Book (title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.isAvailable = true;
// }
// Book.prototype.getInfo = function(){
//     return (`
//             title: ${this.title}
//             author: ${this.author}
//             year: ${this.year}
//             isAvailable: ${this.isAvailable}
//             `)
// }
// Book.prototype.borrowBook = function(){
//     if(this.isAvailable){
//         this.isAvailable = false;
//         return;
//     } 
//     else return `book is already borrowed`;
// }
// Book.prototype.returnBook = function(){
//     if(!this.isAvailable){
//         this.isAvailable = true;
//         return;
//     } 
//     else return `book is already available`;
// }
// Book.prototype.matchesAuthor = function(authorName){
//     return (authorName.toLowerCase() === this.author.toLowerCase());

// }
// Book.prototype.matchesTitle = function(word){
//     let lowWord = word.toLowerCase();
//     let lowTitle = this.title.toLowerCase();
//     return lowTitle.includes(lowWord);
// }


// function Library(){
//     this.books = [];
// }
// Library.prototype.addBook = function(book){
//     if(book instanceof Book){
//         this.books.push(book);
//     }
// }
// Library.prototype.removeBook = function(title){
//     if(this.books.find((book) => book.title === title)){
//         const idx = this.books.findIndex((book) => book.title === title);
//         this.books.splice(idx,1);
//     }else return `We dont have this book!`;
// }
// Library.prototype.findBookByTitle = function(title){
//     const book = this.books.find((book) => book.title === title);
//     if(!book) return null;
//     return book;
// }
// Library.prototype.findBooksByAuthor = function(authorName){
//     const res = this.books.filter((book) => book.author === authorName);
//     return res;
// }
// Library.prototype.getAvailableBooks = function(){
//     const res = this.books.filter((book) => book.isAvailable);
//     return res;
// }
// Library.prototype.borrowBook = function(title){
//     const book = this.books.find((book) => book.title === title);
//     if(!book) return `book can not find`;
//     book.borrowBook();
// }
// Library.prototype.returnBook = function(title){
//     const book = this.books.find((book) => book.title === title);
//     if(!book) return `book can not find`;
//     book.returnBook();
// }
// Library.prototype.showAllBooks = function(){
//     if(!this.books.length) return;
//     const res = [];
//     for(let i = 0; i < this.books.length; ++i){
//         res.push(this.books[i].getInfo());
//     }
//     return res;
// }
// Library.prototype.countBooks = function(){
//     return this.books.length;
// }
// Library.prototype.countAvailableBooks = function(){
//     return this.getAvailableBooks().length;
// }
// Library.prototype.searchBooks = function(word){
//     return this.books.filter((book) => book.title.includes(word));
// }
// Library.prototype.getOldestBook = function(){
//     if(!this.books.length) return null;
    
//     let oldestY = this.books[0].year;
//     for(let i = 1 ; i < this.books.length; ++i){
//         let year = this.books[i].year;
//         if(oldestY > year){
//             oldestY = year;
//         }
//     }
//     return this.books.find((book) => book.year === oldestY);
// }




// const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
// const book2 = new Book("1984", "George Orwell", 1949);
// const book3 = new Book("Animal Farm", "George Orwell", 1945);
// const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

// const library = new Library();

// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);
// library.addBook(book4);



//                                                             //-----tests-----
// console.log("=== All books ===");
// console.log(library.showAllBooks());

// console.log("=== Count books ===");
// console.log(library.countBooks()); // 4

// console.log("=== Count available books ===");
// console.log(library.countAvailableBooks()); // 4

// console.log("=== Find by title ===");
// console.log(library.findBookByTitle("1984"));

// console.log("=== Find by author ===");
// console.log(library.findBooksByAuthor("George Orwell"));

// console.log("=== Search books ===");
// console.log(library.searchBooks("Harry"));

// console.log("=== Borrow book ===");
// library.borrowBook("1984");
// console.log(library.findBookByTitle("1984"));

// console.log("=== Borrow same book again ===");
// library.borrowBook("1984");

// console.log("=== Return book ===");
// library.returnBook("1984");
// console.log(library.findBookByTitle("1984"));

// console.log("=== Available books ===");
// console.log(library.getAvailableBooks());

// console.log("=== Oldest book ===");
// console.log(library.getOldestBook());

// console.log("=== Remove book ===");
// library.removeBook("The Hobbit");
// console.log(library.countBooks()); // 3

// console.log("=== Final books ===");
// console.log(library.showAllBooks());

