{
    //type Alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo: string;
        address: string;
    }
    const student1: Student = {
        name: "asad",
        age: 24,
        gender: "male",
        contactNo: "19243940034",
        address: "feni"

    }

type UserName = string;
type IsAdmin = boolean;
const userName: UserName = "parsian";
const isAdmin: IsAdmin = true;

type Add = (num1:number, num2:number)=> number;

const add:Add = (num1,num2)=> num1 + num2











}