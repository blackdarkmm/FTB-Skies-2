// priority: 991

ServerEvents.recipes((event) => {
	event
		.custom({
			type: "actuallyadditions:empowering",
			base: {
				item: "justdirethings:time_crystal_block"
			},
			color: 3492376,
			energy: 500000,
			modifiers: [
				{
					item: "irons_spellbooks:timeless_slurry"
				},
				{
					item: "powah:capacitor_nitro"
				},
				{
					item: "ftb:prismatic_xychorium"
				},
				{
					item: "tempad:chronon_battery"
				}
			],
			result: {
				count: 1,
				id: "ftb:time_prism"
			},
			time: 250
		})
		.id("ftb:time_prism");
});
