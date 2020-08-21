
exports.up = async function(knex) {
  await knex.schema.createTable("sales", (table) => {
      table.decimal("RetailPrice").notNull()
      table.decimal("ManufacturersPrice").notNull()
      table.text("SoldBy").notNull()
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("sales")
};
