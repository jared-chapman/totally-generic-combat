const testUnits = [
    {
        position: 0,
        name: "Warrior2",
        leftName: 'Initiative',
        left: {
            name: 'Initiative',
            value: 8,
        },
        right: {
            name: 'HP',
            value: 9,
            max: 12,
        },
        otherValues: [
            {
                name: 'HP',
                value: 22
            },
            {
                name: 'AC',
                value: 16,
            },
            {
                name: 'Spell Save DC',
                value: '14'
            }
        ],
        details: '<h1>WARRIOR</h1> <p>Hey cool HTML works</p>'
    },{
        position: 1,
        name: "Goblin",
        left: {
            name: 'Initiative',
            value: 8,
        },
        right: {
            name: 'HP',
            value: 9,
            max: 12,
        },
        otherValues: [
            {
                name: 'HP',
                value: 14,
            },
            {
                name: 'AC',
                value: '12',
            },
            {
                name: 'CR',
                value: '1/4'
            },
            {
                name: 'STR',
                value: '8',
            },
            {
                name: 'DEX',
                value: '12',
            },
            {
                name: 'WIS',
                value: '8',
            },
            {
                name: 'INT',
                value: '7',
            },
        ],
        details: '![](https://drive.google.com/uc?id=1xUXVsvO8qJCN5FtUhd1kNnB_UjXpzzvq)![](https://www.dndbeyond.com/avatars/thumbnails/30783/955/1000/1000/638062024584880857.png)'
    },
    {
        position: 2,
        name: "Goblin Leader",
        left: {
            name: 'Initiative',
            value: 8,
        },
        right: {
            name: 'HP',
            value: 9,
            max: 12,
        },
        otherValues: [
            {
                name: 'HP',
                value: 17,
            },
            {
                name: 'AC',
                value: '14',
            },
            {
                name: 'CR',
                value: '1'
            },
            {
                name: 'STR',
                value: '10',
            },
            {
                name: 'DEX',
                value: '13',
            },
            {
                name: 'WIS',
                value: '10',
            },
            {
                name: 'INT',
                value: '7',
            },
        ],
        details: '![](https://drive.google.com/uc?id=1xUXVsvO8qJCN5FtUhd1kNnB_UjXpzzvq)'
    },
]

export default testUnits;
