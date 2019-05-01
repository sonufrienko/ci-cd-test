const DB = [
    {
        name: 'Tan-os',
        origin: 'Titan',
        team: [
            'Infinity Watch', 
            'Black Order'
        ],
        alias: 'The Mad Titan',
        species: 'Eternal-Deviant hybrid',
        abilities: [
            'Superhuman strength', 
            'Superhuman physiology', 
            'Genius-level tactician'
        ],
        images: []
    }, {
        name: 'Thor',
        origin: 'Asgard',
        team: [
            'Avengers',
            'Warriors Three',
            'Thor Corps',
            'God Squad',
            'Avengers Unity Squad'
        ],
        alias: 'Siegmund',
        species: 'Asgardian',
        abilities: [
            'Superhuman strength, speed, durability and longevity'
        ],
        images: []
    }
];

const getHeroByName = name => new Promise((resolve, reject) => {
    setTimeout(() => {
        const response = DB.find(item => item.name.toLowerCase() === name.toLowerCase())
        resolve(response);
    }, 600);
});

module.exports = {
    getHeroByName
};