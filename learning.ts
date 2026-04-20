type Book = {
    title: string;
    pages: number;
    isAvailable: boolean;
};

const myBook: Book = {
    title: "Lord of The Rings",
    pages: 521,
    isAvailable: true
};

const anotherBook: Book = {
    title: "Betrayal of Falador",
    pages: 256,
    isAvailable: false
};

const lastBook: Book = {
    title: "Return to Canifis",
    pages: 185,
    isAvailable: false
};

/*
const brokenBook: Book = {
    title: 123,
    pages: "a lot",
    isAvailable: "yes"
};
*/

const library: Book[] = [myBook];

library.push(anotherBook);
library.push(lastBook);

console.log(library);