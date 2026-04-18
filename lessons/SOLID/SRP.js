//---------Single Responsibility Principle (SRP)---------
//----Online Book Store----

class Book {
  constructor(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
  }
}

class Customer {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

class Order {
  constructor(id, customer, books, totalPrice) {
    this.id = id;
    this.customer = customer;
    this.books = books;
    this.totalPrice = totalPrice;
    this.status = "pending";
  }
}

class Invoice {
  constructor(order) {
    this.id = order.id;
    this.name = order.customer.name;
    this.books = order.books;
    this.totalPrice = order.totalPrice;
    this.status = order.status;
  }
}

class BookInventory {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    if (book instanceof Book) {
      if (!this.books.find((el) => el.id === book.id)) this.books.push(book);
    } else console.log(`book can not adding`);
  }
  deleteBook(book) {
    if (book instanceof Book) {
      if (this.books.find((el) => el.id === book.id)) {
        this.books = this.books.filter((el) => el.id !== book.id);
      }
    } else console.log(`book can not deleting`);
  }
  changePrice(id, newPrice) {
    const book = this.books.find((el) => el.id === id);
    if (!book) console.log(`book can not find for change price`);
    else {
      book.price = newPrice;
    }
  }
  findBook(id) {
    const book = this.books.find((el) => el.id === id);
    if (book) return book;
    else console.log(`book can not find`);
  }
}

class CustomerManager {
  constructor() {
    this.customers = [];
  }
  register(customer) {
    if (customer instanceof Customer) {
      if (!this.customers.find((el) => el.id === customer.id))
        this.customers.push(customer);
    } else console.log(`customer can not register`);
  }
  findCustomer(id) {
    const customer = this.customers.find((el) => el.id === id);
    if (customer) return customer;
    else console.log(`Customer can not find`);
  }
}

class OrderManager {
  constructor() {
    this.orders = [];
  }
  createOrder(id, customer, books) {
    if (customer instanceof Customer && books.length) {
      if (books.every((el) => el instanceof Book)) {
        const totalPrice = this.totalPrice(books);
        const order = new Order(id, customer, books, totalPrice); //composition
        this.orders.push(order);
        return order;
      }
    } else console.log(`order can not create`);
  }
  totalPrice(books) {
    let price = 0;
    books.forEach((el) => (price += el.price));
    return price;
  }
  findOrder(id) {
    const order = this.orders.find((el) => el.id === id);
    if (order) return order;
    else console.log(`Order can not find`);
  }
}

class PaymentProcessor {
  constructor() {
    this.history = [];
  }
  pay(order) {
    if (order.status !== "paid") order.status = "paid";
    else console.log(`order is already paid`);
  }
  addHistory(order) {
    this.history.push(order);
  }
}

class InvoiceGenerator {
  constructor() {
    this.invoices = [];
  }
  createInvoice(order) {
    const invoice = new Invoice(order);
    this.invoices.push(invoice);
    return invoice;
  }
  printInvoice(invoice) {
    console.log(invoice);
  }
}

class NotificationService {
  sendEmail(message) {
    console.log(message);
  }
}

class SalesReport {
  showTotalSales(orders) {
    let res = 0;
    orders.forEach((el) => {
      if (el.status === "paid") res += el.totalPrice;
    });
    return res;
  }

  showSalesCount(orders) {
    let count = 0;
    orders.forEach((el) => {
      if (el.status === "paid") ++count;
    });
    return count;
  }
}

//-----Tests----
const inventory = new BookInventory();
const customerManager = new CustomerManager();
const orderManager = new OrderManager();
const paymentProcessor = new PaymentProcessor();
const invoiceGenerator = new InvoiceGenerator();
const notificationService = new NotificationService();
const salesReport = new SalesReport();

const book1 = new Book(1, "Clean Code", 30);
const book2 = new Book(2, "JavaScript Guide", 25);
const book3 = new Book(3, "Design Patterns", 40);

inventory.addBook(book1);
inventory.addBook(book2);
inventory.addBook(book3);

const customer1 = new Customer(1, "John", 25);
customerManager.register(customer1);

const order1 = orderManager.createOrder(1, customer1, [book1, book2]);

paymentProcessor.pay(order1);
paymentProcessor.addHistory(order1);

const invoice1 = invoiceGenerator.createInvoice(order1);
invoiceGenerator.printInvoice(invoice1);

notificationService.sendEmail(
  `Invoice for order ${invoice1.id} sent to ${invoice1.name}`,
);

console.log("Total Sales:", salesReport.showTotalSales(orderManager.orders));
console.log("Sales Count:", salesReport.showSalesCount(orderManager.orders));
