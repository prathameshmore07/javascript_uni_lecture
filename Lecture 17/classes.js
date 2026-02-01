class Student {

    constructor(fname) {
        this.fname = fname;

    }
    learn() {
        return this.fname + " is learning. ";
        console.log("learning.");

    }

    static bunk() {
        console.log("bunking...");
    }
}
let obj = new Student('Ram');
console.log(obj.learn());
Student.bunk();

class user extends Student {
    constructor(fname, email) {
        super(fname);
        this.email = email;
    }
    login() {
        return this.learn();
    }
}

let user1 = new user();
//user1.login();