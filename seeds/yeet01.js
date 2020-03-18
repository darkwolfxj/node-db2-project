
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {"VIN": "YEEEEEEEEEEEEEET0", "Make": "Toyota", "Model": "Avalon", "Mileage/MPG": "20"},
        {"VIN": "YEEEEEEEEEEEEEET1", "Make": "Toyota", "Model": "Avalon", "Mileage/MPG": "20"},
        {"VIN": "YEEEEEEEEEEEEEET2", "Make": "Toyota", "Model": "Avalon", "Mileage/MPG": "20"}
      ]);
    });
};
