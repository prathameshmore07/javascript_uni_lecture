const prompt = require("prompt-sync")({ sigint: true });

class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isIssued = false;
        this.issuedTo = null; // Will store user details
    }

    issueBook(user) {
        if (this.isIssued) {
            console.log(" Book already issued to someone else.");
            return;
        }
        this.isIssued = true;
        this.issuedTo = user;
        console.log(` Book "${this.title}" issued to ${user.name} for ${user.days} days.`);
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(" This book was not issued.");
            return;
        }
        console.log(` Book "${this.title}" returned by ${this.issuedTo.name}.`);
        this.isIssued = false;
        this.issuedTo = null;
    }

    displayBook() {
        console.log(
            `ID: ${this.id} | Title: ${this.title} | Author: ${this.author} | Status: ${this.isIssued
                ? `Issued to ${this.issuedTo.name} (${this.issuedTo.phone}) for ${this.issuedTo.days} days`
                : "Available"
            }`
        );
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook() {
        const id = this.books.length + 1;
        const title = prompt("Enter book title: ");
        const author = prompt("Enter author name: ");
        const book = new Book(id, title, author);
        this.books.push(book);
        console.log(" Book added successfully!\n");
    }

    listBooks() {
        console.log("\n Library Books:");
        if (this.books.length === 0) {
            console.log("No books available.");
            return;
        }
        this.books.forEach(book => book.displayBook());
        console.log("");
    }

    issueBook() {
        const id = parseInt(prompt("Enter Book ID to issue: "));
        const book = this.books.find(b => b.id === id);

        if (!book) {
            console.log(" Book not found.\n");
            return;
        }

        const name = prompt("Enter your name: ");
        const phone = prompt("Enter your phone number: ");
        const days = prompt("Enter number of days required: ");

        const user = { name, phone, days };
        book.issueBook(user);
        console.log("");
    }

    returnBook() {
        const id = parseInt(prompt("Enter Book ID to return: "));
        const book = this.books.find(b => b.id === id);

        if (!book) {
            console.log(" Book not found.\n");
            return;
        }

        book.returnBook();
        console.log("");
    }
}


const library = new Library();

while (true) {
    console.log("====== Ghansoli Library ! ======");
    console.log("1. Add Book");
    console.log("2. View All Books");
    console.log("3. Issue Book");
    console.log("4. Return Book");
    console.log("5. Exit");

    const choice = prompt("Choose an option: ");
    console.log("");

    switch (choice) {
        case "1":
            library.addBook();
            break;
        case "2":
            library.listBooks();
            break;
        case "3":
            library.issueBook();
            break;
        case "4":
            library.returnBook();
            break;
        case "5":
            console.log("Thank you !");
            process.exit();
        default:
            console.log(" Invalid choice. Try again.\n");
    }
}