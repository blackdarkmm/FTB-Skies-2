// priority: 999

ServerEvents.recipes((event) => {
	const stonecutting = event.stonecutting;
	var transmute = function (arrayOfBlocks) {
		var cpt = 0;
		while (cpt < arrayOfBlocks.length) {
			var otherBlocks = arrayOfBlocks
				.slice(0, cpt)
				.concat(arrayOfBlocks.slice(cpt + 1));
			stonecutting(arrayOfBlocks[cpt], otherBlocks);
			cpt++;
		}
	};

	//Adding Stonecutter Conversion Recipes for Duplicated Blocks ===================================

	//SourceBerry Sack and Crate
	transmute(["ars_nouveau:sourceberry_sack", "arsdelight:source_berry_crate"]);
	//Biomass Blocks
	transmute(["mekanism:block_bio_fuel", "oritech:biomass_block"]);
	//Firebrick Blocks
	transmute([
		"modern_industrialization:fire_clay_bricks",
		"productivemetalworks:black_fire_bricks"
	]);
	//Quartz and Natural Quartz
	transmute(["minecraft:quartz", "malum:natural_quartz"]);
	//Fake Grass Blocks Transmute + Recipe.
	const fake_grasses = [
		"jags:ocean_fake_grass_block", 
		"jags:jungle_fake_grass_block", 
		"jags:dark_forest_fake_grass_block", 
		"jags:badlands_fake_grass_block", 
		"jags:mangrove_fake_grass_block", 
		"jags:swamp_fake_grass_block", 
		"jags:plains_fake_grass_block", 
		"jags:snow_fake_grass_block", 
		"jags:desert_fake_grass_block", 
		"jags:sparse_jungle_fake_grass_block", 
		"jags:pale_garden_fake_grass_block", 
		"jags:mushroom_fake_grass_block", 
		"jags:meadow_fake_grass_block", 
		"jags:birch_fake_grass_block", 
		"jags:cheery_fake_grass_block"
	];
	
	fake_grasses.forEach(grass => {
		transmute(["jags:fake_grass_block", grass]);
	});

	//Adding a 1 Way Recipe for Grass to Fake Grass
	event.shapeless("jags:fake_grass_block", ["minecraft:grass_block"]).id("ftb:fake_grass");
	event.shapeless("jags:fake_grass_block", ["minecraft:moss_carpet", "create:super_glue", "minecraft:dirt"]).damageIngredient("create:super_glue", 1).id("ftb:fake_grass_1");

	//Adding Tiny Coals Compat with Compacting Drawers ==============================================

	event.custom({
		type: "functionalstorage:custom_compacting",
		higher_input: {
			count: 1,
			id: "minecraft:honeycomb_block"
		},
		lower_input: {
			count: 4,
			id: "minecraft:honeycomb"
		}
	}).id("functionalstorage:compacting/honeycomb_block");

	//Salt Block Compacting
	event.custom({
		type: "functionalstorage:custom_compacting",
		higher_input: {
			count: 1,
			id: "ftbmaterials:salt_block"
		},
		lower_input: {
			count: 4,
			id: "ftbmaterials:salt_dust"
		}
	}).id("functionalstorage:compacting/salt_block");

	//Sulfur Block Compacting
	event.custom({
		type: "functionalstorage:custom_compacting",
		higher_input: {
			count: 1,
			id: "ftbmaterials:sulfur_block"
		},
		lower_input: {
			count: 9,
			id: "ftbmaterials:sulfur_gem"
		}
	}).id("functionalstorage:compacting/sulfur_block");

	// Adding Pebbles to the Compacting Drawer =============================================
	let create_pebble = "";
	let fullblock_pebble = "";
	const pebble_types = [
		"andesite",
		"basalt",
		"blackstone",
		"calcite",
		"deepslate",
		"diorite",
		"granite",
		"stone",
		"tuff"
	];

	pebble_types.forEach((type) => {
		create_pebble = `createsifter:${type}_pebble`;
		if (type !== "stone") {
			fullblock_pebble = `minecraft:${type}`;
		} else {
			fullblock_pebble = "minecraft:cobblestone";
		}

		event
			.custom({
				type: "functionalstorage:custom_compacting",
				higher_input: {
					count: 1,
					id: fullblock_pebble
				},
				lower_input: {
					count: 4,
					id: create_pebble
				}
			})
			.id(`functionalstorage:compacting/${type}_pebble`);
	});

	// ============================================================================================

	event
		.shapeless("minecraft:rose_bush", [
			"minecraft:red_dye",
			"minecraft:red_dye",
			"#minecraft:flowers",
			"#minecraft:flowers"
		])
		.id("ftb:rose_bush");
	event
		.shapeless("silentgear:cord_template", [
			"silentgear:template_board",
			"minecraft:stick",
			"#c:strings",
			"#c:strings"
		])
		.id("ftb:cord_template");
	event
		.shapeless("minecraft:sunflower", [
			"minecraft:orange_dye",
			"minecraft:yellow_dye",
			"#minecraft:flowers",
			"#minecraft:flowers"
		])
		.id("ftb:sunflower");
	event
		.shapeless("ftbmaterials:steel_plate", [
			"ftbmaterials:steel_ingot",
			"immersiveengineering:hammer"
		])
		.id("ftb:steel_plate_hammer");

	event
		.shaped("utilitarian:redstone_clock", ["SRS", "RTR", "SRS"], {
			S: "#c:stones",
			R: "#c:dusts/redstone",
			T: "minecraft:redstone_torch"
		})
		.id("ftb:redstone_clock");

	event
		.shaped("8x ftbmaterials:silicon_gem", ["   ", "EEE", "   "], {
			E: "mysticalagriculture:silicon_essence"
		})
		.id("ftb:silicon");

	//Elytra Dupe
	event
		.shaped("minecraft:elytra", ["DED", "DGD", "DDD"], {
			D: "minecraft:phantom_membrane",
			E: "minecraft:dragon_egg",
			G: "minecraft:elytra"
		})
		.id("ftb:elytra_dupe")
		.keepIngredient("minecraft:elytra");

	event
		.shaped("functionalstorage:dripping_upgrade", ["dsd", "rir", "dld"], {
			d: "#c:ore_bearing_ground/deepslate",
			s: "minecraft:pointed_dripstone",
			r: "#c:dusts/redstone",
			i: "enderio:grains_of_infinity",
			l: "mcwlights:lava_lamp"
		})
		.id("ftb:dripping_upgrade");

	event
		.shaped(
			"modern_industrialization:steam_mining_drill",
			["fii", "PDi", "bPf"],
			{
				P: "ftbmaterials:iron_plate",
				f: "minecraft:furnace",
				b: "minecraft:bucket",
				i: "#c:ingots/invar",
				D: "modern_industrialization:copper_drill_head"
			}
		)
		.id("ftb:steam_mining_drill");

	//explorer's compass
	event
		.shaped("explorerscompass:explorerscompass", ["BAB", "ACA", "BAB"], {
			A: "ftbmaterials:netherite_nugget",
			B: "minecraft:amethyst_shard",
			C: "ftbmaterials:diamond_gear"
		})
		.id("ftb:explorerscompass");

	//fix Patchouli books
	event
		.shapeless(
			Item.of(
				'patchouli:guide_book[patchouli:book="irons_spellbooks:iss_guide_book"]'
			),
			["minecraft:book", "irons_spellbooks:arcane_essence"]
		)
		.id("ftb:irons_spellbooks_guide_book");
	event
		.shapeless(
			Item.of(
				'patchouli:guide_book[patchouli:book="mysticalagriculture:guide"]'
			),
			["minecraft:book", "mysticalagriculture:inferium_essence"]
		)
		.id("ftb:mysticalagriculture_guide_book");

	event
		.shapeless(
			'mekanism:creative_energy_cube[mekanism:side_config={config:{energy:{eject:1b,side:{back:"output",bottom:"output",front:"output",left:"output",right:"output",top:"output"}},items:{side:{back:"input",bottom:"input",front:"output",left:"input",right:"input",top:"input"}}}},mekanism:energy={energy_containers:[L;9223372036854775807L]}]',
			["mekanism:basic_energy_cube", "ftb:creative_ascension"]
		)
		.id("ftb:creative_energy_cube");
	event
		.shapeless("xycraft_machines:fluid_selector", [
			"xycraft_machines:extractor",
			"ftb:creative_ascension",
			"xycraft_machines:valve"
		])
		.id("ftb:creative_fluid_selector");
	event
		.shapeless("xycraft_machines:item_selector", [
			"xycraft_machines:extractor",
			"ftb:creative_ascension",
			"xycraft_machines:soaryn_box"
		])
		.id("ftb:creative_item_selector");

	event
		.shapeless(
			"mekanism:elite_control_circuit",
			"modern_industrialization:analog_circuit"
		)
		.id("ftb:elite_control_circuit");
	event
		.shapeless(
			"modern_industrialization:analog_circuit",
			"mekanism:elite_control_circuit"
		)
		.id("ftb:elite_control_circuit_rev");
	event
		.shapeless(
			"mekanism:ultimate_control_circuit",
			"modern_industrialization:electronic_circuit"
		)
		.id("ftb:ultimate_control_circuit");
	event
		.shapeless(
			"modern_industrialization:electronic_circuit",
			"mekanism:ultimate_control_circuit"
		)
		.id("ftb:ultimate_control_circuit_rev");
	event
		.shapeless("ae2:creative_energy_cell", [
			"ae2:energy_acceptor",
			"ftb:creative_ascension"
		])
		.id("ftb:creative_energy_cell");
	event
		.shapeless(
			'ironjetpacks:jetpack[ironjetpacks:jetpack_id="ironjetpacks:creative",rarity="epic"]',
			[
				'ironjetpacks:jetpack[ironjetpacks:jetpack_id="ironjetpacks:wood"]',
				"ftb:creative_ascension"
			]
		)
		.id("ftb:creative_jetpack");
	event
		.shapeless("fargostalismans:soul_of_flight_mastery", [
			"fargostalismans:abominable_energy",
			"ftb:creative_ascension"
		])
		.id("ftb:creative_soul_of_flight");
	event
		.shapeless("mekanism:creative_chemical_tank", [
			"mekanism:basic_chemical_tank",
			"ftb:creative_ascension"
		])
		.id("ftb:creative_chemical_tank");
	event
		.shapeless("pneumaticcraft:creative_compressor", [
			"pneumaticcraft:manual_compressor",
			"ftb:creative_ascension"
		])
		.id("ftb:creative_compressor");
	event
		.shapeless("ars_nouveau:creative_source_jar", [
			"ars_nouveau:source_jar",
			"ftb:creative_ascension"
		])
		.id("ftb:creative_source_jar");
	event
		.shapeless("mysticalagriculture:creative_soulium_dagger", [
			"mysticalagriculture:soulium_dagger",
			"ftb:creative_ascension"
		])
		.id("ftb:creative_soulium_dagger");
	event
		.shapeless("cabletiers:creative_importer", [
			"#refinedstorage:importers",
			"ftb:creative_ascension"
		])
		.id("ftb:creative_importer");
	event
		.shapeless("cabletiers:creative_exporter", [
			"#refinedstorage:exporters",
			"ftb:creative_ascension"
		])
		.id("ftb:creative_exporter");
	event
		.shapeless("cabletiers:creative_constructor", [
			"#refinedstorage:constructors",
			"ftb:creative_ascension"
		])
		.id("ftb:creative_constructor");
	event
		.shapeless("cabletiers:creative_destructor", [
			"#refinedstorage:destructors",
			"ftb:creative_ascension"
		])
		.id("ftb:creative_destructor");
	event
		.shapeless("cabletiers:creative_disk_interface", [
			"#refinedstorage:disk_interfaces",
			"ftb:creative_ascension"
		])
		.id("ftb:creative_disk_interface");

	event
		.custom({
			type: "treetap:tap_extract",
			log: {
				item: "integrateddynamics:menril_log"
			},
			processing_time: 1200,
			result: {
				id: "integrateddynamics:bucket_menril_resin"
			},
			collect_bucket: true,
			display_fluid: {
				fluid: "integrateddynamics:menril_resin"
			},
			fluid_color: "#00eaff"
		})
		.id("ftb:menril_resin");

	//Adding Constantan Dust to Ingot Smelting Recipes.
	event.smelting("ftbmaterials:constantan_ingot", "#c:dusts/constantan");
	event.blasting("ftbmaterials:constantan_ingot", "#c:dusts/constantan");
	event
		.custom({
			type: "enderio:alloy_smelting",
			energy: 1500,
			experience: 0.3,
			inputs: [{ count: 1, tag: "c:dusts/constantan" }],
			output: { count: 1, id: "ftbmaterials:constantan_ingot" }
		})
		.id("ftb:alloy_smelting/constantan_ingot_from_dust");

	//Adding a Alternative Recipe to Torchflower Seeds
	event
		.shaped(Item.of("minecraft:torchflower_seeds", 1), ["VVV", "VTV", "T T"], {
			T: "reliquary:interdiction_torch",
			V: "#chipped:vine"
		})
		.id("ftb:torchberry_seeds");

	//Enchanted Wicker Bundle Recipe, but with Machines instead ===================================
	event
		.custom({
			type: "modern_industrialization:compressor",
			duration: 120,
			eu: 2,
			item_inputs: [
				{
					amount: 9,
					tag: "minecraft:saplings"
				}
			],
			item_outputs: [
				{
					amount: 1,
					item: "enchanted:wicker_bundle"
				}
			]
		})
		.id("ftb:modern_industrialization/compressing/enchanted/wicker_bundle");

	event
		.custom({
			type: "immersiveengineering:metal_press",
			energy: 2400,
			input: {
				basePredicate: {
					tag: "minecraft:saplings"
				},
				count: 9
			},
			mold: "immersiveengineering:mold_packing_9",
			result: {
				basePredicate: {
					item: "enchanted:wicker_bundle"
				},
				count: 1
			}
		})
		.id("ftb:immersiveengineering/metal_press/enchanted/wicker_bundle");

	//charcoal from ash
	event
		.shapeless("minecraft:charcoal", ["4x supplementaries:ash"])
		.id("ftb:charcoal_from_ash");

	event
		.shapeless("minecraft:torch", ["#c:rods/wooden", "supplementaries:ash"])
		.id("ftb:torch_from_ash");

	event
		.shaped("minecraft:campfire", [" S ", "STS", "LLL"], {
			L: "#minecraft:logs",
			T: "minecraft:torch",
			S: "minecraft:stick"
		})
		.id("ftb:campfire_from_torch");

	event
		.shapeless("ftb:firestick", ["minecraft:stick", "minecraft:stick"])
		.id("ftb:firestick");

	event
		.campfireCooking(
			"ceramicbucket:ceramic_bucket",
			"ceramicbucket:unfired_clay_bucket"
		)
		.cookingTime(200)
		.id("ftb:ceramic_bucket_from_campfire");

	event
		.campfireCooking(
			"ceramicshears:ceramic_shears_part",
			"ceramicshears:clay_shears_part"
		)
		.cookingTime(100)
		.id("ftb:ceramic_shear_part_from_campfire");

	event
		.shaped("minecraft:furnace", ["CCC", "CFC", "CCC"], {
			C: "minecraft:cobblestone",
			F: "minecraft:campfire"
		})
		.id("ftb:custom_furnace_recipe");

	event
		.shaped("minecraft:trident", [" PS", " CP", "C  "], {
			S: "minecraft:iron_sword",
			C: "minecraft:oxidized_copper",
			P: "minecraft:prismarine_shard"
		})
		.id("ftb:trident_from_oxidized_copper");

	//Mob Grinding Utils's Tinted Glass Tweak.
	event
		.shaped("4x mob_grinding_utils:tinted_glass", ["CGC", "GDG", "CGC"], {
			C: "#minecraft:coals",
			G: "#c:glass_blocks",
			D: "#c:ingots/dark_steel"
		})
		.id("ftb:mob_grinding_utils/recipe_tintedglass");

	//end port frame
	event
		.shaped("4x minecraft:end_portal_frame", ["SMS", "ENE", "SMS"], {
			S: "minecraft:sculk",
			M: "ars_elemental:mark_of_mastery",
			E: "malum:ether",
			N: "minecraft:nether_star"
		})
		.id("ftb:end_portal_frame");

	//A Tale of Fire and Ice Gateway
	event
		.shaped(
			`gateways:gate_pearl[gateways:gateway="gateways:iron_spells/pyrohostage_situation"]`,
			["FIF", "IEI", "FIF"],
			{
				I: "reliquary:frozen_core",
				F: "reliquary:molten_core",
				E: "minecraft:ender_eye"
			}
		)
		.id("ftb:gateways/fire_and_ice");

	//A Tale of Life and Death Gateway
	event
		.shaped(
			`gateways:gate_pearl[gateways:gateway="gateways:iron_spells/apothehostage_situation"]`,
			["SNS", "NEN", "SNS"],
			{
				N: "irons_spellbooks:nature_rune",
				S: "#c:skulls",
				E: "minecraft:ender_eye"
			}
		)
		.id("ftb:gateways/life_and_death");

	//A Tale of a Priest who knew too much Gateway
	event
		.shaped(
			`gateways:gate_pearl[gateways:gateway="gateways:iron_spells/holyhostage_situation"]`,
			["NSN", "HEH", "NHN"],
			{
				N: "irons_spellbooks:netherward_tincture",
				S: "irons_spellbooks:ruined_book",
				H: "irons_spellbooks:holy_rune",
				E: "minecraft:ender_eye"
			}
		)
		.id("ftb:gateways/priest_who_knew");

	//A Tale of a Fallen Kingdom Gateway
	event
		.shaped(
			`gateways:gate_pearl[gateways:gateway="gateways:iron_spells/fallen_kingdom"]`,
			["NSN", "HEH", "NHN"],
			{
				N: "reliquary:crimson_cloth",
				S: "minecraft:totem_of_undying",
				H: "irons_spellbooks:blood_rune",
				E: "cataclysm:monstrous_eye"
			}
		)
		.id("ftb:gateways/fallen_kingdom");

	//A Peer Into the Abyss
	event
		.shaped(
			`gateways:gate_pearl[gateways:gateway="gateways:basic/skulk"]`,
			["VEV", "ESE", "VEV"],
			{
				S: "#c:nether_stars",
				E: "justdirethings:celestigem",
				V: "actuallyadditions:empowered_void_crystal"
			}
		)
		.id("ftb:gateways/skulk");

	//Simple Magnet's Magnet requiring Grains of Infinity instead of a Ender Pearl.
	event.replaceInput(
		{ id: "simplemagnets:basicmagnet" },
		"#c:ender_pearls",
		"enderio:grains_of_infinity"
	);

	//Coal GeOres to Coke
	event
		.custom({
			type: "modern_industrialization:coke_oven",
			eu: 2,
			duration: 600,
			item_inputs: {
				tag: "geore:geore_shards/coal",
				amount: 2
			},
			fluid_outputs: {
				fluid: "immersiveengineering:creosote",
				amount: 500,
				probability: 0.5
			},
			item_outputs: {
				item: "ftbmaterials:coal_coke_gem",
				amount: 1
			}
		})
		.id("ftb:modern_industrialization/coke_oven/coal_geore");

	// ==========================================================================================
});
