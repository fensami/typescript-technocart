// destrucaring
{
    const user = {
        contact: 8801248349,
        name: {
            firstName: "asadur",
            middleName: "jaman",
            lastName: "nur"
        },
        location: "feni",
        country: "bangladesh"
    }

    const { contact, name: { firstName, lastName } } = user;

    // Array Destructaring
    const friends = ["monir", "rokib", "mredul", "naim", "asad"]
    const [, , bestfriend, ...rest] = friends
}