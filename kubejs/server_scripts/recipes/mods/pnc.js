// priority: 968

ServerEvents.recipes((event) => {
	event
		.custom({
			type: "pneumaticcraft:pressure_chamber",
			inputs: [
				{
					count: 16,
					tag: "c:dusts/entro"
				},
				{
					count: 2,
					tag: "c:dusts/tungsten"
				},
				{
					count: 1,
					item: "mekanismadditions:obsidian_tnt"
				}
			],
			pressure: 4.0,
			results: [
				{
					count: 2,
					id: "ftbmaterials:tungsten_ingot"
				}
			]
		})
		.id("ftb:tungsten_ingot");

	event
		.custom({
			type: "pneumaticcraft:pressure_chamber",
			inputs: [
				{
					count: 8,
					tag: "c:ingots/end_steel"
				},
				{
					count: 2,
					tag: "c:dusts/grains_of_the_end"
				},
				{
					count: 1,
					item: "enderio:octadic_capacitor"
				},
				{
					count: 1,
					item: "enderio:sentient_ender"
				},
				{
					count: 64,
					item: "enderio:grains_of_infinity"
				},
				{
					count: 1,
					item: "actuallyadditions:phantom_booster"
				}
			],
			pressure: 4.0,
			results: [
				{
					count: 1,
					id: "ftb:ender_transmitter"
				}
			]
		})
		.id("ftb:ender_transmitter");

	event
		.custom({
			type: "pneumaticcraft:pressure_chamber",
			inputs: [
				{
					count: 32,
					tag: "rftoolsbase:shards"
				},
				{
					count: 16,
					item: "stevescarts:component_enhanced_galgadorian_metal"
				},
				{
					count: 4,
					item: "enderio:prescient_powder"
				},
				{
					count: 1,
					item: "apothic_enchanting:ender_library"
				},
				{
					count: 1,
					item: "occultism:dimensional_matrix"
				}
			],
			pressure: 3.5,
			results: [
				{
					count: 1,
					id: "ftb:dimensional_memory_fragment"
				}
			]
		})
		.id("ftb:dimensional_memory_fragment");

	event.shapeless("pneumaticcraft:creative_compressed_iron_block", [
		"pneumaticcraft:vortex_tube",
		"ftb:creative_ascension"
	])
});
