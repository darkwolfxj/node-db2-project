
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments()
        tbl.string("VIN", 17)
            .unique()
            .notNullable()
            .index()
        tbl.string("Make")
            .notNullable()
        tbl.string("Model")
            .notNullable()
        tbl.integer("Mileage/MPG")
            .notNullable()
        tbl.string("Transmission Type")
        tbl.string("Title Status")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("cars")
};
