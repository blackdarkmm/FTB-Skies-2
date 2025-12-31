// priority: 1003

StartupEvents.registry("block", (e) => {
	const defaultHardness = 1;
	const defaultRequiresTool = false;

	const blocks = [
		{
			name: "ftb:pyramid_base",
			displayName: Text.translate("block.ftb.pyramid_base"),
			hardness: 2,
			requiresTool: true,
			tags: ["mineable/axe", "mineable/pickaxe"]
		},
		{
			name: "ftb:pyra_mid_lower",
			displayName: Text.translate("block.ftb.pyra_mid_lower"),
			hardness: 2,
			requiresTool: true,
			tags: ["mineable/axe", "mineable/pickaxe"]
		},
		{
			name: "ftb:pyra_mid_upper",
			displayName: Text.translate("block.ftb.pyra_mid_upper"),
			hardness: 2,
			requiresTool: true,
			tags: ["mineable/axe", "mineable/pickaxe"]
		},
		{
			name: "ftb:pyramid_top",
			displayName: Text.translate("block.ftb.pyramid_top"),
			hardness: 2,
			requiresTool: true,
			tags: ["mineable/axe", "mineable/pickaxe"]
		},
		{
			name: "ftb:faux_amethyst_block",
			displayName: Text.translate("block.ftb.faux_amethyst_block"),
			hardness: 0.4,
			soundType: SoundType.AMETHYST
		},
		{
			name: "ftb:andesite_amalgam_block",
			displayName: Text.translate("block.ftb.andesite_amalgam_block"),
			hardness: 5,
			requiresTool: true,
			tags: ["mineable/pickaxe"]
		},
		{
			name: "ftb:calcified_prospertity_stone",
			displayName: Text.translate("block.ftb.calcified_prospertity_stone"),
			hardness: 2,
			requiresTool: true,
			tags: ["mineable/pickaxe"]
		},
		{
			name: "ftb:void_crystal_catalyst",
			displayName: Text.translate("block.ftb.void_crystal_catalyst"),
			hardness: 5,
			requiresTool: true,
			tags: ["mineable/pickaxe"]
		},
		{
			name: "ftb:crushed_kivi",
			displayName: Text.translate("block.ftb.crushed_kivi"),
			hardness: 5,
			requiresTool: true,
			tags: ["mineable/pickaxe"]
		},		
	];

	blocks.forEach((block) => {
		let b = e.create(block.name)
			.displayName(block.displayName)
			.hardness(block.hardness !== undefined ? block.hardness : defaultHardness);

		if (block.requiresTool !== undefined ? block.requiresTool : defaultRequiresTool) b.requiresTool(true);
		if (block.tags && Array.isArray(block.tags)) {
			block.tags.forEach(tag => b.tagBlock(tag));
		}
		if (block.soundType) b.soundType(block.soundType);
	});
});
