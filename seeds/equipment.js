
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('equipment').del()
    .then(function () {
      // Inserts seed entries
      return knex('equipment').insert([
        {
          id: 1,
          name: 'Padded Armor',
          is_weapon: false,
          is_armor: true,
          is_tool: false,
          weight: 8,
          price: 500
        },
        {
          id: 2,
          name: 'Leather Armor',
          is_weapon: false,
          is_armor: true,
          is_tool: false,
          weight: 10,
          price: 1000
        },
        {
          id: 3,
          name: 'Studded Leather Armor',
          is_weapon: false,
          is_armor: true,
          is_tool: false,
          weight: 13,
          price: 4500
        },
        {
          id: 4,
          name: 'Hide Armor',
          is_weapon: false,
          is_armor: true,
          is_tool: false,
          weight: 12,
          price: 1000
        },
        {
          id: 5,
          name: 'Chain Shirt',
          is_weapon: false,
          is_armor: true,
          is_tool: false,
          weight: 20,
          price: 5000
        },
        {
          id: 6,
          name: 'Scale Mail',
          is_weapon: false,
          is_armor: true,
          is_tool: false,
          weight: 45,
          price: 5000
        },
        {
          id: 7,
          name: 'Breast Plate',
          is_weapon: false,
          is_armor: true,
          is_tool: false,
          weight: 20,
          price: 40000
        },
        {
          id: 8,
          name: 'Half Plate',
          is_weapon: false,
          is_armor: true,
          is_tool: false,
          weight: 40,
          price: 75000
        },
        {
          id: 9,
          name: 'Ring Mail',
          is_weapon: false,
          is_armor: true,
          is_tool: false,
          weight: 40,
          price: 3000
        },
        {
          id: 10,
          name: 'Chain Mail',
          is_weapon: false,
          is_armor: true,
          is_tool: false,
          weight: 55,
          price: 7500
        },
        {
          id: 11,
          name: 'Splint Armor',
          is_weapon: false,
          is_armor: true,
          is_tool: false,
          weight: 60,
          price: 20000
        },
        {
          id: 12,
          name: 'Plate Armor',
          is_weapon: false,
          is_armor: true,
          is_tool: false,
          weight: 65,
          price: 150000
        },
        {
          id: 1,
          name: 'Shield',
          is_weapon: false,
          is_armor: true,
          is_tool: false,
          weight: 6,
          price: 1000
        },
      ]);
    });
};
