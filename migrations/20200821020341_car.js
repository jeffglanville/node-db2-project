
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        table.integer("id").notNull().unique().primary()
        table.integer("VIN").notNull().unique()
        table.text("Make").notNull()
        table.text("Model").notNull()
        table.integer("Mileage").notNull()
        table.text("TransmissionType")
        table.text("Title")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
};
