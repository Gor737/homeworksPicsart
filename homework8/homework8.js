class Book {
    #title;
    #author;
    #year;
    #isAvailable = true;

    constructor(title, author, year){
        this.#title = title;
        this.#author = author;
        this.year = year;
    }

    get title(){
        return this.#title;
    }
    set title(value){
        if(!value) return "Title can't be empty";
        else this.#title = value;
    }
    get author(){
        return this.#author;
    }
    set author(value){
        if(!value) return "Author can't be empty";
        else this.#author = value;
    }
    get year(){
        return this.#year;
    }
    set year(value){
        if(value < 0) return "Year can't be neggative";
        else this.#year = value;
    }
    get isAvailable(){
        return this.#isAvailable;
    }

    borrowBook(){
        if(this.#isAvailable) this.#isAvailable = false;
        else return "Book is already unavailable";
    }
    returnBook(){
        if(!this.#isAvailable) this.#isAvailable = true;
        else return "Book is already availabe";
    }
    matchesTitle(word){
        return this.#title.includes(word);
    }
    getInfo(){
        return (`
                title->${this.#title}
                author->${this.#author}
                year->${this.#year}
                isAvailable->${this.#isAvailable}
                `)
    }
}




class Reader{
    #name;
    #borrowedBooks = [];

    constructor(name){
        this.#name = name;
    }

    get name(){
        return this.#name;
    }
    set name(value){
        if(value) this.#name = value;
        else return "Name can't be empty"
    }
    get borrowedBooks(){
        return this.#borrowedBooks;
    }
    get borrowedBooksCount(){
        return this.#borrowedBooks.length;
    }

    takeBook(book){
        if(!book.isAvailable) return "Book was borrowed";
        this.#borrowedBooks.push(book);
        book.borrowBook();
    }
    giveBackBook(book){
        if(book.isAvailable) return "Book is available";
        //delete this.#borrowedBooks.book;
        this.#borrowedBooks = this.#borrowedBooks.filter((el) => el !== book);
        book.returnBook();
    }
    hasBook(book){
        return this.#borrowedBooks.includes(book);
    }
    showBorrowedBooks(){
        const res = [];
        this.#borrowedBooks.forEach((book) => res.push(book.title));
        return res;
    }
    getInfo(){
        return `${this.#name} has ${this.borrowedBooksCount} borrowed books`
    }
}



class Library{
    #name;
    #books = [];
    #readers = [];

    constructor(name){
        this.#name = name;
    }

    get name(){
        return this.#name;
    }
    set name(value){
        if(!value) return `name must not be an empty string`;
        else this.#name = value;
    }
    get books(){
        return this.#books;
    }
    get readers(){
        return this.#readers;
    }

    addBook(book){
        this.#books.push(book);
    }
    registerReader(reader){
        this.#readers.push(reader);
    }
    findBookByTitle(title){
        const book = this.#books.find(bk => bk.title === title);
        if(book) return book;
        else return null;
    }
    findBooksByAuthor(authorName){
        const res = this.#books.filter((book) => book.author = authorName);
        return res;
    }
    giveBookToReader(title, reader){
        const book = this.#books.find(bk => bk.title === title);
        if(!book) return `Book don't exists`;
        else reader.takeBook(book);
    }
    acceptBookFromReader(title, reader){
        const book = this.#books.find(bk => bk.title === title);
        if(!book) return `Book don't exists`;
        else reader.giveBackBook(book);
    }
    showAvailableBooks(){
        const res = this.#books.filter(book => book.isAvailable);
        return res;
    }
    showAllBooks(){
        const res = this.#books.map(book => book.getInfo());
        return res;
    }
    getLibraryInfo(){
        return `${this.#name}: ${this.#books.length} books, ${this.#readers.length} readers`;
    }
}



const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);

                                                            //-----tests-----
console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
library.giveBookToReader("The Hobbit", reader2);

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());