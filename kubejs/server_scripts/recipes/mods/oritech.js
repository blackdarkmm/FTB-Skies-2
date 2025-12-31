// priority: 970

ServerEvents.recipes((event) => {
  //Making Bio Polymer with Kelp Goo
  event
    .custom({
      type: "oritech:centrifuge_fluid",
      fluidInput: {
        amount: 250,
        fluid: "minecraft:water",
      },
      fluidOutput: {
        amount: 0,
        fluid: "minecraft:empty",
      },
      ingredients: [
        {
          item: "ftb:kelp_goo",
        },
      ],
      results: [
        {
          count: 1,
          id: "oritech:raw_biopolymer",
        },
      ],
      time: 200,
    })
    .id("ftb:oritech/centrifuge/fluid/raw_biopolymer_with_kelp_goo");

  event
    .custom({
      type: "oritech:particle_collision",
      fluidInput: {
        amount: 0,
        fluid: "minecraft:empty",
      },
      fluidOutputs: [],
      ingredients: [
        {
          item: "minecraft:nether_star",
        },
        {
          item: "irons_spellbooks:divine_soulshard",
        },
      ],
      results: [
        {
          count: 8,
          id: "fargostalismans:abominable_energy",
        },
      ],
      time: 15000,
    })
    .id("ftb:oritech/particle_collision/abominable_energy");

  event
    .custom({
      type: "oritech:particle_collision",
      fluidInput: {
        amount: 0,
        fluid: "minecraft:empty",
      },
      fluidOutputs: [],
      ingredients: [
        {
          item: "occultism:trinity_gem",
        },
        {
          item: "cognition:primordial_assembly",
        },
      ],
      results: [
        {
          count: 1,
          id: "ftb:evolutionary_arcanum",
        },
      ],
      time: 15000,
    })
    .id("ftb:oritech/particle_collision/evolutionary_arcanum");

  event
    .custom({
      type: "oritech:assembler",
      fluidInput: {
        amount: 0,
        fluid: "minecraft:empty",
      },
      fluidOutputs: [],
      ingredients: [
        {
          item: "minecraft:sculk",
        },
        {
          tag: "c:nether_stars",
        },
        {
          item: "mekanism:teleportation_core",
        },
        {
          item: "oritech:flux_gate",
        },
      ],
      results: [
        {
          count: 4,
          id: "minecraft:end_portal_frame",
        },
      ],
      time: 360,
    })
    .id("ftb:oritech/assembler/end_portal_frame");

    //positron Matrix
    event.custom({
      type: "oritech:particle_collision",
      fluidInput: {
        amount: 0,
        fluid: "minecraft:empty",
      },
      fluidOutputs: [],
      ingredients: [
        {
          item: "minecraft:dragon_breath",
        },
        {
          item: "mekanism:pellet_antimatter",
        },
      ],
      results: [
        {
          count: 1,
          id: "ftb:positron_matrix",
        },
      ],
      time: 50000,
    }).id("ftb:oritech/particle_collision/positron_matrix");

    //Fixing Polymer Resin Manual Recipe Unification.
    event.replaceInput(
      { id: "oritech:crafting/manualresin" },
      "oritech:still_naphtha_bucket",
      "modern_industrialization:naphtha_bucket"
    );

});
