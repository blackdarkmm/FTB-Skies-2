// priority: 1002

Platform.mods.kubejs.name = "FTB Skies 2";
Platform.getInfo("ftb").name = "FTB Skies 2";

StartupEvents.registry("item", (event) => {
	const items = [
		{ id: "ender_apple", name: Text.translate("item.ftb.ender_apple") },
		{ id: "ultimate_singularity", name: Text.translate("item.ftb.ultimate_singularity") },
		{
			id: "music_disc",
			name: Text.translate("item.ftb.music_disc"),
			isDisc: true,
			sound: "ftb:blockvblock"
		},
		{ id: "skill_reset_magic", name: Text.translate("item.ftb.skill_reset_magic") },
		{ id: "skill_reset_melee", name: Text.translate("item.ftb.skill_reset_melee") },
		{ id: "skill_reset_ranged", name: Text.translate("item.ftb.skill_reset_ranged") },
		{ id: "skill_reset_athletics", name: Text.translate("item.ftb.skill_reset_athletics") },
		{ id: "skill_reset_mining", name: Text.translate("item.ftb.skill_reset_mining") },
		{ id: "skill_reset_defense", name: Text.translate("item.ftb.skill_reset_defense") },
		{ id: "elemental_arcanite", name: Text.translate("item.ftb.elemental_arcanite") },
		{
			id: "incomplete_elemental_arcanite",
			name: Text.translate("item.ftb.incomplete_elemental_arcanite")
		},
		{
			id: "incomplete_evolutionary_matter",
			name: Text.translate("item.ftb.incomplete_evolutionary_matter")
		},
		{
			id: "incomplete_infinitely_compressed_circuit_board",
			name: Text.translate("item.ftb.incomplete_infinitely_compressed_circuit_board")
		},
		{ id: "primal_essence", name: Text.translate("item.ftb.primal_essence") },
		{ id: "omega_dragon_egg", name: Text.translate("item.ftb.omega_dragon_egg") },
		{ id: "evolutionary_matter", name: Text.translate("item.ftb.evolutionary_matter") },
		{ id: "bio_neural_circuit", name: Text.translate("item.ftb.bio_neural_circuit") },
		{ id: "evolutionary_arcanum", name: Text.translate("item.ftb.evolutionary_arcanum") },
		{ id: "mekanized_super_computer", name: Text.translate("item.ftb.mekanized_super_computer") },
		{ id: "ender_transmitter", name: Text.translate("item.ftb.ender_transmitter") },
		{ id: "creative_ascension", name: Text.translate("item.ftb.creative_ascension") },
		{ id: "dissolved_potential", name: Text.translate("item.ftb.dissolved_potential") },
		{ id: "realized_transcendence", name: Text.translate("item.ftb.realized_transcendence") },
		{ id: "ethereal_essence", name: Text.translate("item.ftb.ethereal_essence") },
		{ id: "positron_matrix", name: Text.translate("item.ftb.positron_matrix") },

		{
			id: "infinitely_compressed_circuit_board",
			name: Text.translate("item.ftb.infinitely_compressed_circuit_board")
		},
		{ id: "time_prism", name: Text.translate("item.ftb.time_prism") },
		{ id: "prismatic_xychorium", name: Text.translate("item.ftb.prismatic_xychorium") },
		{ id: "dimensional_memory_fragment", name: Text.translate("item.ftb.dimensional_memory_fragment") },
		{ id: "supercritical_mass", name: Text.translate("item.ftb.supercritical_mass") },
		{ id: "kelp_goo", name: Text.translate("item.ftb.kelp_goo") },
		{ id: "firestick", name: Text.translate("item.ftb.firestick") }
	];

	items.forEach((item) => {
		const createdItem = event
			.create(`ftb:${item.id}`)
			.displayName(item.name)
			.rarity("epic");
		if (item.isDisc) {
			createdItem.jukeboxPlayable(item.sound, true);
		}
	});
});

StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
	event.displayName = "Feed The Beast";
});
