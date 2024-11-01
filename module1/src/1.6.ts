//Funtion 2 ta hoi 
//Normal Function
//arrow Function

function add(num1:number, num2:number = 10): number{
    return num1 + num2
}
add(1,2)

//arrow function 
const arrow = (num1: number, num2:number)=> num1 + num2
const poorUser ={
    name:"Mezba",
    balance:"0",
    addBalance(balance:number): string {
        // return this.balance + balance;
        return `my new balance is ${this.balance + balance}`
    }
}


//
const arr: number[] = [1,4,5]

const newArray : number[] = arr.map((elem:number):number => elem*elem)