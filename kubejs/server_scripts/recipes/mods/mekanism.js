// priority: 976

ServerEvents.recipes((event) => {
	//MI Forge hammer additions
	event
		.custom({
			type: "modern_industrialization:forge_hammer",
			ingredient: {
				tag: "minecraft:logs"
			},
			result: {
				count: 1,
				id: "ftbmaterials:saw_dust"
			}
		})
		.id("ftb:forge_hammer_logs");

	//MI Coke Dust Recipes
	event
		.custom({
			type: "mekanism:crushing",
			input: { count: 1, item: "ftbmaterials:coal_coke_gem" },
			output: { count: 1, id: "ftbmaterials:coal_coke_dust" }
		})
		.id("ftb:coke_crushing");

	event
		.custom({
			type: "mekanism:crushing",
			input: { count: 1, item: "ftbmaterials:coal_coke_block" },
			output: { count: 9, id: "ftbmaterials:coal_coke_dust" }
		})
		.id("ftb:coke_block_crushing");

	//Enriched carbon from geode
	event
		.custom({
			type: "mekanism:enriching",
			input: { count: 1, tag: "geore:geore_shards/coal" },
			output: { count: 1, id: "mekanism:enriched_carbon" }
		})
		.id("ftb:enriched_carbon_geode");

	//certus
	event
		.custom({
			type: "mekanism:enriching",
			input: { count: 1, tag: "c:gems/certus_quartz" },
			output: { count: 1, id: "ae2:charged_certus_quartz_crystal" }
		})
		.id("ftb:prosperity_shard");

	//additional
	Ingredient.of("#minecraft:leaves").stacks.forEach((item) => {
		var itemName = item.id.replace(":", "_");
		event
			.custom({
				type: "mekanism:crushing",
				input: { count: 1, item: item.id },
				output: { count: 2, id: "mekanism:bio_fuel" }
			})
			.id(`ftb:biocrushing_${itemName}`);
	});

	// Biofuel
	event
		.custom({
			type: "mekanism:crushing",
			input: { count: 1, item: "xycraft_machines:resin_ball" },
			output: { count: 9, id: "mekanism:bio_fuel" }
		})
		.id(`ftb:biocrushing_resin`);

	//Fixing Meka's Netherite Dust being a valid output in certain recipes.
	let netherite_output_recipes = [
		"mekanism:processing/netherite/ingot_to_dust",
		"mekanism:processing/netherite/scrap_to_dust"
	];

	netherite_output_recipes.forEach((recipe) => {
		event.replaceOutput(
			{ id: recipe },
			"mekanism:dust_netherite",
			"ftbmaterials:netherite_dust"
		);
	});

	//Fixing Meka's Fluorite Dust being a valid output in certain recipes.
	event
		.stonecutting("ftbmaterials:fluorite_stone_ore", "mekanism:fluorite_ore")
		.id("ftb:fluorite_ore_conversion");

	let fluorite_output_recipes = [
		"mekanism:processing/fluorite/to_ore",
		"modern_industrialization:quarry/titanium"
	];

	fluorite_output_recipes.forEach((recipe) => {
		event.replaceOutput(
			{ id: recipe },
			"mekanism:fluorite_ore",
			"ftbmaterials:fluorite_stone_ore"
		);
	});

	//Adding a Dissolution Chamber Recipe to Convert Plastic Types.
	event
		.custom({
			type: "industrialforegoing:dissolution_chamber",
			input: [
				{
					item: "mekanism:hdpe_sheet"
				},
				{
					item: "mekanism:hdpe_sheet"
				},
				{
					item: "mekanism:hdpe_sheet"
				},
				{
					item: "mekanism:hdpe_sheet"
				},
				{
					item: "mekanism:hdpe_sheet"
				},
				{
					item: "mekanism:hdpe_sheet"
				},
				{
					item: "mekanism:hdpe_sheet"
				},
				{
					item: "mekanism:hdpe_sheet"
				}
			],
			inputFluid: {
				amount: 750,
				fluid: "industrialforegoing:latex"
			},
			output: {
				count: 9,
				id: "industrialforegoing:plastic"
			},
			processingTime: 400
		})
		.id("ftb:industrialforegoing/dissolution_chamber/hdpe_to_plastic");

		//Fixing Frost Walker Unit Recipe
		event.replaceInput(
			{ id: "mekanism:module_frost_walker_unit" },
			"mekanism:hydrogen_bucket",
			"modern_industrialization:hydrogen_bucket"
		);

});
