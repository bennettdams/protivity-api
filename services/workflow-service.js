const Workflow = require("../models/workflow-model");
const ReadPreference = require("mongodb").ReadPreference;

require("../mongo").connect();

function get(req, res) {
  const docquery = Workflow.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(workflows => {
      res.json(workflows);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { id, title } = req.body;

  const workflow = new Workflow({ id, title });
  workflow
    .save()
    .then(() => {
      res.json(workflow);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
  const { id, title } = req.body;

  Workflow.findOne({ id })
    .then(workflow => {
      workflow.title = title;
      workflow.save().then(res.json(workflow));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { id } = req.params;

  Workflow.findOneAndRemove({ id })
    .then(workflow => {
      res.json(workflow);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, update, destroy };
