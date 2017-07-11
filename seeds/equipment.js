
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
          id: 13,
          name: 'Shield',
          is_weapon: false,
          is_armor: true,
          is_tool: false,
          weight: 6,
          price: 1000
        },
        {
          id: 14,
          name: 'Club',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 2,
          price: 10
        },
        {
          id: 15,
          name: 'Dagger',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 1,
          price: 200
        },
        {
          id: 16,
          name: 'Greatclub',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 10,
          price: 20
        },
        {
          id: 17,
          name: 'Handaxe',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 500
        },
        {
          id: 18,
          name: 'Javelin',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 2,
          price: 50
        },
        {
          id: 19,
          name: 'Light Hammer',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 2,
          price: 200
        },
        {
          id: 20,
          name: 'Mace',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 4,
          price: 500
        },
        {
          id: 21,
          name: 'Quarterstaff',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 4,
          price: 20
        },
        {
          id: 22,
          name: 'Sickle',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 2,
          price: 100
        },
        {
          id: 23,
          name: 'Spear',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 3,
          price: 100
        },
        {
          id: 24,
          name: 'Crossbow, light',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 5,
          price: 2500
        },
        {
          id: 25,
          name: 'Dart',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 0.25,
          price: 5
        },
        {
          id: 26,
          name: 'Shortbow',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 2,
          price: 2500
        },
        {
          id: 27,
          name: 'Sling',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 0,
          price: 10
        },
        {
          id: 28,
          name: 'Battleaxe',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 4,
          price: 1000
        },
        {
          id: 29,
          name: 'Flail',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 2,
          price: 1000
        },
        {
          id: 30,
          name: 'Glaive',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 6,
          price: 2000
        },
        {
          id: 31,
          name: 'Greataxe',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 7,
          price: 3000
        },
        {
          id: 32,
          name: 'Greatsword',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 6,
          price: 5000
        },
        {
          id: 33,
          name: 'Halberd',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 6,
          price: 2000
        },
        {
          id: 34,
          name: 'Lance',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 6,
          price: 1000
        },
        {
          id: 35,
          name: 'Longsword',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 3,
          price: 1500
        },
        {
          id: 36,
          name: 'Maul',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 10,
          price: 1000
        },
        {
          id: 37,
          name: 'Morningstar',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 4,
          price: 1500
        },
        {
          id: 38,
          name: 'Pike',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 18,
          price: 500
        },
        {
          id: 39,
          name: 'Rapier',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 2,
          price: 2500
        },
        {
          id: 40,
          name: 'Scimitar',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 3,
          price: 2500
        },
        {
          id: 41,
          name: 'Shortsword',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 2,
          price: 1000
        },
        {
          id: 42,
          name: 'Trident',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 4,
          price: 500
        },
        {
          id: 43,
          name: 'War Pick',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 2,
          price: 500
        },
        {
          id: 44,
          name: 'Warhammer',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 2,
          price: 1500
        },
        {
          id: 45,
          name: 'Whip',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 3,
          price: 200
        },
        {
          id: 46,
          name: 'Blowgun',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 1,
          price: 1000
        },
        {
          id: 47,
          name: 'Crossbow, hand',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 3,
          price: 7500
        },
        {
          id: 48,
          name: 'Crossbow, heavy',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 18,
          price: 5000
        },
        {
          id: 49,
          name: 'Longbow',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 2,
          price: 5000
        },
        {
          id: 50,
          name: 'Net',
          is_weapon: true,
          is_armor: false,
          is_tool: false,
          weight: 3,
          price: 100
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 8,
          price: 5000
        },
        {
          id: 52,
          name: "Brewer's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 9,
          price: 2000
        },
        {
          id: 53,
          name: "Calligrapher's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 5,
          price: 1000
        },
        {
          id: 54,
          name: "Carpenter's Tools",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 6,
          price: 800
        },
        {
          id: 55,
          name: "Cartographer's Tools",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 6,
          price: 1500
        },
        {
          id: 56,
          name: "Cobbler's Tools",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 5,
          price: 500
        },
        {
          id: 57,
          name: "Cook's Utensils",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 8,
          price: 100
        },
        {
          id: 58,
          name: "Glassblower's Tools",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 5,
          price: 3000
        },
        {
          id: 59,
          name: "Jeweler's Tools",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 2,
          price: 2500
        },
        {
          id: 60,
          name: "Leatherworker's Tools",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 5,
          price: 500
        },
        {
          id: 61,
          name: "Mason's Tools",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 8,
          price: 1000
        },
        {
          id: 62,
          name: "Painter's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 5,
          price: 1000
        },
        {
          id: 63,
          name: "Potter's Tools",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 3,
          price: 1000
        },
        {
          id: 64,
          name: "Smith's Tools",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 8,
          price: 2000
        },
        {
          id: 65,
          name: "Tinker's Tools",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 10,
          price: 5000
        },
        {
          id: 66,
          name: "Weaver's Tools",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 5,
          price: 100
        },
        {
          id: 67,
          name: "Woodcarver's Tools",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 5,
          price: 100
        },
        {
          id: 68,
          name: "Disguise Kit",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 3,
          price: 2500
        },
        {
          id: 69,
          name: "Forgery Kit",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 5,
          price: 1500
        },
        {
          id: 70,
          name: "Dice Set",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 0,
          price: 10
        },
        {
          id: 71,
          name: "Dragonchess Set",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 0.5,
          price: 100
        },
        {
          id: 72,
          name: "Playing Card Set",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 0,
          price: 50
        },
        {
          id: 73,
          name: "Three-Dragon Ante Set",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 0,
          price: 100
        },
        {
          id: 74,
          name: "Herbalism Kit",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 3,
          price: 500
        },
        {
          id: 75,
          name: "Bagpipes",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 6,
          price: 3000
        },
        {
          id: 76,
          name: "Drum",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 3,
          price: 600
        },
        {
          id: 77,
          name: "Dulcimer",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 10,
          price: 2500
        },
        {
          id: 78,
          name: "Flute",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 1,
          price: 200
        },
        {
          id: 79,
          name: "Lute",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 2,
          price: 3500
        },
        {
          id: 80,
          name: "Lyre",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 2,
          price: 3000
        },
        {
          id: 81,
          name: "Horn",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 2,
          price: 300
        },
        {
          id: 82,
          name: "Pan Flute",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 2,
          price: 1200
        },
        {
          id: 83,
          name: "Shawm",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 1,
          price: 200
        },
        {
          id: 84,
          name: "Viol",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 1,
          price: 3000
        },
        {
          id: 85,
          name: "Navigator's Tools",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 2,
          price: 2500
        },
        {
          id: 86,
          name: "Poisoner's Kit",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 2,
          price: 5000
        },
        {
          id: 87,
          name: "Theives' Tools",
          is_weapon: false,
          is_armor: false,
          is_tool: true,
          weight: 1,
          price: 2500
        },
        {
          id: 88,
          name: "Abacus",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 2,
          price: 200
        },
        {
          id: 89,
          name: "Acid (vial)",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 1,
          price: 2500
        },
        {
          id: 90,
          name: "Alchemist's Fire (flask)",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 1,
          price: 5000
        },
        {
          id: 91,
          name: "Arrow",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: .05,
          price: 5
        },
        {
          id: 92,
          name: "Blowgun Needle",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: .02,
          price: 2
        },
        {
          id: 93,
          name: "Crossbow Bolt",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: .075,
          price: 5
        },
        {
          id: 94,
          name: "Sling Bullet",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: .075,
          price: .2
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
        {
          id: 51,
          name: "Alchemist's Supplies",
          is_weapon: false,
          is_armor: false,
          is_tool: false,
          weight: 8,
          price: 5000
        },
      ]);
    });
};
