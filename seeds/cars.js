
exports.seed = async function(knex) {
  await knex("cars").truncate()

  await knex("cars").insert([
    {"VIN":"5FNYF3H48FB996524","Make":"Volvo","Model":"S40","Mileage":8137},
    {"VIN":"WBA1J7C56FV493516","Make":"Mitsubishi","Model":"Pajero","Mileage":25981},
    {"VIN":"WUARL48HX6K324573","Make":"Chevrolet","Model":"Venture","Mileage":18154},
    {"VIN":"4T1BF1FK9EU643464","Make":"Toyota","Model":"Sienna","Mileage":15741},
    {"VIN":"WAUMF78P76A266495","Make":"Chrysler","Model":"Sebring","Mileage":24789},
    {"VIN":"1N6AA0CC1AN777117","Make":"Ford","Model":"E-Series","Mileage":48000},
    {"VIN":"1G6AS5SX4E0093394","Make":"Ford","Model":"Escort ZX2","Mileage":34657},
    {"VIN":"NM0AE8F74E1014121","Make":"Volkswagen","Model":"Rabbit","Mileage":33392},
    {"VIN":"1C4RDJAG6EC978196","Make":"Mitsubishi","Model":"Eclipse","Mileage":24323},
    {"VIN":"19UUA76688A872761","Make":"Audi","Model":"RS6","Mileage":21678}
  ])
};
