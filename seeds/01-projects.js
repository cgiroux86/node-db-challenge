exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          project_name: "sprint",
          project_description: "complete MVP and stretch",
        },
        {
          id: 2,
          project_name: "learn DBMS",
          project_description: "learn to use postgresql and mySQL",
        },
        {
          id: 3,
          project_name: "learn typescript",
          project_description: "learn how to use typescript",
        },
      ]);
    });
};
