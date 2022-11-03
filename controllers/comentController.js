const { Coment } = require("../models");

async function index(req, res) {
  const coments = await Coment.findAll({ where: { characterId: req.params.id } });
  res.json(coments);
}

async function create(req, res) {
  console.log(req.body);
  Coment.create({
    title: req.body.title,
    content: req.body.content,
    characterId: req.params.id,
  });
  res.json("Author created");
}

module.exports = {
  index,
  create,
};
