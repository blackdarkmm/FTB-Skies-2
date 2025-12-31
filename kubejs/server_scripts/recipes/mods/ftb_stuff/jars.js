/* Temperatures: "chilled", "normal" (Default), "hot", "superheated" */

//Moved All Recipe Additions to their own Json Files inside datapacks/ftb/ftbstuff/recipe/jar/.

// const jarRecipes = [
// 	{
// 		inputItems: [
// 			["minecraft:sand", 1],
// 			["immersiveengineering:fertilizer", 1]
// 		],
// 		outputItems: [["utilitarian:snad", 1]],
// 		recipeName: "snad"
// 	},
// 	{
// 		inputItems: [
// 			["minecraft:red_sand", 1],
// 			["immersiveengineering:fertilizer", 1]
// 		],
// 		outputItems: [["utilitarian:red_snad", 1]],
// 		recipeName: "redsnad"
// 	},

// 	{
// 		inputItems: [["#minecraft:saplings", 8]],
// 		outputItems: [["minecraft:dirt"]],
// 		recipeName: "dirt_saplings"
// 	},
// 	{
// 		inputItems: [
// 			["minecraft:sand", 8],
// 			["enderio:grains_of_infinity", 1]
// 		],
// 		outputItems: [["minecraft:suspicious_sand", 8]],
// 		recipeName: "suspicious_sand"
// 	},
// 	{
// 		inputItems: [
// 			["minecraft:gravel", 8],
// 			["enderio:grains_of_infinity", 1]
// 		],
// 		outputItems: [["minecraft:suspicious_gravel", 8]],
// 		recipeName: "suspicious_gravel"
// 	},
// 	{
// 		inputItems: [["#c:seeds", 8]],
// 		outputItems: [["minecraft:dirt"]],
// 		recipeName: "dirt_seeds"
// 	},
// 	{
// 		inputItems: [["#minecraft:saplings", 64]],
// 		outputItems: [["minecraft:dirt", 8]],
// 		recipeName: "dirt_saplings_8"
// 	},
// 	{
// 		inputItems: [["#c:seeds", 64]],
// 		outputItems: [["minecraft:dirt", 8]],
// 		recipeName: "dirt_seed_8"
// 	},
// 	{
// 		inputItems: [["#minecraft:sand"], ["#c:gravels"]],
// 		inputFluids: [["minecraft:water"]],
// 		outputItems: [["minecraft:clay_ball", 32]],
// 		recipeName: "clay"
// 	},
// 	{
// 		inputFluids: [["minecraft:water"]],
// 		outputItems: [["minecraft:ice"]],
// 		temperature: "chilled",
// 		recipeName: "ice"
// 	},
// 	{
// 		inputItems: [["#c:cobblestones"]],
// 		outputFluids: [["minecraft:lava"]],
// 		temperature: "hot",
// 		time: 600,
// 		recipeName: "cobblestone"
// 	},
// 	{
// 		inputFluids: [["minecraft:lava"]],
// 		outputItems: [["minecraft:obsidian"]],
// 		temperature: "chilled",
// 		time: 200,
// 		recipeName: "obsidan_from_lava"
// 	},

// 	{
// 		inputItems: [["mysticalagriculture:prosperity_shard", 4], ["#c:seeds"]],
// 		outputItems: [["mysticalagriculture:prosperity_seed_base"]],
// 		recipeName: "prosperity_shard"
// 	},
// 	{
// 		inputItems: [
// 			["mysticalagriculture:prosperity_shard", 64],
// 			["#c:seeds", 16]
// 		],
// 		outputItems: [["mysticalagriculture:prosperity_seed_base", 16]],
// 		recipeName: "prosperity_shard_16"
// 	},
// 	{
// 		inputItems: [["#c:cobblestones", 8], ["mysticalagriculture:soulium_dust"]],
// 		outputItems: [["mysticalagriculture:soulstone_cobble", 9]],

// 		recipeName: "soulstone_cobblestone"
// 	},
// 	{
// 		inputItems: [["#c:ingots/iron"], ["#minecraft:coals"]],
// 		outputItems: [["ftbstuff:cast_iron_ingot"]],
// 		temperature: "hot",
// 		recipeName: "castiron"
// 	},
// 	{
// 		inputItems: [["#c:ingots/iron", 16], ["#minecraft:coals"]],
// 		outputItems: [["ftbstuff:cast_iron_ingot", 16]],
// 		temperature: "superheated",
// 		recipeName: "castiron_16"
// 	},
// 	{
// 		inputItems: [["#c:ender_pearls",4]],
// 		outputFluids: [["productivemetalworks:molten_ender",100]],
// 		temperature: "superheated",
// 		time: 200,
// 		recipeName: "molten_ender"
// 	},	
// 	{
// 		inputItems: [["#geore:geore_shards/ancient_debris", 1], ["enderio:grains_of_infinity"]],
// 		outputItems: [["minecraft:netherite_scrap", 1]],
// 		temperature: "superheated",
// 		recipeName: "ancient_debris"
// 	},	
// 	{
// 		inputFluids: [["minecraft:water", 125]],
// 		outputItems: [["ftbmaterials:salt_dust"]],
// 		temperature: "hot",
// 		recipeName: "salt"
// 	},
// 	{
// 		inputFluids: [["minecraft:water", 1000]],
// 		outputItems: [["ftbmaterials:salt_dust",9]],
// 		temperature: "superheated",
// 		recipeName: "salt_superheated"
// 	},	
// 	{
// 		inputFluids: [["minecraft:water", 500]],
// 		outputItems: [["ftbmaterials:salt_block"]],
// 		temperature: "hot",
// 		recipeName: "salt_block"
// 	},
// 	{
// 		inputItems: [
// 			["ftbmaterials:copper_dust", 3],
// 			["ftbmaterials:tin_dust", 1]
// 		],
// 		time: 20,
// 		outputItems: [["ftbmaterials:bronze_dust", 2]],
// 		recipeName: "crude_bronze"
// 	},
// 		{
// 		inputItems: [
// 			["ftbmaterials:iron_dust", 2],
// 			["ftbmaterials:nickel_dust", 1]
// 		],
// 		time: 20,
// 		outputItems: [["ftbmaterials:invar_dust", 1]],
// 		recipeName: "crude_invar"
// 	},
// 	{
// 		inputItems: [["#c:dusts/blaze"]],
// 		outputFluids: [["productivemetalworks:molten_blaze", 100]],
// 		temperature: "superheated",
// 		recipeName: "blazing_blood"
// 	},
// 	{
// 		inputItems: [["#c:rods/blaze"]],
// 		outputFluids: [["productivemetalworks:molten_blaze", 400]],
// 		temperature: "superheated",
// 		recipeName: "blazing_blood_1"
// 	}
// ];

// ServerEvents.recipes((event) => {
// 	// jarRecipes.forEach((recipe) => {
// 	// 	event
// 	// 		.custom({
// 	// 			type: "ftbstuff:jar",
// 	// 			input_fluids: recipe.inputFluids
// 	// 				? recipe.inputFluids.map(({fluid, amount}) => ({
// 	// 						fluid: fluid,
// 	// 						amount: amount !== undefined ? amount : 1000
// 	// 				  }))
// 	// 				: [],
// 	// 			input_items: recipe.inputItems
// 	// 				? recipe.inputItems.map(({item, count}) =>
// 	// 						item && item.startsWith("#")
// 	// 							? { tag: item.slice(1), count: count !== undefined ? count : 1 }
// 	// 							: { item: item, count: count !== undefined ? count : 1 }
// 	// 				  )
// 	// 				: [],
// 	// 			output_fluids: recipe.outputFluids
// 	// 				? recipe.outputFluids.map(({fluid, amount}) => ({
// 	// 						id: fluid,
// 	// 						amount: amount !== undefined ? amount : 1000
// 	// 				  }))
// 	// 				: [],
// 	// 			output_items: recipe.outputItems
// 	// 				? recipe.outputItems.map(({id, count}) => ({
// 	// 						id: id,
// 	// 						count: count !== undefined ? count : 1
// 	// 				  }))
// 	// 				: [],
// 	// 			temperature:
// 	// 				recipe.temperature !== undefined ? recipe.temperature : "normal",
// 	// 			time: recipe.time !== undefined ? recipe.time : 200
// 	// 		})
// 	// 		.id(`ftbstuff:jars/${recipe.recipeName}`);
// 	// });
// });

//Temp Sources ====================================================================================

let temp_sources = [
	//Chill
	{ id: "roots:aqueous_soil", temperature: "chilled", efficiency: 1.25 },
	{
		blockstate: "minecraft:powder_snow",
		id: "minecraft:powder_snow_bucket",
		temperature: "chilled",
		efficiency: 1.5
	},

	//Hot
	{ id: "irons_spellbooks:brazier", temperature: "hot", efficiency: 0.6 },
	{ id: "roots:magmatic_soil", temperature: "hot", efficiency: 1.25 },
	{ id: "powah:blazing_crystal_block", temperature: "hot", efficiency: 2.8 },
	{
		blockstate: "supplementaries:blaze_rod",
		id: "minecraft:blaze_rod",
		temperature: "hot",
		efficiency: 2.0
	},
	{
		blockstate: "enderio:fire_water[level=0]",
		id: "enderio:fire_water_bucket",
		temperature: "hot",
		efficiency: 2.5
	},

	//SupearHeated
	{
		id: "irons_spellbooks:brazier_soul",
		temperature: "superheated",
		efficiency: 0.6
	},
	{
		id: "justdirethings:coalblock_t3",
		temperature: "superheated",
		efficiency: 3.0
	},
	{
		id: "justdirethings:coalblock_t4",
		temperature: "superheated",
		efficiency: 4.0
	},
	{
		blockstate: "mekanism:superheated_sodium[level=0]",
		id: "mekanism:superheated_sodium_bucket",
		temperature: "superheated",
		efficiency: 5.0
	},
	{
		blockstate: "industrialforegoing:ether_gas[level=0]",
		id: "industrialforegoing:ether_gas_bucket",
		temperature: "superheated",
		efficiency: 5.0
	}
];

ServerEvents.recipes((event) => {
	temp_sources.forEach((source) => {
		if (!source.blockstate) {
			source.blockstate = source.id;
		}

		event
			.custom({
				type: "ftbstuff:temperature_source",
				blockstate: source.blockstate,
				display_item: {
					count: 1,
					id: source.id
				},
				efficiency: source.efficiency,
				temperature: source.temperature
			})
			.id(
				`ftb:ftbstuff/jar/temperature/${source.temperature}/${
					source.id.split(":")[1]
				}`
			);
	});
});

// ================================================================================================
