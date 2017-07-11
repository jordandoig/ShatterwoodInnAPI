
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('weapon').del()
    .then(function () {
      // Inserts seed entries
      return knex('weapon').insert([
        {
          id: 1,
          equipment_id: 14,
          ability_mod: 'str',
          damage_die: '1d4',
          damage_type: 'Bludgeoning',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: true,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 2,
          equipment_id: 15,
          ability_mod: 'str',
          damage_die: '1d4',
          damage_type: 'Piercing',
          range: 'Melee or Thrown 20ft/60ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: true,
          is_heavy: false,
          is_light: true,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: true,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 3,
          equipment_id: 16,
          ability_mod: 'str',
          damage_die: '1d8',
          damage_type: 'Bludgeoning',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: true,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 4,
          equipment_id: 17,
          ability_mod: 'str',
          damage_die: '1d6',
          damage_type: 'Slashing',
          range: 'Melee or Thrown 20ft/60ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: true,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: true,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 5,
          equipment_id: 18,
          ability_mod: 'str',
          damage_die: '1d6',
          damage_type: 'Piercing',
          range: 'Melee or Thrown 30ft/120ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: true,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 6,
          equipment_id: 19,
          ability_mod: 'str',
          damage_die: '1d4',
          damage_type: 'Bludgeoning',
          range: 'Melee or Thrown 20ft/60ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: true,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: true,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 7,
          equipment_id: 20,
          ability_mod: 'str',
          damage_die: '1d6',
          damage_type: 'Bludgeoning',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 8,
          equipment_id: 21,
          ability_mod: 'str',
          damage_die: '1d6',
          damage_type: 'Bludgeoning',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: true,
          phb_page: 149
        },
        {
          id: 9,
          equipment_id: 22,
          ability_mod: 'str',
          damage_die: '1d4',
          damage_type: 'Slashing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: true,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 10,
          equipment_id: 23,
          ability_mod: 'str',
          damage_die: '1d6',
          damage_type: 'Piercing',
          range: 'Melee or Thrown 20ft/60ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: true,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 11,
          equipment_id: 24,
          ability_mod: 'dex',
          damage_die: '1d8',
          damage_type: 'Piercing',
          range: 'Fired 80ft/320ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: true,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: true,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: true,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 12,
          equipment_id: 25,
          ability_mod: 'str',
          damage_die: '1d4',
          damage_type: 'Piercing',
          range: 'Thrown 20ft/60ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: true,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: true,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 13,
          equipment_id: 26,
          ability_mod: 'dex',
          damage_die: '1d6',
          damage_type: 'Piercing',
          range: 'Fired 80ft/320ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: true,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: true,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 14,
          equipment_id: 27,
          ability_mod: 'dex',
          damage_die: '1d4',
          damage_type: 'Bludgeoning',
          range: 'Fired 30ft/120ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: true,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 15,
          equipment_id: 28,
          ability_mod: 'str',
          damage_die: '1d8',
          damage_type: 'Slashing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: true,
          phb_page: 149
        },
        {
          id: 16,
          equipment_id: 29,
          ability_mod: 'str',
          damage_die: '1d8',
          damage_type: 'Bludgeoning',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 17,
          equipment_id: 30,
          ability_mod: 'str',
          damage_die: '1d10',
          damage_type: 'Slashing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: true,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: true,
          is_special: false,
          is_thrown: false,
          is_twohanded: true,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 18,
          equipment_id: 31,
          ability_mod: 'str',
          damage_die: '1d12',
          damage_type: 'Slashing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: true,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: true,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 19,
          equipment_id: 32,
          ability_mod: 'str',
          damage_die: '2d6',
          damage_type: 'Slashing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: true,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: true,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 20,
          equipment_id: 33,
          ability_mod: 'str',
          damage_die: '1d10',
          damage_type: 'Slashing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: true,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: true,
          is_special: false,
          is_thrown: false,
          is_twohanded: true,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 21,
          equipment_id: 34,
          ability_mod: 'str',
          damage_die: '1d12',
          damage_type: 'Piercing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: true,
          is_special: true,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 22,
          equipment_id: 35,
          ability_mod: 'str',
          damage_die: '1d8',
          damage_type: 'Slashing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: true,
          phb_page: 149
        },
        {
          id: 23,
          equipment_id: 36,
          ability_mod: 'str',
          damage_die: '2d6',
          damage_type: 'Bludgeoning',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: true,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: true,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 24,
          equipment_id: 37,
          ability_mod: 'str',
          damage_die: '1d8',
          damage_type: 'Piercing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 25,
          equipment_id: 38,
          ability_mod: 'str',
          damage_die: '1d10',
          damage_type: 'Piercing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: true,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: true,
          is_special: false,
          is_thrown: false,
          is_twohanded: true,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 26,
          equipment_id: 39,
          ability_mod: 'str',
          damage_die: '1d8',
          damage_type: 'Piercing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: true,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 27,
          equipment_id: 40,
          ability_mod: 'str',
          damage_die: '1d6',
          damage_type: 'Slashing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: true,
          is_heavy: false,
          is_light: true,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 28,
          equipment_id: 41,
          ability_mod: 'str',
          damage_die: '1d6',
          damage_type: 'Piercing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: true,
          is_heavy: false,
          is_light: true,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 29,
          equipment_id: 42,
          ability_mod: 'str',
          damage_die: '1d6',
          damage_type: 'Piercing',
          range: 'Melee or Thrown 20ft/60ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: true,
          is_twohanded: false,
          is_versatile: true,
          phb_page: 149
        },
        {
          id: 30,
          equipment_id: 43,
          ability_mod: 'str',
          damage_die: '1d8',
          damage_type: 'Piercing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 31,
          equipment_id: 44,
          ability_mod: 'str',
          damage_die: '1d8',
          damage_type: 'Bludgeoning',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: true,
          phb_page: 149
        },
        {
          id: 32,
          equipment_id: 45,
          ability_mod: 'str',
          damage_die: '1d4',
          damage_type: 'Slashing',
          range: 'Melee',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: true,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: true,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 33,
          equipment_id: 46,
          ability_mod: 'dex',
          damage_die: '1',
          damage_type: 'Piercing',
          range: 'Fired 25ft/100ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: true,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: true,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 34,
          equipment_id: 47,
          ability_mod: 'dex',
          damage_die: '1d6',
          damage_type: 'Piercing',
          range: 'Fired 30ft/120ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: true,
          is_finesse: false,
          is_heavy: false,
          is_light: true,
          is_loading: true,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 35,
          equipment_id: 48,
          ability_mod: 'dex',
          damage_die: '1d10',
          damage_type: 'Piercing',
          range: 'Fired 100ft/400ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: true,
          is_finesse: false,
          is_heavy: true,
          is_light: false,
          is_loading: true,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: true,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 36,
          equipment_id: 49,
          ability_mod: 'dex',
          damage_die: '1d8',
          damage_type: 'Piercing',
          range: 'Fired 150ft/600ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: true,
          is_finesse: false,
          is_heavy: true,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: false,
          is_thrown: false,
          is_twohanded: true,
          is_versatile: false,
          phb_page: 149
        },
        {
          id: 37,
          equipment_id: 50,
          ability_mod: 'dex',
          damage_die: '',
          damage_type: '',
          range: 'Thrown 5ft/15ft',
          magic_mod: 0,
          magic_desc: '',
          is_ammunition: false,
          is_finesse: false,
          is_heavy: false,
          is_light: false,
          is_loading: false,
          is_range: false,
          is_reach: false,
          is_special: true,
          is_thrown: true,
          is_twohanded: false,
          is_versatile: false,
          phb_page: 149
        }
      ]);
    });
};
