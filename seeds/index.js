const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  try {
    // syncing the database
    await sequelize.sync({ force: true });

    // seeding the users, posts, and comments
    await seedUsers();
    await seedPosts();
    await seedComments();

    console.log('Data seeding completed successfully.');
  } catch (error) {
    console.error('Error during data seeding:', error);
  } finally {
    process.exit(0);
  }
};

seedAll();