const { Comment } = require('../models');

const commentData = [{
        comment_text: "Shrek is life",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Who lives in a pineapple under the sea?",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Have you ever had a dream that you, um, you had, your, you- you could, you’ll do, you- you wants, you, you could do so, you- you’ll do, you could- you, you want, you want him to do you so much you could do anything?",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;