// priority: 975

ServerEvents.recipes((event) => {
	// Heavy Water 10000
	event
		.custom({
			type: "modern_industrialization:centrifuge",
			eu: 2,
			duration: 100,
			fluid_inputs: [
				{
					amount: 10000,
					fluid: "mekanism:heavy_water"
				}
			],
			fluid_outputs: [
				{
					amount: 10000,
					fluid: "modern_industrialization:heavy_water"
				}
			]
		})
		.id("ftb:heavy_water_convertion");

	event
		.custom({
			type: "modern_industrialization:mixer",
			eu: 32,
			duration: 80,
			fluid_inputs: [
				{
					tag: "c:crude_oil",
					amount: 100
				}
			],
			item_inputs: [
				{
					item: "actuallyadditions:crystallized_canola_seed",
					amount: 1
				}
			],
			fluid_outputs: [
				{
					fluid: "actuallyadditions:crystallized_oil",
					amount: 600
				}
			]
		})
		.id("ftb:crystallized_oil");

	event
		.custom({
			type: "modern_industrialization:mixer",
			eu: 32,
			duration: 80,
			fluid_inputs: [
				{
					fluid: "modern_industrialization:helium",
					amount: 1000
				}
			],
			item_inputs: [
				{
					item: "ftbmaterials:diamond_dust",
					amount: 1
				},
				{
					item: "ftb:void_crystal_catalyst",
					amount: 1
				}
			],
			item_outputs: [
				{
					item: "geore:budding_monazite",
					amount: 1
				}
			]
		})
		.id("ftb:budding_monazite_from_dusts");

	event
		.custom({
			type: "extended_industrialization:alloy_smelter",
			eu: 4,
			duration: 200,
			item_inputs: [
				{
					tag: "c:dusts/tin",
					amount: 1
				},
				{
					tag: "c:dusts/copper",
					amount: 3
				}
			],
			item_outputs: [
				{
					item: "ftbmaterials:bronze_ingot",
					amount: 4
				}
			]
		})
		.id("ftb:bronze_ingot_from_dusts");

	event
		.custom({
			type: "extended_industrialization:alloy_smelter",
			eu: 4,
			duration: 200,
			item_inputs: [
				{
					tag: "c:ingots/tin",
					amount: 1
				},
				{
					tag: "c:ingots/copper",
					amount: 3
				}
			],
			item_outputs: [
				{
					item: "ftbmaterials:bronze_ingot",
					amount: 4
				}
			]
		})
		.id("ftb:bronze_ingot_from_ingots");

	event
		.custom({
			type: "modern_industrialization:mixer",
			eu: 32,
			duration: 40,
			fluid_inputs: [
				{
					fluid: "actuallyadditions:crystallized_oil",
					amount: 100
				}
			],
			item_inputs: [
				{
					item: "actuallyadditions:empowered_canola_seed",
					amount: 1
				}
			],
			fluid_outputs: [
				{
					fluid: "actuallyadditions:empowered_oil",
					amount: 600
				}
			]
		})
		.id("ftb:empowered_oil");

	event.custom({
			type: "modern_industrialization:implosion_compressor",
			eu: 1,
			duration: 10,
			item_inputs: [
				{
					item: "pneumaticcraft:printed_circuit_board",
					amount: 32
				},
				{
					item: "modern_industrialization:electronic_circuit_board",
					amount: 16
				},
				{
					item: "mekanism_weaponry:plasma_circuit",
					amount: 64
				},
				{
					item: "mekanismadditions:obsidian_tnt",
					amount: 64
				}
			],
			item_outputs: {
				item: "ftb:infinitely_compressed_circuit_board",
				amount: 1
			}
	}).id("ftb:infinitely_compressed_circuit_board");

	event.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: "oritech:advanced_computing_engine",
      },
      loops: 48,
      results: [
        {
          chance: 100.0,
          id: "ftb:infinitely_compressed_circuit_board",
        },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "ftb:incomplete_infinitely_compressed_circuit_board",
            },
            {
              item: "pneumaticcraft:printed_circuit_board",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_infinitely_compressed_circuit_board",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "ftb:incomplete_infinitely_compressed_circuit_board",
            },
            {
              item: "immersiveengineering:circuit_board",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_infinitely_compressed_circuit_board",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "ftb:incomplete_infinitely_compressed_circuit_board",
            },
            {
              item: "mekanism_weaponry:plasma_circuit",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_infinitely_compressed_circuit_board",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "ftb:incomplete_infinitely_compressed_circuit_board",
            },
            {
              item: "oritech:flux_gate",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_infinitely_compressed_circuit_board",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "ftb:incomplete_infinitely_compressed_circuit_board",
            },
            {
              item: "mekanismadditions:obsidian_tnt",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_infinitely_compressed_circuit_board",
            },
          ],
        },       
        {
          type: "create:filling",
          ingredients: [
            {
              item: "ftb:incomplete_infinitely_compressed_circuit_board",
            },
            {
              type: "fluid_stack",
              amount: 100,
              fluid: "pneumaticcraft:plastic",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_infinitely_compressed_circuit_board",
            },
          ],
        },
      ],
      transitional_item: {
        id: "ftb:incomplete_infinitely_compressed_circuit_board",
      },
    }).id("ftb:create/sequenced_assembly/infinitely_compressed_circuit_board");

	event
		.custom({
			type: "modern_industrialization:assembler",
			duration: 1200,
			eu: 1024,
			fluid_inputs: [
				{
					amount: 10000,
					fluid: "mffs:fortron_fluid"
				},
				{
					amount: 90,
					fluid: "oritech:still_molten_energite"
				}
			],
			item_inputs: [
				{
					amount: 4,
					item: "geneticsresequenced:dna_helix"
				},
				{
					amount: 16,
					item: "modern_industrialization:qubit"
				},
				{
					amount: 64,
					item: "mekanism:ultimate_control_circuit"
				},
				{
					amount: 16,
					item: "oritech:super_ai_chip"
				}
			],
			item_outputs: [
				{
					amount: 1,
					item: "ftb:bio_neural_circuit"
				}
			]
		})
		.id("ftb:bio_neural_circuit");

	//Adding PnC Crude Oil to Blast Furnace
	event
		.custom({
			type: "modern_industrialization:blast_furnace",
			eu: 2,
			duration: 10,
			fluid_inputs: [
				{
					fluid: "pneumaticcraft:oil",
					amount: 100
				}
			],
			fluid_outputs: [
				{
					fluid: "modern_industrialization:synthetic_oil",
					amount: 100
				}
			]
		})
		.id("ftb:crude_to_synthetic");

	//Fixing Nuclear Casing Assembler Recipe
	event
		.custom({
			type: "modern_industrialization:assembler",
			duration: 200,
			eu: 8,
			item_inputs: [
				{
					amount: 8,
					tag: "c:plates/nuclear_alloy"
				},
				{
					amount: 1,
					item: "modern_industrialization:turbo_machine_hull"
				}
			],
			item_outputs: [
				{
					amount: 4,
					item: "modern_industrialization:nuclear_casing"
				}
			]
		})
		.id("ftb:assembler/electric_age/casing/nuclear_casing");

	//Fixing Silicon Block Unpacking to keep the 2 Silicons Separated
	event.replaceInput(
		{ id: "modern_industrialization:materials/silicon/unpacker/ingot" },
		"extendedae:silicon_block",
		"modern_industrialization:silicon_block"
	);

	//Fixing 2 Specific MI Recipes that still use its Steel Plates.
	event.replaceInput(
		{ id: "extended_industrialization:casing/craft/steel_plated_bricks" },
		"modern_industrialization:steel_plate",
		"#c:plates/steel"
	);
	event.replaceInput(
		{ id: "extended_industrialization:casing/assembler/steel_plated_bricks" },
		"modern_industrialization:steel_plate",
		"#c:plates/steel"
	);

	event.replaceInput(
		{ id: "modern_industrialization:steam_age/bronze/macerator_asbl" },
		"minecraft:diamond",
		"#c:gears/invar"
	);

	//Adding a way to get Silicon from MI from Silicon Essence.
	event
		.custom({
			type: "modern_industrialization:blast_furnace",
			eu: 128,
			duration: 200,
			item_inputs: [
				{
					item: "mysticalagriculture:silicon_essence",
					amount: 3
				},
				{
					tag: "c:dusts/coal_coke",
					amount: 1
				}
			],
			item_outputs: {
				item: "ftbmaterials:silicon_dust",
				amount: 8
			}
		})
		.id(
			"ftb:modern_industrialization/materials/blast_furnace/essence_silicium_coke"
		);

	event
		.custom({
			type: "modern_industrialization:blast_furnace",
			eu: 128,
			duration: 200,
			item_inputs: [
				{
					item: "mysticalagriculture:silicon_essence",
					amount: 3
				},
				{
					tag: "c:dusts/carbon",
					amount: 1
				}
			],
			item_outputs: {
				item: "ftbmaterials:silicon_dust",
				amount: 12
			}
		})
		.id(
			"ftb:modern_industrialization/materials/blast_furnace/essence_silicium_carbon"
		);

	//Making the Brick Macerating Recipe also accept any Brick Ingot.
	let brick_macerating_recipes = [
		"modern_industrialization:materials/brick/macerator/ingot",
		"modern_industrialization:materials/forge_hammer/brick_dust_with_tool"
	];

	brick_macerating_recipes.forEach((recipe) => {
		event.replaceInput({ id: recipe }, "minecraft:brick", "#c:ingots/brick");
	});

	//Early Crushing Recipes for Coke =============================================================
	const coke_dust = "ftbmaterials:coal_coke_dust";
	event
		.custom({
			type: "farmersdelight:cutting",
			ingredients: [{ tag: "c:coal_coke" }],
			result: [{ item: { count: 1, id: coke_dust } }],
			sound: { sound_id: "minecraft:block.anvil.land" },
			tool: { tag: "ftbstuff:hammers" }
		})
		.id("ftb:hammering/cutting_board/coke_coal_to_dust");
	event
		.custom({
			type: "farmersdelight:cutting",
			ingredients: [{ tag: "c:storage_blocks/coke" }],
			result: [{ item: { count: 9, id: coke_dust } }],
			sound: { sound_id: "minecraft:block.anvil.land" },
			tool: { tag: "ftbstuff:hammers" }
		})
		.id("ftb:hammering/cutting_board/coke_block_to_dust");
	// ============================================================================================

	//MI's Magical Quarry ===========================================================================

	event
		.custom({
			type: "modern_industrialization:quarry",
			eu: 128,
			duration: 600,
			item_inputs: {
				item: "occultism:infused_pickaxe",
				amount: 1,
				probability: 0.0
			},
			item_outputs: [
				{
					item: "xycraft_world:kivi",
					amount: 2,
					probability: 0.08
				},
				{
					item: "xycraft_world:xychorium_ore_stone_blue",
					amount: 1,
					probability: 0.06
				},
				{
					item: "xycraft_world:xychorium_ore_stone_red",
					amount: 1,
					probability: 0.06
				},
				{
					item: "xycraft_world:xychorium_ore_stone_green",
					amount: 1,
					probability: 0.06
				},
				{
					item: "xycraft_world:xychorium_ore_stone_dark",
					amount: 1,
					probability: 0.06
				},
				{
					item: "xycraft_world:xychorium_ore_stone_light",
					amount: 1,
					probability: 0.06
				},
				{
					item: "malum:soulstone_ore",
					amount: 1,
					probability: 0.05
				},
				{
					item: "malum:blazing_quartz_ore",
					amount: 1,
					probability: 0.03
				},
				{
					item: "malum:cthonic_gold_ore",
					amount: 1,
					probability: 0.03
				},
				{
					item: "silentgear:crimson_iron_ore",
					amount: 1,
					probability: 0.02
				},
				{
					item: "silentgear:bort_ore",
					amount: 1,
					probability: 0.02
				},
				{
					item: "occultism:iesnium_ore",
					amount: 1,
					probability: 0.02
				},
				{
					item: "malum:brilliant_stone",
					amount: 1,
					probability: 0.02
				}
			]
		})
		.id("ftb:modern_industrialization/quarry/magical");

	// ==============================================================================================

	//Sulfur with Gunpowder and Charcoal Dust
	event
		.custom({
			type: "modern_industrialization:mixer",
			duration: 200,
			eu: 2,
			item_inputs: [
				{
					amount: 2,
					tag: "c:gunpowders"
				},
				{
					amount: 2,
					tag: "c:dusts/charcoal"
				}
			],
			item_outputs: [
				{
					amount: 4,
					item: "ftbmaterials:sulfur_dust"
				}
			]
		})
		.id("ftb:mixer/sulfur_dust");

	//Adding an Alternate way to smelt Tungsten Ingots.
	event.custom({
      type: "immersiveengineering:arc_furnace",
	  additives: [
		{
			tag: "c:dusts/refined_obsidian"
		}
	],
      energy: 102400,
      input: {
        basePredicate: {
          tag: "c:dusts/tungsten",
        },
        count: 1,
      },
      results: [
        {
          item: "ftbmaterials:tungsten_ingot",
        },
      ],
      time: 1200,
    }).id("ftb:immersiveengineering/arc_furnace/tungsten_dust");

	//Adding an Alternate way to smelt Industrial Aluminum Ingots.
	event.custom({
      type: "immersiveengineering:arc_furnace",
	  additives: [
		{
			tag: "c:sands"
		}
	],
      energy: 25600,
      input: {
        basePredicate: {
          tag: "c:dusts/aluminum",
        },
        count: 1,
      },
      results: [
        {
          item: "modern_industrialization:aluminum_ingot",
        },
      ],
      time: 600,
    }).id("ftb:immersiveengineering/arc_furnace/industrial_aluminum_from_dust");

	event.custom({
      type: "immersiveengineering:arc_furnace",
	  additives: [
		{
			basePredicate: {
				tag: "c:sands",
			  },
			count: 8
		},
	],
      energy: 25600,
      input: {
        basePredicate: {
          item: "mysticalagriculture:aluminum_essence",
        },
        count: 8,
      },
      results: [
        {
			basePredicate: {
				item: "modern_industrialization:aluminum_ingot",
			},
			  count: 8
        },
      ],
      time: 4800,
    }).id("ftb:immersiveengineering/arc_furnace/industrial_aluminum_from_essence");

	event.custom({
		type: "modern_industrialization:blast_furnace",
		duration: 1600,
		eu: 32,
		item_inputs: [
			{
				"amount": 8,
				"item": "mysticalagriculture:aluminum_essence"
			},
			{
				"amount": 8,
				"tag": "c:sands"
			}
		],
		"item_outputs": [
			{
				"amount": 8,
				"item": "modern_industrialization:aluminum_ingot"
			}
		]
	}).id("ftb:modern_industrialization/blast_furnace/industrial_aluminum_from_essence");
	
	event.custom({
		"type": "oritech:foundry",
		"fluidInput": {
			"amount": 0,
			"fluid": "minecraft:empty"
		},
		"fluidOutputs": [],
		"ingredients": [
			{
				"tag": "c:sands"
			},
			{
				"tag": "c:dusts/aluminum"
			}
		],
		"results": [
			{
				"count": 1,
				"id": "modern_industrialization:aluminum_ingot"
			}
		],
		"time": 600
	}).id("ftb:oritech/foundry/industrial_aluminum_from_dust");

});
