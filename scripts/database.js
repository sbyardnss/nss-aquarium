const database = {
    fish: [
        {
            name: "Greg",
            species: "Pike",
            food: "fish",
            size: 3,
        },
        {
            name: "Bev",
            species: "Clownfish",
            food: "algae",
            size: .1,
        },
        {
            name: "Inigo Montoya",
            species: "Sunfish",
            food: "fish",
            size: 6,
        },
        {
            name: "Lilo",
            species: "Catfish",
            food: "fish",
            size: 2,
        }
    ]
};
// console.log(database);


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}