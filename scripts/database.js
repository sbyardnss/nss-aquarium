const database = {
    fish: [
        {
            name: "Greg",
            species: "Pike",
            food: "fish",
            size: 3,
            image: "pictures/fish/download (1).jpeg",
        },
        {
            name: "Bev",
            species: "Clownfish",
            food: "algae",
            size: .1,
            image: "pictures/fish/clownfish.jpeg",
        },
        {
            name: "Inigo Montoya",
            species: "Sunfish",
            food: "fish",
            size: 5,
            image: "pictures/fish/sunfish.jpeg",
        },
        {
            name: "Lilo",
            species: "Catfish",
            food: "fish",
            size: 2,
            image: "pictures/fish/catfish.jpeg"
        }
    ]
};
// console.log(database);


const tipsDatabase = [
    {
        tip: "Try to, like, not miss the fish"
    },
    {
        tip: "NEVER breathe the water. You cannot"
    },
    {
        tip: "Sharks bite hard"
    }

]




export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}