// priority: 967

ServerEvents.recipes((event) => {
	event.shapeless("powah:energy_cell_creative", [
		"powah:energy_cell_nitro",
		"ftb:creative_ascension"
	])


	//Energized Steel Block
	event
		.custom({
			type: "powah:energizing",
			energy: 90000,
			ingredients: [
				{
					tag: "c:storage_blocks/iron"
				},
				{
					tag: "c:storage_blocks/gold"
				}
			],
			result: {
				count: 2,
				id: "powah:energized_steel_block"
			}
		})
		.id("ftb:energized_steel_block");

	//Blazing Crystal Block
	event.custom({
		type: "powah:energizing",
		energy: 120000,
		ingredients: [
			{
				tag: "c:storage_blocks/blaze_gold"
			},
		],
		result: {
			count: 1,
			id: "powah:blazing_crystal_block"
		}
	}).id("ftb:blazing_crystal_block_with_blaze_gold");

	//Niotic Crystal Block
	event
		.custom({
			type: "powah:energizing",
			energy: 2700000,
			ingredients: [
				{
					tag: "c:storage_blocks/diamond"
				}
			],
			result: {
				count: 1,
				id: "powah:niotic_crystal_block"
			}
		})
		.id("ftb:niotic_crystal_block");

	//Spirited Cystal Block
	event
		.custom({
			type: "powah:energizing",
			energy: 9000000,
			ingredients: [
				{
					tag: "c:storage_blocks/emerald"
				}
			],
			result: {
				count: 1,
				id: "powah:spirited_crystal_block"
			}
		})
		.id("ftb:spirited_crystal_block");


});
