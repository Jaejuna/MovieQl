const juna = {
    name: "Jaejuna",
    age: 23,
    gender: "male"
};


const resolvers = {
    Query: {
        person: () => juna
    }
};

export default resolvers;