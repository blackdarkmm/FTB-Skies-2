// priority: 979

ServerEvents.recipes((event) => {


	event
		.custom({
			type: "industrialforegoing:dissolution_chamber",
			input: [
				{
					item: "apotheosis:gem_dust"
				},
				{
					item: "malum:cursed_sapball"
				},
				{
					item: "apotheosis:gem_dust"
				},
				{
					item: "industrialforegoing:pink_slime"
				},
				{
					item: "industrialforegoing:pink_slime"
				},
				{
					item: "powah:crystal_spirited"
				},
				{
					item: "minecraft:sculk"
				},
				{
					item: "powah:crystal_spirited"
				}
			],
			inputFluid: {
				amount: 1000,
				fluid: "oritech:still_strange_matter"
			},
			output: {
				count: 1,
				id: "ftb:dissolved_potential"
			},
			processingTime: 2500
		})
		.id("ftb:dissolved_potential");

	event
		.custom({
			type: "industrialforegoing:dissolution_chamber",
			input: [
				{
					item: "xycraft_world:xychorium_gem_blue"
				},
				{
					item: "xycraft_world:xychorium_gem_green"
				},
				{
					item: "xycraft_world:xychorium_gem_red"
				},
				{
					item: "xycraft_world:xychorium_gem_dark"
				},
				{
					item: "xycraft_world:xychorium_gem_light"
				},
				{
					item: "actuallyadditions:empowered_diamatine_crystal"
				},
				{
					item: "actuallyadditions:empowered_diamatine_crystal"
				},
				{
					item: "minecraft:nether_star"
				}
			],
			inputFluid: {
				amount: 1000,
				fluid: "justdirethings:polymorphic_fluid_source"
			},
			output: {
				count: 1,
				id: "ftb:prismatic_xychorium"
			},
			processingTime: 200
		})
		.id("ftb:prismatic_xychorium");
});
