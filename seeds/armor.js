
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('armor').del()
    .then(function () {
      // Inserts seed entries
      return knex('armor').insert([
        {
          id: 1,
          equipment_id: 1,
          ac_bonus: 11,
          magic_mod: 0,
          magic_desc: "",
          is_light: true,
          is_medium: false,
          is_heavy: false,
          is_shield: false,
          add_dex: true,
          dex_max: 20,
          str_req: 0,
          stealth_disadvantage: true,
          phb_page: 145
        },
        {
          id: 2,
          equipment_id: 2,
          ac_bonus: 11,
          magic_mod: 0,
          magic_desc: "",
          is_light: true,
          is_medium: false,
          is_heavy: false,
          is_shield: false,
          add_dex: true,
          dex_max: 20,
          str_req: 0,
          stealth_disadvantage: false,
          phb_page: 145
        },
        {
          id: 3,
          equipment_id: 3,
          ac_bonus: 12,
          magic_mod: 0,
          magic_desc: "",
          is_light: true,
          is_medium: false,
          is_heavy: false,
          is_shield: false,
          add_dex: true,
          dex_max: 20,
          str_req: 0,
          stealth_disadvantage: false,
          phb_page: 145
        },
        {
          id: 4,
          equipment_id: 4,
          ac_bonus: 12,
          magic_mod: 0,
          magic_desc: "",
          is_light: false,
          is_medium: true,
          is_heavy: false,
          is_shield: false,
          add_dex: true,
          dex_max: 2,
          str_req: 0,
          stealth_disadvantage: false,
          phb_page: 145
        },
        {
          id: 5,
          equipment_id: 5,
          ac_bonus: 13,
          magic_mod: 0,
          magic_desc: "",
          is_light: false,
          is_medium: true,
          is_heavy: false,
          is_shield: false,
          add_dex: true,
          dex_max: 2,
          str_req: 0,
          stealth_disadvantage: false,
          phb_page: 145
        },
        {
          id: 6,
          equipment_id: 6,
          ac_bonus: 14,
          magic_mod: 0,
          magic_desc: "",
          is_light: false,
          is_medium: true,
          is_heavy: false,
          is_shield: false,
          add_dex: true,
          dex_max: 2,
          str_req: 0,
          stealth_disadvantage: true,
          phb_page: 145
        },
        {
          id: 7,
          equipment_id: 7,
          ac_bonus: 14,
          magic_mod: 0,
          magic_desc: "",
          is_light: false,
          is_medium: true,
          is_heavy: false,
          is_shield: false,
          add_dex: true,
          dex_max: 2,
          str_req: 0,
          stealth_disadvantage: false,
          phb_page: 145
        },
        {
          id: 8,
          equipment_id: 8,
          ac_bonus: 15,
          magic_mod: 0,
          magic_desc: "",
          is_light: false,
          is_medium: true,
          is_heavy: false,
          is_shield: false,
          add_dex: true,
          dex_max: 2,
          str_req: 0,
          stealth_disadvantage: true,
          phb_page: 145
        },
        {
          id: 9,
          equipment_id: 9,
          ac_bonus: 14,
          magic_mod: 0,
          magic_desc: "",
          is_light: false,
          is_medium: false,
          is_heavy: true,
          is_shield: false,
          add_dex: false,
          dex_max: 0,
          str_req: 0,
          stealth_disadvantage: true,
          phb_page: 145
        },
        {
          id: 10,
          equipment_id: 10,
          ac_bonus: 16,
          magic_mod: 0,
          magic_desc: "",
          is_light: false,
          is_medium: false,
          is_heavy: true,
          is_shield: false,
          add_dex: false,
          dex_max: 0,
          str_req: 13,
          stealth_disadvantage: true,
          phb_page: 145
        },
        {
          id: 11,
          equipment_id: 11,
          ac_bonus: 17,
          magic_mod: 0,
          magic_desc: "",
          is_light: false,
          is_medium: false,
          is_heavy: true,
          is_shield: false,
          add_dex: false,
          dex_max: 0,
          str_req: 15,
          stealth_disadvantage: true,
          phb_page: 145
        },
        {
          id: 12,
          equipment_id: 12,
          ac_bonus: 18,
          magic_mod: 0,
          magic_desc: "",
          is_light: false,
          is_medium: false,
          is_heavy: true,
          is_shield: false,
          add_dex: false,
          dex_max: 0,
          str_req: 15,
          stealth_disadvantage: true,
          phb_page: 145
        },
        {
          id: 13,
          equipment_id: 13,
          ac_bonus: 2,
          magic_mod: 0,
          magic_desc: "",
          is_light: false,
          is_medium: false,
          is_heavy: false,
          is_shield: true,
          add_dex: false,
          dex_max: 0,
          str_req: 0,
          stealth_disadvantage: false,
          phb_page: 145
        }
      ]);
    });
};
