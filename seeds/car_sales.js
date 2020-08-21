
exports.seed = async function(knex) {
  await knex("car_sales").truncate()

  await knex("car_sales").insert([
  {RetailPrice: 18134, ManufacturersPrice: 6058, SoldBy: "Berny Limming"},
  {RetailPrice: 17361, ManufacturersPrice: 3042, SoldBy: "Inesita Isac"},
  {RetailPrice: 16712, ManufacturersPrice: 13597, SoldBy: "Cordy Douty"},
  {RetailPrice: 23741, ManufacturersPrice: 10119, SoldBy: "Amble Colnet"},
  {RetailPrice: 17484, ManufacturersPrice: 10778, SoldBy: "Eolande Roset"},
  {RetailPrice: 18729, ManufacturersPrice: 5244, SoldBy: "Pris Nibley"},
  {RetailPrice: 11009, ManufacturersPrice: 7992, SoldBy: "Kalie Trassler"},
  {RetailPrice: 13981, ManufacturersPrice: 4872, SoldBy: "Flint Petri"},
  {RetailPrice: 12178, ManufacturersPrice: 7613, SoldBy: "Elvera Senechell"},
  {RetailPrice: 17946, ManufacturersPrice: 13836, SoldBy: "Rorke Norval"}
  ])
};
