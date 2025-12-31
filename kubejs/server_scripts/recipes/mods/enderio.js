// priority: 985

ServerEvents.recipes((event) => {
	//Adding a Recipe for the Powered Spawner
	event
		.shaped("enderio:powered_spawner", ["SKS", "SCS", "VZV"], {
			C: "enderio:ensouled_chassis",
			S: "#c:ingots/soularium",
			Z: "enderio:z_logic_controller",
			V: "#c:gems/vibrant_crystal",
			K: "#c:skulls"
		})
		.id("ftb:enderio/powered_spawner");

	//Tagging Enderman Head in Recipes.
	event.replaceInput(
		{ id: "enderio:aversion_obelisk" },
		"enderio:enderman_head",
		"#ftb:enderman_head"
	);

	//Temp Fix until the EIO Devs add a proper recipe to Suspicious Seeds
	event.shaped("enderio:void_vial", [" S ", "GVG", "IGI"], {
		G: "#c:glass_blocks/fused_quartz",
		V: "#c:gears/vibrant",
		S: "#c:ingots/soularium",
		I: "#c:dusts/grains_of_infinity"
	}).id("ftb:enderio/void_vial_alt");
});
