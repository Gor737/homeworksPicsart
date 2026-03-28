function Library(name){
    this.books = [];
    this.name = name;
}

Library.prototype.addBook = function(book){
    if(!book.id || !book.title || !book.author || typeof book.year !== 'number'){
        throw new Error("Its not a book!");  
    }

    let id = book.id;
    let books = this.books;

    let unique = books.some((el) => el.id === id);
    if(unique){
        throw new Error('Id must be unique');
    }

    this.books.push(book);
    
}

Library.prototype.removeBook = function(id){
    this.books = this.books.filter((book) => book.id !== id);
}

Library.prototype.findBookByTitle = function(title){
    const book = this.books.find((book) => book.title === title);
    if(!book) throw new Error("Dont have book!");
    return book;
}

Library.prototype.findBookByAuthor = function(author){
    const books = [];
    this.books.forEach((book) => {
        if(book.author === author){
            books.push(book);
        }
    })
    if(!books.length) throw new Error(`Book with ${author} is empty`);
    else return books;
}

Library.prototype.borrowBook = function(id){
    
    let book = this.books.find((book) => book.id === id);

    if(!book) throw new Error("Dont have book");
    else if(!book.isAvailable) throw new Error("Book was borrowed");
    else book.isAvailable = false;

}

Library.prototype.returnBook = function(id){
    let book = this.books.find((book) => book.id === id);

    if(!book) throw new Error("Don't have book");
    else if(book.isAvailable){
        throw new Error("Book is available");
    }else{
        book.isAvailable = true;
    }
    
}

Library.prototype.listAvailableBooks = function(){
    const availableBooks = [];
    this.books.forEach((book) =>{
        if(book.isAvailable){
            availableBooks.push(book);
        }
    })
    if(!availableBooks.length) throw new Error("All books is not available");
    else return availableBooks;
}

Library.prototype.listBorrowedBooks = function(){
    const borrowedBooks = [];
    this.books.forEach((book) =>{
        if(!book.isAvailable){
            borrowedBooks.push(book);
        }
    })
    if(!borrowedBooks.length) throw new Error("All books is not borrowd");
    else return borrowedBooks;
}

Library.prototype.showLibraryInfo = function(){
    const name = this.name;
    const total = this.books.length;
    let avBooks = 0;
    let borrBooks = 0;

    this.books.forEach((book) => {
        if(book.isAvailable) ++avBooks;
        else ++borrBooks;
    });

    return (`
            name: ${name}
            total: ${total}
            available books: ${avBooks}
            borrowed books: ${borrBooks}
            `)
}



function Book(id, title, author, year, isAvailable = true){
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = isAvailable;
}


const book1 = new Book(11, 'Samvel', 'Raffi', 1956);
const book2 = new Book(22,'Xachagoxi hishatakarany', 'Raffi', 1947);
//console.log(book1);


let obj = new Library("NPUA");
obj.addBook(book1);
obj.addBook(book2);
obj.borrowBook(22);
//obj.borrowBook(22);
obj.returnBook(22);
//obj.returnBook(22);

//console.log(obj.findBookByTitle('Samvel'));
//console.log(obj.findBookByAuthor('Raffi'));
// console.log(obj.listAvailableBooks());
// console.log(obj.listBorrowedBooks());

console.log(obj.showLibraryInfo());

obj.removeBook(47);
obj.removeBook(22)
console.log(obj);






                                                            //---------With Classes---------



// class Library{
//     constructor(name){
//         this.books = [];
//         this.name = name;
//     }

//     addBook(book){
//         if(!book.id || !book.title || !book.author || typeof book.year !== 'number'){
//             throw new Error("Its not a book!");  
//         }

//         let id = book.id;
//         let books = this.books;

//         let unique = books.some((el) => el.id === id);
//         if(unique){
//             throw new Error('Id must be unique');
//         }

//         this.books.push(book);
    
//     }
//     removeBook(id){
//         this.books = this.books.filter((book) => book.id !== id);
//     }
//     findBookByTitle(title){
//         const book = this.books.find((book) => book.title === title);
//         if(!book) throw new Error("Dont have book!");
//         return book;    
//     }
//     findBookByAuthor(author){
//         const books = [];
//         this.books.forEach((book) => {
//             if(book.author === author){
//                 books.push(book);
//             }
//         })
//         if(!books.length) throw new Error(`Book with ${author} is empty`);
//         else return books;
//     }
//     borrowBook(id){   
//         let book = this.books.find((book) => book.id === id);

//         if(!book) throw new Error("Dont have book");
//         else if(!book.isAvailable) throw new Error("Book was borrowed");
//         else book.isAvailable = false;
//     }
//     returnBook(id){
//         let book = this.books.find((book) => book.id === id);

//         if(!book) throw new Error("Don't have book");
//         else if(book.isAvailable){
//             throw new Error("Book is available");
//         }else{
//             book.isAvailable = true;
//         }
//     }
//     listAvailableBooks(){
//         const availableBooks = [];
//         this.books.forEach((book) =>{
//             if(book.isAvailable){
//                 availableBooks.push(book);
//             }
//         })
//         if(!availableBooks.length) throw new Error("All books is not available");
//         else return availableBooks;
//     }
//     listBorrowedBooks(){
//         const borrowedBooks = [];
//         this.books.forEach((book) =>{
//             if(!book.isAvailable){
//                 borrowedBooks.push(book);
//             }
//         })
//         if(!borrowedBooks.length) throw new Error("All books is not borrowd");
//         else return borrowedBooks;
//     }
//     showLibraryInfo(){
//         const name = this.name;
//         const total = this.books.length;
//         let avBooks = 0;
//         let borrBooks = 0;

//         this.books.forEach((book) => {
//             if(book.isAvailable) ++avBooks;
//             else ++borrBooks;
//         });

//         return (`
//                 name: ${name}
//                 total: ${total}
//                 available books: ${avBooks}
//                 borrowed books: ${borrBooks}
//                 `)
//     }
// }