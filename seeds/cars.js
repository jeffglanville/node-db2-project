
exports.seed = async function(knex) {
  await knex("cars").truncate()

  await knex("cars").insert([
    {VIN: 1660925690, Make: "Lincoln", Model: "Navigator L", Mileage: 6377905},
    {VIN: 46318185, Make: "Dodge", Model: "Caravan", Mileage: 2446518},
    {VIN: 16130241528, Make: "Ford", Model: "F-Series", Mileage: 362270},
    {VIN: 22380610, Make: "Fillmore", Model: "Fillmore", Mileage: 9635024},
    {VIN: 18119727, Make: "Chevrolet", Model: "Cavalier", Mileage: 4652081},
    {VIN: 242414200, Make: "Lexus", Model: "LX", Mileage: 0283189},
    {VIN: 7285751, Make: "Hyundai", Model: "XG350", Mileage: 678024},
    {VIN: 4257255892, Make: "Oldsmobile", Model: "Intrigue", Mileage: 6539235},
    {VIN: 5122171564, Make: "Volkswagen", Model: "GTI", Mileage: 5755297},
    {VIN: 857521765,Make: "Dodge", Model: "Intrepid", Mileage: 0634347}
  ])
};
