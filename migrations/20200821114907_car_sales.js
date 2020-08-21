
exports.up = async function(knex) {
  await knex.schema.createTable("car_sales", (table) => {
    table.decimal("RetailPrice").notNull()
    table.decimal("ManufacturersPrice").notNull()
    table.text("SoldBy").notNull()
    table.integer("CarID").notNull().unique().primary()
    table.foreign("CarID").references("id").inTable("cars")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("car_sales")
};
