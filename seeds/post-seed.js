const { Post } = require('../models');

const postData = [{
        title: 'Broke my spine',
        content: 'Long story short, I did some sick gainers across the access road going 50mph.',
        user_id: 1

    },
    {
        title: 'Coke Zero',
        content: 'not only is it better, its the best.',
        user_id: 2
    },
    {
        title: 'Tamagotchi',
        content: 'Anybody else obsess over tamagotchis when they were younger? I found mine again while moving and popped a batter in it. cant get enough of it.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;