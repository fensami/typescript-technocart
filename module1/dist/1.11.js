"use strict";
var _a, _b;
{
    // tarnary oparetor || optional chaning || nullish coalacing oparator 
    const age = 20;
    if (age >= 15) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log({ isAdult });
    // Nullish coaleaching Oparator 
    // null / undefined ---> decision making
    const isAuhtenticated = " ";
    const result1 = isAuhtenticated !== null && isAuhtenticated !== void 0 ? isAuhtenticated : "Guest";
    const result2 = isAuhtenticated ? isAuhtenticated : "Guest";
    console.log({ result1 }, { result2 });
    const user = {
        name: "Persian",
        address: {
            city: "ctg",
            road: "Awesome Road",
            presentAddress: "feni"
        }
    };
    //application jeno crash na kore she jonno use kora hoi
    const premanentaddresss = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.premanentaddresss) !== null && _b !== void 0 ? _b : "No permanentAddress";
    console.log({ premanentaddresss });
}
