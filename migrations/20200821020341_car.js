
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        table.integer("VIN").notNull().unique().primary()
        table.text("Make").notNull
        table.text("Model").notNull
        table.integer("Mileage").notNull
        table.text("Transmission Type")
        table.text("Title")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
};
