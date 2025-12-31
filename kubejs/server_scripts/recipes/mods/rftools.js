// priority: 955

ServerEvents.recipes((event) => {
	//Fixing Night Vision Module
	event
		.shaped(
			Item.of("rftoolsutility:nightvision_module", 1),
			["CSC", "CMC", "CCC"],
			{
				S: "rftoolsutility:syringe",
				C: "minecraft:golden_carrot",
				M: "rftoolsutility:module_template"
			}
		)
		.id("ftb:rftoolsutility/modules/nightvision");
});
