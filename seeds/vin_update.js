
exports.seed = async function(knex) {
  await knex("cars").truncate()

  await knex("cars").insert([
    {VIN: "HNYD2H45DH453293", Make: "Lincoln", Model: "Navigator L", Mileage: 6377905},
    {VIN: "3D7JV1EP4BG435769", Make: "Dodge", Model: "Caravan", Mileage: 2446518},
    {VIN: "1D7RB1CP9BS183024", Make: "Ford", Model: "F-Series", Mileage: 362270},
    {VIN: "TRUDD38J681987025", Make: "Fillmore", Model: "Fillmore", Mileage: 9635024},
    {VIN: "5FRYD3H98GB545868", Make: "Chevrolet", Model: "Cavalier", Mileage: 4652081},
    {VIN: "2T1BURHE9EC973134", Make: "Lexus", Model: "LX", Mileage: 0283189},
    {VIN: "WAUAVAFD2BN600219", Make: "Hyundai", Model: "XG350", Mileage: 678024},
    {VIN: "1G6DX67D590665856", Make: "Oldsmobile", Model: "Intrigue", Mileage: 6539235},
    {VIN: "JM1NC2SF5F0814146", Make: "Volkswagen", Model: "GTI", Mileage: 5755297},
    {VIN: "ZHWGU5BZXDL466557", Make: "Dodge", Model: "Intrepid", Mileage: 0634347}
  ])
};
