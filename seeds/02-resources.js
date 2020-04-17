exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          resource_name: "computer",
          resource_description: "used to take over world",
        },
        {
          resource_name: "microphone",
          resource_description: "used to talk over internet",
        },
        {
          resource_name: "internet",
          resource_description: "used to change your life",
        },
        {
          resource_name: "delivery van",
          resource_description: "used to deliver goods",
        },
        {
          resource_name: "webcam",
          resource_description: "used for virtual meetings",
        },
        {
          resource_name: "coffee",
          resource_description: "used to fuel your day",
        },
      ]);
    });
};
