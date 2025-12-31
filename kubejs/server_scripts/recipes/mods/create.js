// priority: 960

ServerEvents.recipes((event) => {
  //Improving Andesite Alloy Recipe by swapping to chipped:andesite
  event.replaceInput(
    { id: "create:crafting/materials/andesite_alloy" },
    "minecraft:andesite",
    "#chipped:andesite"
  );
  event.replaceInput(
    { id: "create:crafting/materials/andesite_alloy_from_zinc" },
    "minecraft:andesite",
    "#chipped:andesite"
  );

  //Adding Elemental Arcanite Recipe
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: "irons_spellbooks:ruined_book",
      },
      loops: 20,
      results: [
        {
          chance: 100.0,
          id: "ftb:elemental_arcanite",
        },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "ftb:incomplete_elemental_arcanite",
            },
            {
              item: "irons_spellbooks:cinder_essence",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_elemental_arcanite",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "ftb:incomplete_elemental_arcanite",
            },
            {
              item: "irons_spellbooks:arcane_essence",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_elemental_arcanite",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "ftb:incomplete_elemental_arcanite",
            },
            {
              item: "irons_spellbooks:mithril_weave",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_elemental_arcanite",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "ftb:incomplete_elemental_arcanite",
            },
            {
              item: "malum:refined_brilliance",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_elemental_arcanite",
            },
          ],
        },
        {
          type: "create:filling",
          ingredients: [
            {
              item: "ftb:incomplete_elemental_arcanite",
            },
            {
              type: "fluid_stack",
              amount: 1000,
              fluid: "integrateddynamics:liquid_chorus",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_elemental_arcanite",
            },
          ],
        },
      ],
      transitional_item: {
        id: "ftb:incomplete_elemental_arcanite",
      },
    })
    .id("ftb:create/sequenced_assembly/elemental_arcanite");

  //Adding Recipes Enchanted Books to the EnderIO Enchanter
  //Potato Recovery
  event
    .custom({
      type: "enderio:enchanting",
      cost_multiplier: 1,
      enchantment: "create:potato_recovery",
      input: {
        count: 2,
        item: "farmersdelight:potato_crate",
      },
    })
    .id("ftb:enderio/enchanting/create/potato_recovery");
  //Air Capacity
  event
    .custom({
      type: "enderio:enchanting",
      cost_multiplier: 1,
      enchantment: "create:capacity",
      input: {
        count: 2,
        item: "create:fluid_tank",
      },
    })
    .id("ftb:enderio/enchanting/create/capacity");

  event
    .custom({
      type: "create:haunting",
      ingredients: [
        {
          item: "mysticalagriculture:soulstone",
        },
      ],
      results: [
        {
          id: "malum:block_of_raw_soulstone",
        },
      ],
    })
    .id("ftb:create/haunting/soulstone_to_raw_soulstone");

  //Adding Evolutionary Matter Recipe
  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: "powah:crystal_nitro",
      },
      loops: 16,
      results: [
        {
          chance: 100.0,
          id: "ftb:evolutionary_matter",
        },
      ],
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "ftb:incomplete_evolutionary_matter",
            },
            {
              item: "malum:living_flesh",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_evolutionary_matter",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "ftb:incomplete_evolutionary_matter",
            },
            {
              item: "appflux:charged_redstone",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_evolutionary_matter",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "ftb:incomplete_evolutionary_matter",
            },
            {
              item: "hostilenetworks:overworld_prediction",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_evolutionary_matter",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "ftb:incomplete_evolutionary_matter",
            },
            {
              item: "hostilenetworks:nether_prediction",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_evolutionary_matter",
            },
          ],
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "ftb:incomplete_evolutionary_matter",
            },
            {
              item: "hostilenetworks:end_prediction",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_evolutionary_matter",
            },
          ],
        },        
        {
          type: "create:filling",
          ingredients: [
            {
              item: "ftb:incomplete_evolutionary_matter",
            },
            {
              type: "fluid_stack",
              amount: 100,
              fluid: "justdirethings:portal_fluid_source",
            },
          ],
          results: [
            {
              id: "ftb:incomplete_evolutionary_matter",
            },
          ],
        },
      ],
      transitional_item: {
        id: "ftb:incomplete_evolutionary_matter",
      },
    })
    .id("ftb:create/sequenced_assembly/evolutionary_matter");

  //Create's Limestone Recipes ====================================================================
  event.custom({
    "type": "modern_industrialization:mixer",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
      "item": "create:limestone",
      "amount": 1,
      "probability" : 0
    },
    "fluid_inputs": [
      {
        "fluid": "productivebees:honey",
        "amount": 1000,
        "probability" : 0
      },
      {
        "fluid": "minecraft:lava",
        "amount": 1000,
        "probability" : 0
      }
    ],
    "item_outputs": {
      "item": "create:limestone",
      "amount": 1
    }
  }).id("ftb:modern_industrialization/mixer/create/limestone");

  event.custom({
    "type": "xycraft_machines:extractor",
    "adjacent": [
      {
        "predicate_type": "xycraft_core:fluid_tag_rule",
        "tag": "c:honey"
      },
      {
        "fluid_type": "minecraft:lava",
        "predicate_type": "xycraft_core:fluid_type_rule"
      }
    ],
    "output": {
      "count": 1,
      "id": "create:limestone"
    },
    "target": {
      "block": "create:limestone",
      "predicate_type": "xycraft_core:block_rule"
    },
    "ticks": 100
  }).id("ftb:xycraft/extractor/create/limestone");

  // ==============================================================================================

	//Helium
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				"item": "minecraft:clock"
			},
			{
				"type": "fluid_stack",
				"amount": 900,
				"fluid": "productivemetalworks:molten_uranium"
			},
			{
				"type": "fluid_stack",
				"amount": 250,
				"fluid": "justdirethings:time_fluid_source"
			}
		],
		results: [
			{
				"amount": 1000,
				"id": "modern_industrialization:helium"
			}
		]
	}).id("ftb:create/mixing/helium");

	//Cryofluid
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				"item": "irons_spellbooks:ice_upgrade_orb"
			},
			{
				"item": "powah:dry_ice"
			},
			{
				"type": "fluid_stack",
				"amount": 500,
				"fluid": "ftb:industrial_coolant"
			},
			{
				"type": "fluid_stack",
				"amount": 500,
				"fluid": "modern_industrialization:helium"
			}
		],
		results: [
			{
				"amount": 1000,
				"id": "modern_industrialization:cryofluid"
			}
		]
	}).id("ftb:create/mixing/cryofluid");

	//Industrial Coolant
	event.custom({
		type: "create:mixing",
		ingredients: [
			{
				"tag": "c:dusts/lapis_lazuli"
			},
			{
				"type": "fluid_stack",
				"amount": 1000,
				"fluid": "minecraft:water"
			}
		],
		results: [
			{
				"amount": 1000,
				"id": "ftb:industrial_coolant"
			}
		]
	}).id("ftb:create/mixing/industrial_coolant");


  //Adding Creative recipes
  event.shapeless("create:creative_blaze_cake", [
    "create:blaze_cake",
    "ftb:creative_ascension"
    ])

  event.shapeless("create:creative_motor", [
    "create:rotation_speed_controller",
    "ftb:creative_ascension"
    ])

  event.shapeless("create:creative_fluid_tank", [
    "create:fluid_tank",
    "ftb:creative_ascension"
    ])

  event.shapeless("create:handheld_worldshaper", [
    "create:wand_of_symmetry",
    "ftb:creative_ascension",
    "create:extendo_grip"
    ])


});
