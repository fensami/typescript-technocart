{
    // tarnary oparetor || optional chaning || nullish coalacing oparator 

    const age: number = 20;
    if (age >= 15) {
        console.log("adult");

    } else {
        console.log("not adult");

    }
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log({ isAdult });


    // Nullish coaleaching Oparator 
    // null / undefined ---> decision making

    const isAuhtenticated = " ";

    const result1 = isAuhtenticated ?? "Guest";
    const result2 = isAuhtenticated ? isAuhtenticated : "Guest";
    console.log({ result1 }, { result2 });


    type User = {
        name: string,
        address: {
            city: string;
            road: string;
            premanentaddresss?: string;
            presentAddress: string

        }
    }
    const user: User = {
        name: "Persian",
        address: {
            city: "ctg",
            road: "Awesome Road",
            presentAddress: "feni"
        }
    }
    //application jeno crash na kore she jonno use kora hoi
    const premanentaddresss = user?.address?.premanentaddresss ?? "No permanentAddress";
    console.log({premanentaddresss});
    
}