// priority: 983

ServerEvents.recipes((event) => {

	event.shapeless("ftb:void_crystal_catalyst", [
		"minecraft:cobblestone",
		"enderio:grains_of_infinity"
	]).id("ftb:void_crystal_catalyst");

	//Making Kelp Resin
	event
		.custom({
			type: "farmersdelight:cooking",
			cookingtime: 1200,
			experience: 0.35,
			ingredients: [
				{
					item: "minecraft:kelp"
				},
				{
					item: "minecraft:kelp"
				},
				{
					item: "minecraft:kelp"
				},
				{
					item: "minecraft:kelp"
				},
				{
					item: "minecraft:kelp"
				},
				{
					item: "minecraft:kelp"
				}
			],
			recipe_book_tab: "misc",
			result: {
				count: 2,
				id: "ftb:kelp_goo"
			}
		})
		.id("ftb:kelp_goo");

	//Slime with Kelp Resin
	event
		.smelting("minecraft:slime_ball", "ftb:kelp_goo")
		.id("ftb:smelting/slime_ball");

	event
		.shapeless("minecraft:coal", ["8x actuallyadditions:tiny_coal"])
		.id("ftb:convent_tiny_coal");
});
