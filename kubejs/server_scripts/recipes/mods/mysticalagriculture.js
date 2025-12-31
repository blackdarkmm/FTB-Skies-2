// priority: 973

ServerEvents.recipes((event) => {
	//Creative Essence
	event
		.custom({
			type: "mysticalagriculture:awakening",
			essences: [
				{
					id: "mysticalagradditions:insanium_ingot",
					count: 40
				},
				{
					id: "mysticalagradditions:nether_star_shard",
					count: 40
				},
				{
					id: "mysticalagradditions:dragon_egg_chunk",
					count: 40
				},
				{
					id: "mysticalagriculture:mystical_fertilizer",
					count: 40
				}
			],
			input: {
				item: "mysticalagriculture:awakened_supremium_ingot_block"
			},
			ingredients: [
				{
					item: "mysticalagriculture:cognizant_dust"
				},
				{
					item: "mysticalagriculture:cognizant_dust"
				},
				{
					item: "mysticalagriculture:cognizant_dust"
				},
				{
					item: "mysticalagriculture:cognizant_dust"
				}
			],
			result: {
				id: "mysticalagradditions:creative_essence"
			}
		})
		.id("ftb:creative_essence");

	//Lilypad of Fertility
	event
		.custom({
			type: "mysticalagriculture:infusion",
			input: {
				item: "minecraft:lily_pad"
			},
			ingredients: [
				{
					item: "mysticalagriculture:tertium_essence"
				},
				{
					item: "reliquary:fertile_essence"
				},
				{
					item: "mysticalagriculture:tertium_essence"
				},
				{
					item: "reliquary:fertile_essence"
				},
				{
					item: "mysticalagriculture:tertium_essence"
				},
				{
					item: "reliquary:fertile_essence"
				},
				{
					item: "mysticalagriculture:tertium_essence"
				},
				{
					item: "reliquary:fertile_essence"
				}
			],
			result: {
				id: "reliquary:fertile_lily_pad"
			}
		})
		.id("ftb:lilypad_of_fertility");

	//Essence Recipes ============================================

	//Acacia
	event
		.shaped(
			Item.of("minecraft:acacia_log", 21), // arg 1: output
			["EE ", " E ", "  E"],
			{
				E: "mysticalagriculture:wood_essence"
			}
		)
		.id("ftb:essence/minecraft/acacia_log");

	//Jungle
	event
		.shaped(
			Item.of("minecraft:jungle_log", 21), // arg 1: output
			[" E ", "EE ", "E  "],
			{
				E: "mysticalagriculture:wood_essence"
			}
		)
		.id("ftb:essence/minecraft/jungle_log");

	//Bamboo
	event
		.shaped(
			Item.of("minecraft:bamboo", 21), // arg 1: output
			["E E", " E ", "E  "],
			{
				E: "mysticalagriculture:nature_essence"
			}
		)
		.id("ftb:essence/minecraft/bamboo");

	//Seagrass
	event.shaped(
		Item.of("minecraft:seagrass", 21),
		["EEE", " W ", "EEE"],
		{
			E: "mysticalagriculture:nature_essence",
			W: "mysticalagriculture:water_essence",
		}
	).id("ftb:essence/minecraft/seagrass");

	//Glow Lichen
	event.shapeless(
    Item.of('minecraft:glow_lichen', 4),
    [
      'minecraft:glowstone_dust',
      'mysticalagriculture:nature_essence'
    ]
  ).id('ftb:essence/minecraft/glow_lichen');

	// ==============================================================================================

	//Prosperity Ore Enriching Recipe
	event
		.custom({
			type: "mekanism:enriching",
			input: { count: 1, tag: "c:ores/prosperity" },
			output: { count: 12, id: "mysticalagriculture:prosperity_shard" }
		})
		.id("ftb:processing/enriching/prosperity");

	//Making All Metal Essences give the Raw Ore.
	const mystical_raw_recipes = [
		{ id: "mysticalagriculture:essence/minecraft/iron_ingot", ingot: "minecraft:iron_ingot", raw: "minecraft:raw_iron" },
		{ id: "mysticalagriculture:essence/minecraft/copper_ingot", ingot: "minecraft:copper_ingot", raw: "minecraft:raw_copper" },
		{ id: "mysticalagriculture:essence/minecraft/gold_ingot", ingot: "minecraft:gold_ingot", raw: "minecraft:raw_gold" },
		{ id: "mysticalagriculture:essence/mekanism/osmium_ingot", ingot: "mekanism:ingot_osmium", raw: "mekanism:raw_osmium" },

		//Had to readd these since for some reason I could not figure the exact ingot used in the original recipe to be replaced. (also tried using a tag and it didn't work)
		{ readd: true, id: "ftb/mysticalagriculture/essence/common/aluminum_ingot", ingot: "ftbmaterials:aluminum_ingot", amount: 4, raw: "ftbmaterials:aluminum_raw_ore" },
		{ readd: true, id: "ftb/mysticalagriculture/essence/common/tin_ingot", ingot: "ftbmaterials:tin_ingot", amount: 4, raw: "ftbmaterials:tin_raw_ore" },
		{ readd: true, id: "ftb/mysticalagriculture/essence/common/zinc_ingot", ingot: "ftbmaterials:zinc_ingot", amount: 4, raw: "ftbmaterials:zinc_raw_ore" },
		{ readd: true, id: "ftb:mysticalagriculture/essence/common/silver_ingot", ingot: "ftbmaterials:silver_ingot", amount: 4, raw: "ftbmaterials:silver_raw_ore" },
		{ readd: true, id: "ftb:mysticalagriculture/essence/common/lead_ingot", ingot: "ftbmaterials:lead_ingot", amount: 4, raw: "ftbmaterials:lead_raw_ore" },
		{ readd: true, id: "ftb:mysticalagriculture/essence/common/nickel_ingot", ingot: "ftbmaterials:nickel_ingot", amount: 4, raw: "ftbmaterials:nickel_raw_ore" },
		{ readd: true, id: "ftb:mysticalagriculture/essence/common/uranium_ingot", ingot: "ftbmaterials:uranium_ingot", amount: 2, raw: "ftbmaterials:uranium_raw_ore" },
		{ readd: true, id: "ftb:mysticalagriculture/essence/common/platinum_ingot", ingot: "ftbmaterials:platinum_ingot", amount: 2, raw: "ftbmaterials:platinum_raw_ore" }
	];

	mystical_raw_recipes.forEach(recipe => {
		if (recipe.readd == true) {
			event.shaped(
				Item.of(recipe.raw, recipe.amount),
				["EEE", "E E", "EEE"],
				{
					E: `mysticalagriculture:${recipe.ingot.split(":")[1].split("_")[0]}_essence`,
				}
			).id(`${recipe.id}`);
		} else {
			event.replaceOutput(
				{ id: recipe.id }, 
					recipe.ingot,
					recipe.raw
			);
		}

	});
		
  event.shapeless(
    Item.of('mysticalagriculture:soulium_dust', 8),
    [
      'irons_spellbooks:blood_vial',
      'supplementaries:ash',
      'ftbstuff:compressed_dust'
    ]
  ).id('ftb:mysticalagriculture/soulium_dust_from_blood_vial');

  	//Removing Enchanter Recipes ==================================================================
	event.remove({ id: "mysticalagriculture:enchanter" })
  	event.remove({ type: "mysticalagriculture:enchanter" })
	// ============================================================================================

  //Adding a Recipe for the Custom Entro Seed
  event.shaped(Item.of("extendedae:entro_crystal", 6), 
  ["EEE", "E E", "EEE"], {
      E: "mysticalagriculture:entro_crystal_essence"
  }).id("ftb:mysticalagriculture/essence/extended_ae2/entro_crystal");

  event.shaped(Item.of("extendedae:entro_dust", 3), 
  ["EEE"], {
      E: "mysticalagriculture:entro_crystal_essence"
  }).id("ftb:mysticalagriculture/essence/extended_ae2/entro_crystal_dust");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        tag: "c:gems/entro",
      },
      {
        item:"mysticalagriculture:supremium_essence",
      },
      {
        tag: "c:gems/entro",
      },
      {
        item: "mysticalagriculture:supremium_essence",
      },
      {
        tag: "c:gems/entro",
      },
      {
        item: "mysticalagriculture:supremium_essence",
      },
      {
        tag: "c:gems/entro",
      },
      {
        item: "mysticalagriculture:supremium_essence",
      },
    ],
    result: {
      id: "mysticalagriculture:entro_crystal_seeds",
    },
  }).id("ftb:mysticalagriculture/infusion/seed/extended_ae2/entro_crystal");

  //Adding a Recipe for the Custom Quartz Enriched Copper
  event.shaped(Item.of("refinedstorage:quartz_enriched_copper", 8), 
  ["EEE", "E E", "EEE"], {
      E: "mysticalagriculture:quartz_enriched_copper_essence"
  }).id("ftb:mysticalagriculture/essence/refined_storage/quartz_enriched_copper");

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base",
    },
    ingredients: [
      {
        item: "refinedstorage:quartz_enriched_copper",
      },
      {
        item:"mysticalagriculture:tertium_essence",
      },
      {
        item: "refinedstorage:quartz_enriched_copper",
      },
      {
        item: "mysticalagriculture:tertium_essence",
      },
      {
        item: "refinedstorage:quartz_enriched_copper",
      },
      {
        item: "mysticalagriculture:tertium_essence",
      },
      {
        item: "refinedstorage:quartz_enriched_copper",
      },
      {
        item: "mysticalagriculture:tertium_essence",
      },
    ],
    result: {
      id: "mysticalagriculture:quartz_enriched_copper_seeds",
    },
  }).id("ftb:mysticalagriculture/infusion/seed/refined_storage/quartz_enriched_copper");

//   event.custom({
//     type: "mysticalagriculture:infusion",
//     input: {
//       item: "mysticalagriculture:prosperity_seed_base",
//     },
//     ingredients: [
//       {
//         tag: "modern_industrialization:rubber_sheet",
//       },
//       {
//         item:"mysticalagriculture:prudentium_essence",
//       },
//       {
//         tag: "modern_industrialization:rubber_sheet",
//       },
//       {
//         item: "mysticalagriculture:prudentium_essence",
//       },
//       {
//         tag: "modern_industrialization:rubber_sheet",
//       },
//       {
//         item: "mysticalagriculture:prudentium_essence",
//       },
//       {
//         tag: "modern_industrialization:rubber_sheet",
//       },
//       {
//         item: "mysticalagriculture:prudentium_essence",
//       },
//     ],
//     result: {
//       id: "mysticalagriculture:rubber_seeds",
//     },
//   }).id("ftb:mysticalagriculture/infusion/seed/rubber");

//Adding a Recipe for Mystical Enlightment using the Ender IO's Enchanter
event.custom({
	type: "enderio:enchanting",
	cost_multiplier: 2,
	enchantment: "mysticalagriculture:mystical_enlightenment",
	input: {
	  "count": 4,
	  "item": "mysticalagradditions:insanium_block"
	}
}).id("ftb:enderio/enchanting/mystical_agriculture/mystical_enlightment")

});
