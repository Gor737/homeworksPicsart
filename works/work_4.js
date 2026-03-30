                                                //--------- Library-Book with Factory method ----------
function Book(title, author, year){
    isAvailable = true;
    return {
        getInfo(){
            return (`
                    title: ${title}
                    author: ${author}
                    year: ${year}
                    isAvailable: ${isAvailable}`)
        },
        borrowBook(){
            if(isAvailable) isAvailable = false;
            else return `book is not available`;
        },
        returnBook(){
            if(!isAvailable) isAvailable = true;
            else return `book is already available`;
        },
        matchesAuthor(authorName){
            return (authorName.toLowerCase() === author.toLowerCase());
        },
        matchesTitle(word){
            return title.includes(word);
        },
        getTitle(){
            return title;
        },
        getAuthor(){
            return author;
        },
        getYear(){
            return year;
        },
        getAvailableState(){
            return isAvailable;
        }
    }
}



function Library(){
    books = [];
    return{
        addBook(book){
            books.push(book);
        },
        removeBook(title){
            if(books.find((book) => book.getTitle() === title)){
                const idx = books.findIndex((book) => book.getTitle() === title);
                books.splice(idx,1);
            }else return `We dont have this book!`;  
        },
        findBookByTitle(title){
            const book = books.find((book) => book.getTitle() === title);
            if(!book) return null;
            return book;
        },
        findBooksByAuthor(authorName){
            const res = books.filter((book) => book.getAuthor() === authorName);
            if(!res.length) return `cannot find books of ${authorName}`;
            return res;
        },
        getAvailableBooks(){
            const res = books.filter((book) => book.getAvailableState());
            if(!res.length) return `all books is borrowed`;
            return res;
        },
        borrowBook(title){
            const book = books.find((book) => book.title === title);
            if(!book) return `book cannot find`;
            book.borrowBook();
        },
        returnBook(title){
            const book = books.find((book) => book.getTitle() === title);
            if(!book) return `book cannot find`;
            book.returnBook();
        },
        showAllBooks(){
            let res = ``;
            for(let i = 0; i < books.length; ++i){
                res += `book1: ${books[i].getInfo()}`;
            }
            if(!res) return `empty`
            return res;
        },
        countBooks(){
            return books.length;
        },
        countAvailableBooks(){
            return this.getAvailableBooks().length;
        },
        searchBooks(word){
            const res = books.filter((book) => book.getTitle().includes(word));
        },
        getOldestBook(){
            if(!books.length) return null;
            let oldestY = books[0].getYear();
            for(let i = 1 ; i < books.length; ++i){
                let year = books[i].getYear();
                if(oldestY > year){
                    oldestY = year;
                }
            }
            return books.find((book) => book.getYear() === oldestY);
        }
    }
}


const book1 = Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = Book("1984", "George Orwell", 1949);
const book3 = Book("Animal Farm", "George Orwell", 1945);
const book4 = Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);


                                                            //-----tests-----
console.log("=== All books ===");
library.showAllBooks();

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
library.showAllBooks();