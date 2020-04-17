const db = require("../dbConfig");

module.exports = {
  getProjects() {
    return db("projects");
  },
  addProject(project) {
    return db("projects")
      .insert(project)
      .then(([id]) =>
        this.getProjects()
          .where({ id })
          .then((p) => p)
      );
  },
  editProject(id, project) {
    return db("projects")
      .where({ id })
      .update(project)
      .then((u) =>
        this.getProjects()
          .where("id", id)
          .then((updated) => updated)
      );
  },
  deleteProject(id) {
    return db("projects")
      .where({ id })
      .del()
      .then((deleted) => deleted);
  },
  getResources() {
    return db("resources");
  },
  addResource(resource) {
    return db("resources")
      .insert(resource)
      .then(([id]) =>
        this.getResources()
          .where({ id })
          .then((r) => r)
      );
  },
  getTask() {
    return db
      .select(
        "tasks.description",
        "projects.project_name",
        "projects.project_description"
      )
      .from("tasks")
      .join("projects", "tasks.project_id", "projects.id")
      .then((tasks) => tasks);
  },
  addTask(task) {
    return db("tasks")
      .insert(task)
      .then(([id]) => db("tasks").where({ id }));
  },
  getProjectDescription(projectId) {},
};
