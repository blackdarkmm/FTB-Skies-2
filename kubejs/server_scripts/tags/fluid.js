const yeeted_fluids = [
	"immersiveengineering:biodiesel",
	"immersiveengineering:ethanol",
	"extended_industrialization:honey",
	"create:honey",
	"mekanism:hydrogen",
	"mekanism:flowing_hydrogen",
	"mekanism:oxygen",
	"mekanism:flowing_oxygen",
	"mekanism:chlorine",
	"mekanism:flowing_chlorine",
	"mekanism:sulfuric_acid",
	"mekanism:flowing_sulfuric_acid",
	"mekanism:steam",
	"mekanism:flowing_steam",
	"oritech:still_sulfuric_acid",
	"oritech:flowing_sulfuric_acid",
	"oritech:still_oil",
	"oritech:still_diesel",
	"oritech:still_naphtha",
	"oritech:flowing_naphtha",
	"oritech:still_steam",
	"oritech:flowing_steam",
	"modern_industrialization:creosote",
	"modern_industrialization:crude_oil",
	"modern_industrialization:diesel",
	"modern_industrialization:biodiesel",
	"modern_industrialization:ethanol",
	"pneumaticcraft:vegetable_oil",
	"pneumaticcraft:lubricant",
	"productivemetalworks:molten_enderium",
	"productivemetalworks:molten_signalum"
];

ServerEvents.tags("fluid", (event) => {
	event.add("c:boostedbiodiesel", [
		"modern_industrialization:boosted_biodiesel"
	]);
	event.add("c:crystallized_oil", ["actuallyadditions:crystallized_oil"]);
	event.add("c:molten_kivi", ["ftb:molten_kivi"]);
	event.add("c:empowered_oil", ["actuallyadditions:empowered_oil"]);
	event.add("c:synthetic_oil", ["modern_industrialization:synthetic_oil"]);
	event.add("c:polyethylene", ["modern_industrialization:polyethylene"]);
	event.add("c:boosteddiesel", ["modern_industrialization:boosted_diesel"]);
	event.add("c:forceddiesel", ["ftbneotech:force_infused_diesel"]);
	event.add("c:oxygen", ["modern_industrialization:oxygen"]);
	event.add("c:ethene", ["modern_industrialization:ethylene"]);
	event.add("c:heavy_water", ["modern_industrialization:heavy_water"]);
	event.add("c:refinedcanola", ["actuallyadditions:refined_canola_oil"]);
	event.add("c:hydrogen", ["modern_industrialization:hydrogen"]);
	event.add("c:hydrogen", ["mekanism:hydrogen"]);
	event.add("c:oxygen", ["modern_industrialization:oxygen"]);
	event.add("c:oxygen", ["mekanism:oxygen"]);
	event.add("c:chlorine", ["modern_industrialization:chlorine"]);
	event.add("c:chlorine", ["mekanism:chlorine"]);
	event.add("c:sulfuric_acid", ["modern_industrialization:sulfuric_acid"]);
	event.add("c:sulfuric_acid", ["mekanism:sulfuric_acid"]);
	event.add("c:ethylene", ["modern_industrialization:ethylene"]);
	event.add("c:ethene", ["mekanism:ethene"]);
	event.add("c:steam", ["modern_industrialization:steam"]);
	event.add("c:steam", ["mekanism:steam"]);
	event.add("c:heavy_water", ["modern_industrialization:heavy_water"]);
	event.add("c:heavy_water", ["mekanism:heavy_water"]);
	event.add("c:deuterium", ["modern_industrialization:deuterium"]);
	event.add("c:deuterium", ["mekanism:deuterium"]);
	event.add("c:tritium", ["modern_industrialization:tritium"]);
	event.add("c:tritium", ["mekanism:tritium"]);

	//Adding MI's and PNC's Oils to Oritech's Oil Tag.
	event.add("c:oil", ["pneumaticcraft:oil"]);
	event.add("c:ethanol", ["pneumaticcraft:ethanol"]);
	event.add("c:diesel", ["pneumaticcraft:diesel"]);

	//Making a Tag for the Oily Bee Oils.
	event.add("ftb:oily_oils", ["modern_industrialization:synthetic_oil"]);
	const oils = event.get("c:crude_oil").getObjectIds();
	oils.forEach((oil) => {
		event.add("ftb:oily_oils", oil);
	});

	yeeted_fluids.forEach((fluid) => {
		event.removeAllTagsFrom(fluid);
		event.add("c:hidden_from_recipe_viewers", fluid);
	});
});

//Dealing with Yeeted Fluid's Buckets.
ServerEvents.tags("item", (event) => {
	yeeted_fluids.forEach(fluid => {
		let mod_id = fluid.split(":")[0];
		let fluid_id = fluid.split(":")[1];
	
		if (!fluid_id.includes("flowing")) {
		  event.add("c:hidden_from_recipe_viewers", `${mod_id}:${fluid_id}_bucket`);
		} else { return }
	});
});
