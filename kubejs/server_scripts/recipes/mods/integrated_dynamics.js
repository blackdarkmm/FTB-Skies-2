// priority: 978

ServerEvents.recipes((event) => {
	event
		.custom({
			type: "integrateddynamics:drying_basin",
			input_fluid: {
				id: "xycraft_machines:resin",
				amount: 1000
			},
			duration: 100,
			output_item: {
				id: "xycraft_machines:resin_block"
			}
		})
		.id("ftb:drying_basin_resin_block");

	event
		.custom({
			type: "integrateddynamics:mechanical_drying_basin",
			input_fluid: {
				id: "xycraft_machines:resin",
				amount: 1000
			},
			duration: 15,
			output_item: {
				id: "xycraft_machines:resin_block"
			}
		})
		.id("ftb:mechanical_drying_basin_resin_block");

	event
		.custom({
			type: "integrateddynamics:mechanical_squeezer",
			input_item: {
				item: "mekanism:pellet_antimatter"
			},
			output_fluid: {
				id: "modern_industrialization:uu_matter",
				amount: 500
			},
			duration: 25
		})
		.id("ftb:mechanical_squeezer_antimatter");

});
