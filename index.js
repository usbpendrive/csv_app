import { appendFileSync } from 'fs';
import { createInterface } from "readline";


const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

const readLineAsync = (message) =>
    new Promise((resolve) => readline.question(message, resolve));

class Person {
    constructor(name = "",  number = "", email = "") {
        this.name = name;
        this.number = number;
        this.email = email;
    }

    saveToCSV() {
        const content = `${this.name}, ${this.number}, ${this.email}\n`;
        try {
            appendFileSync("./contact.csv", content);
            console.log(`${this.name} saved!`);
        } catch (err) {
            console.log(err);
        }
    }
}


const startApp = async () => {
    let shouldContinue = true;
    while (shouldContinue) {
        const name = await readLineAsync("Contact name: ");
        const number = await readLineAsync("Contact number: ");
        const email = await readLineAsync("Contact email: ");

        const person = new Person(name, number, email);
        person.saveToCSV();

        const response = await readLineAsync("Continue? [y to continue]: ");
        shouldContinue = response.toLowerCase() === "y";
    }


    readline.close();
}

startApp();