"use strict";
{
    // Nullable type  |  UnKonwn type
    const searching = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is noting to searching");
        }
    };
    searching(null);
    // Unknown Typeof
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The Speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log("wrong Input");
        }
    };
    getSpeedInMeterPerSecond(null);
    // Never 
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("error hoi gece kaku");
}
