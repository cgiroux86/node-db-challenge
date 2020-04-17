exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { description: "download repo", project_id: 1 },
        { description: "wait for tim", project_id: 1 },
        { description: "watch youtube", project_id: 2 },
        { description: "try postgres", project_id: 2 },
        { description: "study typescript", project_id: 3 },
        { description: "types for react", project_id: 3 },
      ]);
    });
};
