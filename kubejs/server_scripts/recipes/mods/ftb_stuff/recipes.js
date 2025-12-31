// priority: 900

ServerEvents.recipes((event) => {
  //Creative Items
  event.shapeless("ftbstuff:creative_low_temperature_source", [
		"minecraft:lava_bucket",
    "ftb:creative_ascension"
	])

  event.shapeless("ftbstuff:creative_high_temperature_source", [
		"ftbstuff:blue_magma_block",
    "ftb:creative_ascension"
	])

  event.shapeless("ftbstuff:creative_subzero_temperature_source", [
		"minecraft:blue_ice",
    "ftb:creative_ascension"
	])
  
  //Cobble//Basalt Generator Recipes ======================================================================
  const cobble_gen_recipes = [
    {
      type: "stone",
      material: "ftbstuff:compressed_cobblestone",
      core: "#c:glass_blocks/colorless",
      tier: 0,
    },
    {
      type: "iron",
      material: "#c:plates/iron",
      core: "#c:glass_blocks/colorless",
      tier: 1,
    },
    {
      type: "gold",
      material: "#c:plates/gold",
      core: "#c:glass_blocks/colorless",
      tier: 2,
    },
    {
      type: "diamond",
      material: "#c:plates/diamond",
      core: "#c:glass_blocks/colorless",
      tier: 3,
    },
    {
      type: "netherite",
      material: "#c:plates/netherite",
      core: "#c:glass_blocks/colorless",
      tier: 4,
    },
  ];

  cobble_gen_recipes.forEach((recipe) => {
    switch (recipe.tier) {
      case 0:
        //Basic Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_cobblestone_generator`, 1),
            ["CCC", "WGL", "CCC"],
            {
              W: "#c:buckets/water",
              G: recipe.core,
              L: "#c:buckets/lava",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/cobblestone_generator/${recipe.type}`);

        break;

      case 1:
        //Basic Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_cobblestone_generator`, 1),
            ["CBC", "WGL", "CBC"],
            {
              W: "#c:buckets/water",
              B: "ftbstuff:compressed_cobblestone_2",
              G: recipe.core,
              L: "#c:buckets/lava",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/cobblestone_generator/${recipe.type}`);
        //Upgrading Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_cobblestone_generator`, 1),
            [" C ", "CGC", " C "],
            {
              G: "ftbstuff:stone_cobblestone_generator",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/cobblestone_generator/upgrade/${recipe.type}`);
        break;

      case 2:
        //Basic Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_cobblestone_generator`, 1),
            ["CBC", "WGL", "CBC"],
            {
              W: "#c:buckets/water",
              B: "ftbstuff:compressed_cobblestone_2",
              G: recipe.core,
              L: "#c:buckets/lava",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/cobblestone_generator/${recipe.type}`);
        //Upgrading Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_cobblestone_generator`, 1),
            [" C ", "CGC", " C "],
            {
              G: "ftbstuff:iron_cobblestone_generator",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/cobblestone_generator/upgrade/${recipe.type}`);
        break;

      case 3:
        //Basic Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_cobblestone_generator`, 1),
            ["CBC", "WGL", "CBC"],
            {
              W: "#c:buckets/water",
              B: "ftbstuff:compressed_cobblestone_2",
              G: recipe.core,
              L: "#c:buckets/lava",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/cobblestone_generator/${recipe.type}`);
        //Upgrading Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_cobblestone_generator`, 1),
            [" C ", "CGC", " C "],
            {
              G: "ftbstuff:gold_cobblestone_generator",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/cobblestone_generator/upgrade/${recipe.type}`);
        break;

      case 4:
        //Basic Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_cobblestone_generator`, 1),
            ["CBC", "WGL", "CBC"],
            {
              W: "#c:buckets/water",
              B: "ftbstuff:compressed_cobblestone_2",
              G: recipe.core,
              L: "#c:buckets/lava",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/cobblestone_generator/${recipe.type}`);
        //Upgrading Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_cobblestone_generator`, 1),
            [" C ", "CGC", " C "],
            {
              G: "ftbstuff:diamond_cobblestone_generator",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/cobblestone_generator/upgrade/${recipe.type}`);
        break;

      default:
        break;
    }
  });

  const basalt_gen_recipes = [
    {
      type: "stone",
      material: "ftbstuff:compressed_basalt",
      core: "ftbstuff:tempered_glass",
      tier: 0,
    },
    {
      type: "iron",
      material: "#c:plates/iron",
      core: "ftbstuff:tempered_glass",
      tier: 1,
    },
    {
      type: "gold",
      material: "#c:plates/gold",
      core: "ftbstuff:tempered_glass",
      tier: 2,
    },
    {
      type: "diamond",
      material: "#c:plates/diamond",
      core: "ftbstuff:tempered_glass",
      tier: 3,
    },
    {
      type: "netherite",
      material: "#c:plates/netherite",
      core: "ftbstuff:tempered_glass",
      tier: 4,
    },
  ];

  basalt_gen_recipes.forEach((recipe) => {
    switch (recipe.tier) {
      case 0:
        //Basic Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_basalt_generator`, 1),
            ["CCC", "WGL", "CCC"],
            {
              W: "#c:buckets/water",
              G: recipe.core,
              L: "#c:buckets/lava",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/basalt_generator/${recipe.type}`);

        break;

      case 1:
        //Basic Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_basalt_generator`, 1),
            ["CBC", "WGL", "CBC"],
            {
              W: "#c:buckets/water",
              B: "ftbstuff:compressed_basalt_2",
              G: recipe.core,
              L: "#c:buckets/lava",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/basalt_generator/${recipe.type}`);
        //Upgrading Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_basalt_generator`, 1),
            [" C ", "CGC", " C "],
            {
              G: "ftbstuff:stone_basalt_generator",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/basalt_generator/upgrade/${recipe.type}`);
        break;

      case 2:
        //Basic Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_basalt_generator`, 1),
            ["CBC", "WGL", "CBC"],
            {
              W: "#c:buckets/water",
              B: "ftbstuff:compressed_basalt_2",
              G: recipe.core,
              L: "#c:buckets/lava",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/basalt_generator/${recipe.type}`);
        //Upgrading Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_basalt_generator`, 1),
            [" C ", "CGC", " C "],
            {
              G: "ftbstuff:iron_basalt_generator",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/basalt_generator/upgrade/${recipe.type}`);
        break;

      case 3:
        //Basic Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_basalt_generator`, 1),
            ["CBC", "WGL", "CBC"],
            {
              W: "#c:buckets/water",
              B: "ftbstuff:compressed_basalt_2",
              G: recipe.core,
              L: "#c:buckets/lava",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/basalt_generator/${recipe.type}`);
        //Upgrading Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_basalt_generator`, 1),
            [" C ", "CGC", " C "],
            {
              G: "ftbstuff:gold_basalt_generator",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/basalt_generator/upgrade/${recipe.type}`);
        break;

      case 4:
        //Basic Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_basalt_generator`, 1),
            ["CBC", "WGL", "CBC"],
            {
              W: "#c:buckets/water",
              B: "ftbstuff:compressed_basalt_2",
              G: recipe.core,
              L: "#c:buckets/lava",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/basalt_generator/${recipe.type}`);
        //Upgrading Recipe
        event
          .shaped(
            Item.of(`ftbstuff:${recipe.type}_basalt_generator`, 1),
            [" C ", "CGC", " C "],
            {
              G: "ftbstuff:diamond_basalt_generator",
              C: recipe.material,
            }
          )
          .id(`ftb:stuff/basalt_generator/upgrade/${recipe.type}`);
        break;

      default:
        break;
    }
  });

  event
    .shapeless(Item.of("ftb:cloth_mesh"), ["ftbstuff:cloth_mesh"])
    .id("ftb:cloth_mesh_conversion");
  event
    .shapeless(Item.of("ftbstuff:cloth_mesh"), ["ftb:cloth_mesh"])
    .id("ftb:cloth_mesh_conversion_reverse");

  event.shaped("ftbstuff:pump", ["BBB", "SSS", "PPP"], {
      B: "minecraft:water_bucket",
      S: "minecraft:stone",
      P: "#minecraft:planks",
  }).id("ftb:ftbstuff_pump");

  event.shaped("ftbstuff:pump", ["BBB", "SSS", "PPP"], {
      B: 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]',
      S: "minecraft:stone",
      P: "#minecraft:planks",
  }).id("ftb:ftbstuff_pump_ceramic");
  // Mesh Recipes =================================================================================

  function upgrade_mesh(base_mesh, next_mesh, upgrade_material) {
    event
      .shaped(Item.of(`ftb:${next_mesh}_mesh`, 1), [" M ", "MBM", " M "], {
        B: `ftb:${base_mesh}_mesh`,
        M: upgrade_material,
      })
      .id(`ftb:mechanical/upgrade/${next_mesh}_mesh`);
  }

  const mesh_recipes = [
    {
      base: "cloth",
      upgradeMaterial: "minecraft:iron_ingot",
      nextTier: "iron",
    },
    {
      base: "iron",
      upgradeMaterial: "minecraft:gold_ingot",
      nextTier: "gold",
    },
    {
      base: "gold",
      upgradeMaterial: "minecraft:diamond",
      nextTier: "diamond",
    },
    {
      base: "diamond",
      upgradeMaterial: "minecraft:blaze_rod",
      nextTier: "blazing",
    },
  ];

  mesh_recipes.forEach((mesh) => {
    upgrade_mesh(mesh.base, mesh.nextTier, mesh.upgradeMaterial);
  });

  // ==============================================================================================

  //Adding Recipes for Crushed Blocks to the Create Crusher =======================================
  const crushed_blocks = [
    {input: "ftbstuff:compressed_basalt", output: "ftbstuff:crushed_basalt", count: 9},
    {input: "ftbstuff:compressed_end_stone", output: "ftbstuff:crushed_endstone", count: 9},
    {input: "ftbstuff:compressed_netherrack", output: "ftbstuff:crushed_netherrack", count: 9},
    {input: "xycraft_world:kivi", output: "ftb:crushed_kivi", count: 1}
  ];

  crushed_blocks.forEach(block => {
    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                "item": block.input
            }
        ],
        processing_time: 250,
        results: [
            {
                "id": block.output,
                "count": block.count
            }
        ]
    }).id(`ftb:create/crushing/crushed_blocks/${block.output.split("_")[1]}`)
  });

  // ==============================================================================================

  // Adding more Ways to get Tempered Glass
  event.blasting("ftbstuff:tempered_glass", "#c:glass_panes/colorless").cookingTime(200).id("ftb:smelting/ftbstuff/tempered_glass");

	event.custom({
    type: "modern_industrialization:blast_furnace",
    duration: 100,
    eu: 64,
    item_inputs: [
      {
        "amount": 1,
        "tag": "c:glass_panes/colorless"
      }
    ],
    item_outputs: [
      {
        "amount": 1,
        "item": "ftbstuff:tempered_glass"
      }
    ]
  }).id("ftb:blast_furnace/ftbstuff/tempered_glass");

  event.custom({
      type: "productivemetalworks:block_casting",
      cast: {
        tag: "c:glass_panes/colorless",
      },
      consume_cast: true,
      fluid: {
        amount: 375,
        tag: "c:molten_glass",
      },
      result: {
        count: 2,
        id: "ftbstuff:tempered_glass",
      }
  }).id("ftb:casting/ftbstuff/tempered_glass");

  // Adding more Ways to get Cast Iron
  event.blasting("ftbstuff:cast_iron_ingot", "#c:ingots/iron").cookingTime(400).id("ftb:smelting/ftbstuff/cast_iron");
  
	event.custom({
    type: "modern_industrialization:blast_furnace",
    duration: 100,
    eu: 64,
    item_inputs: [
      {
        "amount": 1,
        "tag": "c:ingots/iron"
      },
      {
        "amount": 1,
        "tag": "c:dusts/carbon"
      }
    ],
    item_outputs: [
      {
        "amount": 2,
        "item": "ftbstuff:cast_iron_ingot"
      }
    ]
  }).id("ftb:blast_furnace/ftbstuff/cast_iron");

  event.custom({
    type: "productivemetalworks:block_casting",
    cast: {
      tag: "c:ingots/iron",
    },
    consume_cast: true,
    fluid: {
      amount: 100,
      tag: "c:molten_carbon",
    },
    result: {
      count: 2,
      id: "ftbstuff:cast_iron_ingot",
    }
}).id("ftb:casting/ftbstuff/cast_iron");

event.shaped(
		Item.of("ftb:faux_amethyst_block", 16),
		["DX", "XD"],
		{
			X: "minecraft:calcite",
			D: "minecraft:purple_stained_glass",
		}
	).id("ftb:skies/faux_amethyst");

});
