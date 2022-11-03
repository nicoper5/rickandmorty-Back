const express = require("express");
const publicRouter = express.Router();
const comentController = ({ index } = require("../controllers/comentController"));

publicRouter.get("/character/:id/comments", comentController.index);
publicRouter.post("/character/:id/comments", comentController.create);
module.exports = publicRouter;
