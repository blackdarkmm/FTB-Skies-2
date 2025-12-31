// priority: 990

ServerEvents.recipes((event) => {
  function idFrom(itemId, prefix) {
    const parts = itemId.split(":");
    return `${prefix}/${parts[1]}`;
  }

  // --- Advanced AE Reactions ---
  const advancedAeReactions = [
    {
      energy: 5000000,
      fluid: { amount: 10000, fluid: "modern_industrialization:cryofluid" },
      items: [
        { ingredient: { item: "advanced_ae:quantum_core" } },
        {
          amount: 4,
          ingredient: {
            item: "modern_industrialization:ultradense_metal_ball",
          },
        },
        { amount: 16, ingredient: { item: "advanced_ae:quantum_alloy_plate" } },
        { amount: 64, ingredient: { item: "ae2:singularity" } },
      ],
      output: "ftb:ultimate_singularity",
      outputAmount: 1,
    },
    {
      energy: 5000000,
      fluid: { amount: 10000, fluid: "mekanismgenerators:fusion_fuel" },
      items: [
        { amount: 16, ingredient: { item: "mekanism:pellet_antimatter" } },
        { amount: 1, ingredient: { item: "mekanism:qio_drive_supermassive" } },
        {
          amount: 8,
          ingredient: { item: "mekanism:ultimate_induction_provider" },
        },
        {
          amount: 4,
          ingredient: { item: "oritech:prometheum_ingot" },
        },
      ],
      output: "ftb:mekanized_super_computer",
      outputAmount: 1,
    },
    {
      energy: 2500000,
      fluid: {
        amount: 10000,
        fluid: "immersiveengineering:high_power_biodiesel",
      },
      items: [
        {
          amount: 5,
          ingredient: { item: "mekanism:reprocessed_fissile_fragment" },
        },
        { amount: 4, ingredient: { item: "powah:ender_gate_nitro" } },
        {
          amount: 1,
          ingredient: { item: "modern_industrialization:he_uranium_fuel_rod" },
        },
      ],
      output: "ftb:supercritical_mass",
      outputAmount: 1,
    },
    {
      energy: 25000,
      fluid: {
        amount: 100,
        fluid: "productivemetalworks:molten_blaze",
      },
      items: [
        {
          amount: 1,
          ingredient: { item: "ae2:fluix_dust" },
        },
        {
          amount: 1,
          ingredient: { item: "ae2:ender_dust" },
        },
      ],
      output: "fluxnetworks:flux_dust",
      outputAmount: 2,
    },
  ];

  advancedAeReactions.forEach((r) => {
    event
      .custom({
        type: "advanced_ae:reaction",
        input_energy: r.energy,
        input_fluid: {
          amount: r.fluid.amount,
          ingredient: { fluid: r.fluid.fluid },
        },
        input_items: r.items,
        output: {
          "#": r.outputAmount,
          "#t": "ae2:i",
          id: r.output,
        },
      })
      .id(idFrom(r.output, "ftb:reaction"));
  });

  // --- Fluid Transforms ---
  const fluidTransforms = [
    {
      fluidTag: "minecraft:lava",
      ingredients: [
        { item: "enderio:grains_of_infinity" },
        { tag: "ae2:all_nether_quartz" },
      ],
      result: { count: 2, id: "actuallyadditions:black_quartz" },
    },
    {
      fluidTag: "c:molten_ender",
      ingredients: [
        { item: "minecraft:iron_block" },
        { item: "cognition:cognitive_flux", count: 2 },
      ],
      result: { count: 1, id: "ftbmaterials:aluminum_block" },
    },
    {
      fluidTag: "c:molten_ender",
      ingredients: [
        { item: "ftbmaterials:silver_block" },
        { item: "cognition:primordial_assembly", count: 1 },
        { item: "ftbmaterials:obsidian_dust", count: 4 },
      ],
      result: { count: 1, id: "geore:budding_osmium" },
    },
    {
      fluidTag: "c:molten_kivi",
      ingredients: [
        { tag: "c:dyes/white" },
        { item: "ftbmaterials:quartz_dust" },
      ],
      result: { count: 4, id: "xycraft_world:xychorium_gem_light" },
    },
    {
      fluidTag: "c:molten_kivi",
      ingredients: [
        { tag: "c:dyes/black" },
        { item: "ftbmaterials:quartz_dust" },
      ],
      result: { count: 4, id: "xycraft_world:xychorium_gem_dark" },
    },
    {
      fluidTag: "c:molten_kivi",
      ingredients: [
        { tag: "c:dyes/red" },
        { item: "ftbmaterials:quartz_dust" },
      ],
      result: { count: 4, id: "xycraft_world:xychorium_gem_red" },
    },
    {
      fluidTag: "c:molten_kivi",
      ingredients: [
        { tag: "c:dyes/green" },
        { item: "ftbmaterials:quartz_dust" },
      ],
      result: { count: 4, id: "xycraft_world:xychorium_gem_green" },
    },
    {
      fluidTag: "c:molten_kivi",
      ingredients: [
        { tag: "c:dyes/blue" },
        { item: "ftbmaterials:quartz_dust" },
      ],
      result: { count: 4, id: "xycraft_world:xychorium_gem_blue" },
    },
  ];

  fluidTransforms.forEach((r) => {
    event
      .custom({
        type: "ae2:transform",
        circumstance: { type: "fluid", tag: r.fluidTag },
        ingredients: r.ingredients,
        result: r.result,
      })
      .id(idFrom(r.result.id, "ftb:ae2/transform"));
  });

  // --- Static Recipes ---
  event
    .custom({
      type: "extendedae:crystal_assembler",
      input_items: [
        { ingredient: { item: "extendedae:assembler_matrix_wall" } },
        { ingredient: { item: "extendedae:ex_pattern_provider" } },
        { amount: 6, ingredient: { item: "ae2:blue_lumen_paint_ball" } },
        { ingredient: { item: "ae2:engineering_processor" } },
      ],
      output: {
        count: 1,
        id: "extendedae:assembler_matrix_pattern",
      },
    })
    .id("ftb:assembler/assembler_matrix_pattern");

  event
    .shaped(Item.of("ae2:not_so_mysterious_cube", 24), ["SPS", "PCP", "SPS"], {
      C: "ae2:controller",
      P: "#ae2:inscriber_presses",
      S: "ae2:smooth_sky_stone_block",
    })
    .id("ftb:ae2/shaped/not_so_mysterious_cube");

  //Alternate Supercritical Mass Recipe without MI

  event.custom({
    type: "advanced_ae:reaction",
    input_energy: 5000000,
    input_fluid: {
      "amount": 16000,
      "ingredient": {
        "fluid": "immersiveengineering:high_power_biodiesel"
      }
    },
    input_items: [
      {
        "amount": 5,
        "ingredient": {
          "item": "mekanism:reprocessed_fissile_fragment"
        }
      },
      {
        "amount": 4,
        "ingredient": {
          "item": "powah:ender_gate_nitro"
        }
      },
      {
        "amount": 16,
        "ingredient": {
          "item": "oritech:low_yield_nuke"
        }
      },
      {
        "amount": 16,
        "ingredient": {
          "item": "powah:crystal_niotic"
        }
      }
    ],
    output: {
      "#": 1,
      "#t": "ae2:i",
      id: "ftb:supercritical_mass",
    },
  }).id("ftb:ae2/transform/supercritical_mass_non_mi");

  //Alternate Bio Neural Circuit Recipe without MI

  event.custom({
    type: "advanced_ae:reaction",
    input_energy: 4916000,
    input_fluid: {
      "amount": 10000,
      "ingredient": {
        "fluid": "mffs:fortron_fluid"
      }
    },
    input_items: [
      {
        "amount": 4,
        "ingredient": {
          "item": "geneticsresequenced:dna_helix"
        }
      },
      {
        "amount": 1,
        "ingredient": {
          "tag": "c:ingots/energite"
        }
      },
      {
        "amount": 4,
        "ingredient": {
          "item": "ftb:positron_matrix"
        }
      },
      {
        "amount": 64,
        "ingredient": {
          "tag": "c:circuits/ultimate"
        }
      },
      {
        "amount": 16,
        "ingredient": {
          "item": "oritech:super_ai_chip"
        }
      }
    ],
    output: {
      "#": 1,
      "#t": "ae2:i",
      id: "ftb:bio_neural_circuit",
    },
  }).id("ftb:ae2/transform/bio_neural_circuit_non_mi");

  event
    .custom({
      type: "ae2:transform",
      circumstance: {
        type: "fluid",
        tag: "minecraft:lava",
      },
      ingredients: [
        {
          item: "refinedstorage:quartz_enriched_iron",
        },
        {
          item: "ae2:sky_stone_block",
        },
      ],
      result: {
        count: 1,
        id: "megacells:sky_steel_ingot",
      },
    })
    .id("ftb:megacells/sky_steel_ingot_from_lava");

  event
    .shapeless("ae2:tiny_tnt", [
      "enderio:grains_of_infinity",
      "2x minecraft:paper",
      "minecraft:gunpowder",
    ])
    .id("ftb:ae2/tiny_tnt_from_grains_of_infinity");
});
