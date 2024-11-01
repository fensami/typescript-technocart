{
    // spread Oparator
    // rest operator
    // destructuring


    // learn spread Operator
    const bros1 = ['kaku', 'kaki', 'mamu']
    const bros2 = ['ka', 'ki', 'ku']
    bros1.push(...bros2)



    const mantor1 = {
        typescript: "mizan",
        redux: "mir"
    }
    const mantor2 = {
        dbms: "kaku",
        aos: "kaki"
    }
    const mentorList = {
        ...mantor1,
        ...mantor2
    }

    //learn rest opearator

    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`)
        )
    }
    greetFriends("abul", 'kabul', 'babul', 'monir', 'sumon')

}