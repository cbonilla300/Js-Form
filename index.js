// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     publishedYear: 1925,
//     genre: ["Fiction", "Classics"],
//     isAvailable: true
// };
// console.log(book.title, book.author, book.isAvailable);
// book.rating = 4.5;
// book.isAvailable = false;
// console.log("book rating:" + book.rating,"Availability: " + book.isAvailable,"book genre:" + book.genre[1])

// const missionLog = ['Lift-off', 'Orbit reached', 'Moon landing', 'Journey home', 'Safe return'];
// let logEntries = '';
// missionLog.forEach(entry => {
//   logEntries += `<li>${entry}</li>`;  
// });
// console.log(logEntries);

// const greetings = ["Hello Astronaut!", "Welcome to Mars!", "Discover the Cosmos!"]

// TODO: Initialize a variable named 'messageList' to build your list of messages as a string
// let messageList = ""

// TODO: Write a loop to go through each greeting and append it to our messageList as <li> element
// for(i = 0; i < greetings.length; i++) {
//     messageList += `<li>${greetings[i]}</li>`;
// }
// console.log(messageList);

// const printer = {
//     color: {
//         lightColors: ["skyblue", "white", "pearl"],
//         darkColors: ["richblakc", "obsidian", "darkslate"]
//     },
//     brand: ["hp", "dell"],
//     size: ["small", "medium", "large"],
//     isconnected: true,


// };
// printer.paperAmount = 500;
// const summary = () => {
//     console.log(`My printer is a ${printer.size[1]} ${printer.brand[1]} ${printer.color.lightColors[1]} printer that holds ${printer.paperAmount} papers`);
// };
// summary();

const cesar = {
    age: 27,
    nationality: "Dominican Republic",
    siblings: true,
    siblingNames: ["Derlyn", "Anthony"],
    favoriteColors: ["Red", "Blue", "Green"],
    address: "8230 charlin pkwy",
    city: "Orlando",
    state: "Florida",
    zipcode: "32822",
    hobbies: ["Basketball", "Coding"],
    getAge: function() {
        console.log(`I am ${this.age}`);
    }
};
 const getAge = (age) => {
    console.log(`I am ${age}`);
 }
cesar.city = "Hazleton";
console.log(cesar.city);
console.log(cesar.city);
getAge(27);
cesar.getAge();