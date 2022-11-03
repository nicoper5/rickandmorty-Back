const { faker } = require("@faker-js/faker");
const { Coment } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const coments = [];

  for (let i = 0; i < 1000; i++) {
    coments.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      characterId: Math.floor(Math.random() * (1000 - 1 + 1) + 1),
    });
  }

  await Coment.bulkCreate(coments);
  console.log("[Database] Se corrió el seeder de Coments.");
};
