// priority: 989

ServerEvents.recipes((event) => {
  //Creative Items
  event.shapeless("ars_nouveau:creative_spell_book", [
		"ars_nouveau:archmage_spell_book",
    "ftb:creative_ascension"
	])

	event
		.custom({
			type: "ars_nouveau:enchanting_apparatus",
			keepNbtOfReagent: false,
			pedestalItems: [
				{
					item: "irons_spellbooks:ruined_book"
				}
			],
			reagent: {
				item: "minecraft:writable_book"
			},
			result: {
				count: 2,
				id: "irons_spellbooks:ruined_book"
			},
			sourceCost: 5000
		})
		.id("ftb:ruined_book");


	//Smooth Sourcestone Button Recipe
	event.shapeless("4x ars_additions:polished_sourcestone_button", ["ars_nouveau:smooth_sourcestone", "ars_nouveau:smooth_sourcestone", "ars_nouveau:smooth_sourcestone", "ars_nouveau:smooth_sourcestone"]).id(`ftb:ars_additions/crafting/buttons/polished_sourcestone_button`);
	event.shapeless("4x minecraft:spore_blossom", ["minecraft:lily_pad", "ars_nouveau:manipulation_essence"]).id(`ftb:ars_additions/crafting/spore_blossom`);

});
