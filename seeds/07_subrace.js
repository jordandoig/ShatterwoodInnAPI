
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subrace').del()
    .then(function () {
      // Inserts seed entries
      return knex('subrace').insert([
        {
          id: 1,
          race_id: 1,
          name: 'Hill Dwarf',
          str_mod: 0,
          dex_mod: 0,
          con_mod: 0,
          int_mod: 0,
          wis_mod: 1,
          cha_mod: 0,
          weapon_profs: '',
          armor_profs: '',
          phb_page: 20
        },
        {
          id: 2,
          race_id: 1,
          name: 'Mountain Dwarf',
          str_mod: 2,
          dex_mod: 0,
          con_mod: 0,
          int_mod: 0,
          wis_mod: 0,
          cha_mod: 0,
          weapon_profs: '',
          armor_profs: 'Light, Medium',
          phb_page: 20
        },
        {
          id: 3,
          race_id: 2,
          name: 'High Elf',
          str_mod: 0,
          dex_mod: 0,
          con_mod: 0,
          int_mod: 1,
          wis_mod: 0,
          cha_mod: 0,
          weapon_profs: 'Longsword, Shortsword, Shortbow, Longbow',
          armor_profs: '',
          phb_page: 23
        },
        {
          id: 4,
          race_id: 2,
          name: 'Wood Elf',
          str_mod: 0,
          dex_mod: 0,
          con_mod: 0,
          int_mod: 0,
          wis_mod: 1,
          cha_mod: 0,
          weapon_profs: 'Longsword, Shortsword, Shortbow, Longbow',
          armor_profs: '',
          phb_page: 24
        },
        {
          id: 5,
          race_id: 2,
          name: 'Drow',
          str_mod: 0,
          dex_mod: 0,
          con_mod: 0,
          int_mod: 0,
          wis_mod: 0,
          cha_mod: 1,
          weapon_profs: 'Rapier, Shortsword, Hand Crossbow',
          armor_profs: '',
          phb_page: 24
        },
        {
          id: 6,
          race_id: 3,
          name: 'Lightfoot Halfling',
          str_mod: 0,
          dex_mod: 0,
          con_mod: 0,
          int_mod: 0,
          wis_mod: 0,
          cha_mod: 1,
          weapon_profs: '',
          armor_profs: '',
          phb_page: 28
        },
        {
          id: 7,
          race_id: 3,
          name: 'Stout Halfling',
          str_mod: 0,
          dex_mod: 0,
          con_mod: 1,
          int_mod: 0,
          wis_mod: 0,
          cha_mod: 0,
          weapon_profs: '',
          armor_profs: '',
          phb_page: 28
        },
        {
          id: 8,
          race_id: 6,
          name: 'Forest Gnome',
          str_mod: 0,
          dex_mod: 1,
          con_mod: 0,
          int_mod: 0,
          wis_mod: 0,
          cha_mod: 0,
          weapon_profs: '',
          armor_profs: '',
          phb_page: 37
        },
        {
          id: 9,
          race_id: 6,
          name: 'Rock Gnome',
          str_mod: 0,
          dex_mod: 0,
          con_mod: 1,
          int_mod: 0,
          wis_mod: 0,
          cha_mod: 0,
          weapon_profs: '',
          armor_profs: '',
          phb_page: 37
        }
      ]);
    });
};
