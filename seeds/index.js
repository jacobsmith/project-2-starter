const sequelize = require('../config/connection');
// HINT: see notes in galleryData.js for how you can modify this for your own seed
// const seedGallery = require('./galleryData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // await seedGallery();

  process.exit(0);
};

seedAll();
