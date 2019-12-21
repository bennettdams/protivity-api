const express = require("express");
const router = express.Router();

const heroesService = require("../services/hero-service");

router.get("/", (req, res) => {
  heroesService.get(req, res);
});

router.put("/", (req, res) => {
  heroesService.update(req, res);
});

router.post("/", (req, res) => {
  heroesService.create(req, res);
});

router.delete("/:id", (req, res) => {
  heroesService.destroy(req, res);
});

module.exports = router;
