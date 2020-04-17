const express = require("express");
const router = express.Router();
const Utils = require("../helpers/helpers");

router.get("/", (req, res) => {
  Utils.getProjects()
    .then((projects) => res.status(200).json(projects))
    .catch((err) => res.status(500).json(err));
});

router.post("/", (req, res) => {
  const project = req.body;
  Utils.addProject(project)
    .then((p) => res.status(201).json(project))
    .catch((err) => res.status(500).json(err));
});

router.get("/resources", (req, res) => {
  Utils.getResources()
    .then((resources) => res.status(200).json(resources))
    .catch((err) => res.status(500).json(err));
});

router.post("/resources", (req, res) => {
  const resource = req.body;
  Utils.addResource(resource)
    .then((r) => res.status(201).json(r))
    .catch((err) => res.status(500).json(err));
});

router.get("/tasks", (req, res) => {
  Utils.getTask()
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => res.status(500).json(err));
});

router.post("/tasks", (req, res) => {
  const task = req.body;
  Utils.addTask(task)
    .then((t) => res.status(201).json(t))
    .catch((err) => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  Utils.editProject(id, body)
    .then((project) => res.status(201).json(project))
    .catch((err) => res.status(404).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Utils.getProjectDescription(id)
    .then((desc) => res.status(200).json(desc))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
