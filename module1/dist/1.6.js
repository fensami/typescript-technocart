"use strict";
//Funtion 2 ta hoi 
//Normal Function
//arrow Function
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(1, 2);
//arrow function 
const arrow = (num1, num2) => num1 + num2;
const poorUser = {
    name: "Mezba",
    balance: "0",
    addBalance(balance) {
        // return this.balance + balance;
        return `my new balance is ${this.balance + balance}`;
    }
};
//
const arr = [1, 4, 5];
const newArray = arr.map((elem) => elem * elem);
