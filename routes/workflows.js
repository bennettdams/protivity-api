const express = require("express");
const router = express.Router();

const workflowsService = require("../services/workflow-service");

router.get("/", (req, res) => {
  workflowsService.get(req, res);
});

router.put("/", (req, res) => {
  workflowsService.update(req, res);
});

router.post("/", (req, res) => {
  workflowsService.create(req, res);
});

router.delete("/:id", (req, res) => {
  workflowsService.destroy(req, res);
});

module.exports = router;
