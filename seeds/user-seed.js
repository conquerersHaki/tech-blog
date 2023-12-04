const { User } = require('../models');

const userData = [{
        username: 'Dwight',
        password: 'Schrute'

    },
    {
        username: 'Donquixote',
        password: 'Doflamingo'
    },
    {
        username: 'Trafalgar',
        password: 'Law'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;