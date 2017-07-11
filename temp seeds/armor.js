
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('armor').del()
    .then(function () {
      // Inserts seed entries
      return knex('armor').insert([
        {
          id: 1,
          equipment_id: 1,
          name: "",
          ac_bonus: 1,
          magic_mod: 0,
          magic_desc: "",
          is_light: true,
          is_medium: false,
          is_heavy: false,
          is_shield: false,
          add_dex: true,
          str_req: 1,
          stealth_disadvantage: false,
          phb_page: 159
        },
      ]);
    });
};
