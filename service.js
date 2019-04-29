const DB = [
    {
        name: 'Tanos',
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
        ]
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