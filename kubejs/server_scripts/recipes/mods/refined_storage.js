// priority: 956

ServerEvents.recipes((event) => {
  	//Creative Items
  	event.shapeless("refinedstorage:creative_controller", [
		"refinedstorage:controller",
    	"ftb:creative_ascension"
	])

	//Making Better Quartz Enriched Alloying Recipes ==============================================
	event.shaped("refinedstorage:machine_casing", [
		"QQQ",
		"SMS",
		"QQQ",
	], {
		Q: "refinedstorage:quartz_enriched_iron",
		S: "megacells:sky_steel_ingot",
		M: "industrialforegoing:machine_frame_pity",
	} ).id("ftb:refinedstorage/machine_casing")

	//Quartz Enriched Iron
	event
		.custom({
			type: "enderio:alloy_smelting",
			energy: 2000,
			experience: 0.3,
			inputs: [
				{
					count: 3,
					item: "minecraft:iron_ingot"
				},
				{
					count: 1,
					tag: "ae2:all_quartz"
				}
			],
			output: {
				count: 4,
				id: "refinedstorage:quartz_enriched_iron"
			}
		})
		.id("ftb:refinedstorage/enderio/alloying/quartz_enriched_iron");

	event
		.custom({
			type: "create:mixing",
			heat_requirement: "heated",
			ingredients: [
				{
					tag: "c:ingots/iron"
				},
				{
					tag: "c:ingots/iron"
				},
				{
					tag: "c:ingots/iron"
				},
				{
					tag: "ae2:all_quartz"
				}
			],
			results: [
				{
					count: 4,
					item: {
						id: "refinedstorage:quartz_enriched_iron"
					}
				}
			]
		})
		.id("ftb:refinedstorage/create/mixing/quartz_enriched_iron");

	event
		.custom({
			type: "extended_industrialization:alloy_smelter",
			eu: 4,
			duration: 200,
			item_inputs: [
				{
					tag: "ae2:all_quartz",
					amount: 1
				},
				{
					tag: "c:ingots/iron",
					amount: 3
				}
			],
			item_outputs: [
				{
					item: "refinedstorage:quartz_enriched_iron",
					amount: 4
				}
			]
		})
		.id(
			"ftb:refinedstorage/extended_industrialization/alloy_smelter/quartz_enriched_iron"
		);

	event
		.custom({
			type: "immersiveengineering:alloy",
			input0: {
				basePredicate: {
					tag: "c:ingots/iron"
				},
				count: 3
			},
			input1: {
				tag: "ae2:all_quartz"
			},
			result: {
				basePredicate: {
					item: "refinedstorage:quartz_enriched_iron"
				},
				count: 4
			}
		})
		.id("ftb:refinedstorage/immersiveengineering/alloy/quartz_enriched_iron");

	event
		.custom({
			type: "immersiveengineering:arc_furnace",
			additives: [
				{
					tag: "ae2:all_quartz"
				}
			],
			energy: 51200,
			input: {
				basePredicate: {
					tag: "c:ingots/iron"
				},
				count: 3
			},
			results: [
				{
					basePredicate: {
						item: "refinedstorage:quartz_enriched_iron"
					},
					count: 4
				}
			],
			time: 100
		})
		.id(
			"ftb:refinedstorage/immersiveengineering/arc_furnace/quartz_enriched_iron"
		);

	//Quartz Enriched Copper
	event
		.custom({
			type: "enderio:alloy_smelting",
			energy: 2000,
			experience: 0.3,
			inputs: [
				{
					count: 3,
					item: "minecraft:copper_ingot"
				},
				{
					count: 1,
					tag: "ae2:all_quartz"
				}
			],
			output: {
				count: 4,
				id: "refinedstorage:quartz_enriched_copper"
			}
		})
		.id("ftb:refinedstorage/enderio/alloying/quartz_enriched_copper");

	event
		.custom({
			type: "create:mixing",
			heat_requirement: "heated",
			ingredients: [
				{
					tag: "c:ingots/copper"
				},
				{
					tag: "c:ingots/copper"
				},
				{
					tag: "c:ingots/copper"
				},
				{
					tag: "ae2:all_quartz"
				}
			],
			results: [
				{
					count: 4,
					item: {
						id: "refinedstorage:quartz_enriched_copper"
					}
				}
			]
		})
		.id("ftb:refinedstorage/create/mixing/quartz_enriched_copper");

	event
		.custom({
			type: "extended_industrialization:alloy_smelter",
			eu: 4,
			duration: 200,
			item_inputs: [
				{
					tag: "ae2:all_quartz",
					amount: 1
				},
				{
					tag: "c:ingots/copper",
					amount: 3
				}
			],
			item_outputs: [
				{
					item: "refinedstorage:quartz_enriched_copper",
					amount: 4
				}
			]
		})
		.id(
			"ftb:refinedstorage/extended_industrialization/alloy_smelter/quartz_enriched_copper"
		);

	event
		.custom({
			type: "immersiveengineering:alloy",
			input0: {
				basePredicate: {
					tag: "c:ingots/copper"
				},
				count: 3
			},
			input1: {
				tag: "ae2:all_quartz"
			},
			result: {
				basePredicate: {
					item: "refinedstorage:quartz_enriched_copper"
				},
				count: 4
			}
		})
		.id("ftb:refinedstorage/immersiveengineering/alloy/quartz_enriched_copper");

	event
		.custom({
			type: "immersiveengineering:arc_furnace",
			additives: [
				{
					tag: "ae2:all_quartz"
				}
			],
			energy: 51200,
			input: {
				basePredicate: {
					tag: "c:ingots/copper"
				},
				count: 3
			},
			results: [
				{
					basePredicate: {
						item: "refinedstorage:quartz_enriched_copper"
					},
					count: 4
				}
			],
			time: 100
		})
		.id(
			"ftb:refinedstorage/immersiveengineering/arc_furnace/quartz_enriched_copper"
		);
});
