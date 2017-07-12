
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dragonborn_color').del()
    .then(function () {
      // Inserts seed entries
      return knex('dragonborn_color').insert([
        {
          id: 1,
          color: 'Black',
          damage_type: 'Acid',
          save_ability: 'dex',
          is_line: true,
          is_cone: false,
          phb_page: 34
        },
        {
          id: 2,
          color: 'Blue',
          damage_type: 'Lightning',
          save_ability: 'dex',
          is_line: true,
          is_cone: false,
          phb_page: 34
        },
        {
          id: 3,
          color: 'Brass',
          damage_type: 'Fire',
          save_ability: 'dex',
          is_line: true,
          is_cone: false,
          phb_page: 34
        },
        {
          id: 4,
          color: 'Bronze',
          damage_type: 'Lightning',
          save_ability: 'dex',
          is_line: true,
          is_cone: false,
          phb_page: 34
        },
        {
          id: 5,
          color: 'Copper',
          damage_type: 'Acid',
          save_ability: 'dex',
          is_line: true,
          is_cone: false,
          phb_page: 34
        },
        {
          id: 6,
          color: 'Gold',
          damage_type: 'Fire',
          save_ability: 'dex',
          is_line: false,
          is_cone: true,
          phb_page: 34
        },
        {
          id: 7,
          color: 'Green',
          damage_type: 'Poison',
          save_ability: 'con',
          is_line: false,
          is_cone: true,
          phb_page: 34
        },
        {
          id: 8,
          color: 'Red',
          damage_type: 'Fire',
          save_ability: 'dex',
          is_line: false,
          is_cone: true,
          phb_page: 34
        },
        {
          id: 9,
          color: 'Silver',
          damage_type: 'Cold',
          save_ability: 'con',
          is_line: false,
          is_cone: true,
          phb_page: 34
        },
        {
          id: 10,
          color: 'White',
          damage_type: 'Cold',
          save_ability: 'con',
          is_line: false,
          is_cone: true,
          phb_page: 34
        }
      ]);
    });
};
