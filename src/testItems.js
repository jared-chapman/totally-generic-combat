const testItems = [
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
        details: '<h1>GOBLIN</h1> <p>How do we support images locally?</p>'
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
        details: '<h1>GOBLIN LEADER</h1> <p>🤷‍♂️</p>'
    },
]

export default testItems;
