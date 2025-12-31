// priority: 960

ServerEvents.recipes((event) => {
  event
    .custom({
      type: "productivemetalworks:block_casting",
      cast: {
        item: "ftb:void_crystal_catalyst",
      },
      consume_cast: true,
      fluid: {
        amount: 400,
        tag: "c:molten_emerald",
      },
      result: {
        count: 1,
        id: "geore:budding_emerald",
      },
    })
    .id("ftb:productive_metalworks/budding_emerald_casting");

  event
    .custom({
      type: "productivemetalworks:block_casting",
      cast: {
        item: "ftb:void_crystal_catalyst",
      },
      consume_cast: true,
      fluid: {
        amount: 400,
        tag: "c:molten_amethyst",
      },
      result: {
        count: 1,
        id: "minecraft:budding_amethyst",
      },
    })
    .id("ftb:productive_metalworks/budding_amethyst_casting");


  event
    .custom({
      type: "productivemetalworks:block_casting",
      cast: {
        item: "minecraft:enchanted_golden_apple",
      },
      consume_cast: true,
      fluid: {
        amount: 400,
        tag: "c:molten_ender",
      },
      result: {
        count: 1,
        id: "ftb:ender_apple",
      },
    })
    .id("ftb:productive_metalworks/ender_apple_casting");


  event
    .custom({
      type: "productivemetalworks:block_casting",
      cast: {
        item: "ftb:void_crystal_catalyst",
      },
      consume_cast: true,
      fluid: {
        amount: 900,
        tag: "c:molten_diamond",
      },
      result: {
        count: 1,
        id: "geore:budding_diamond",
      },
    })
    .id("ftb:productive_metalworks/budding_diamond_casting");

  event
    .custom({
      type: "productivemetalworks:block_casting",
      cast: {
        item: "ftb:void_crystal_catalyst",
      },
      consume_cast: true,
      fluid: {
        amount: 810,
        tag: "c:molten_aluminum",
      },
      result: {
        count: 1,
        id: "geore:budding_aluminum",
      },
    })
    .id("ftb:productive_metalworks/budding_aluminum_casting");

  event
    .custom({
      type: "productivemetalworks:block_casting",
      cast: {
        item: "ftb:void_crystal_catalyst",
      },
      consume_cast: true,
      fluid: {
        amount: 810,
        tag: "c:molten_osmium",
      },
      result: {
        count: 1,
        id: "geore:budding_osmium",
      },
    })
    .id("ftb:productive_metalworks/budding_osmium_casting");

  event
    .custom({
      type: "productivemetalworks:block_casting",
      cast: {
        item: "ftb:void_crystal_catalyst",
      },
      consume_cast: true,
      fluid: {
        amount: 810,
        tag: "c:molten_platinum",
      },
      result: {
        count: 1,
        id: "geore:budding_platinum",
      },
    })
    .id("ftb:productive_metalworks/budding_platinum_casting");

  event
    .custom({
      type: "productivemetalworks:block_casting",
      cast: {
        item: "ftb:void_crystal_catalyst",
      },
      consume_cast: true,
      fluid: {
        amount: 810,
        tag: "c:molten_uranium",
      },
      result: {
        count: 1,
        id: "geore:budding_uranium",
      },
    })
    .id("ftb:productive_metalworks/budding_uranium_casting");
    
  event
    .custom({
      type: "productivemetalworks:block_casting",
      cast: {
        item: "ftb:void_crystal_catalyst",
      },
      consume_cast: true,
      fluid: {
        amount: 810,
        tag: "c:molten_silver",
      },
      result: {
        count: 1,
        id: "geore:budding_silver",
      },
    })
    .id("ftb:productive_metalworks/budding_silver");

  event
    .custom({
      type: "productivemetalworks:block_casting",
      cast: {
        item: "ftb:void_crystal_catalyst",
      },
      consume_cast: true,
      fluid: {
        amount: 400,
        tag: "c:molten_quartz",
      },
      result: {
        count: 1,
        id: "geore:budding_quartz",
      },
    })
    .id("ftb:productive_metalworks/budding_quartz_casting");

  event
    .custom({
      type: "productivemetalworks:block_casting",
      cast: {
        item: "geore:budding_diamond",
      },
      consume_cast: true,
      fluid: {
        amount: 810,
        tag: "c:molten_netherite",
      },
      result: {
        count: 1,
        id: "geore:budding_ancient_debris",
      },
    })
    .id("ftb:productive_metalworks/budding_ancient_debris_casting");

  event
    .custom({
      type: "productivemetalworks:block_casting",
      cast: {
        item: "ftb:void_crystal_catalyst",
      },
      consume_cast: true,
      fluid: {
        amount: 810,
        tag: "c:molten_zinc",
      },
      result: {
        count: 1,
        id: "geore:budding_zinc",
      },
    })
    .id("ftb:productive_metalworks/budding_zinc_casting");

  event
    .custom({
      type: "productivemetalworks:item_melting",
      ingredient: {
        item: "ftb:crushed_kivi",
      },
      maximum_temperature: 0,
      minimum_temperature: 1000,
      result: [
        {
          amount: 1000,
          id: "ftb:molten_kivi",
        },
      ],
    })
    .id("ftb:productive_metalworks/melting_kivi_crushed");

 const materials = [
  {
    name: "diamond",
    fluid: "c:molten_diamond",
    type: "gem",
    results: {
      helmet: "minecraft:diamond_helmet",
      chestplate: "minecraft:diamond_chestplate",
      leggings: "minecraft:diamond_leggings",
      boots: "minecraft:diamond_boots",
    },
  },
  {
    name: "steel",
    fluid: "c:molten_steel",
    type: "ingot",
    results: {
      helmet: "mekanismtools:steel_helmet",
      chestplate: "mekanismtools:steel_chestplate",
      leggings: "mekanismtools:steel_leggings",
      boots: "mekanismtools:steel_boots",
    },
  },
  {
    name: "refined_obsidian",
    fluid: "c:molten_refined_obsidian",
    type: "ingot",
    results: {
      helmet: "mekanismtools:refined_obsidian_helmet",
      chestplate: "mekanismtools:refined_obsidian_chestplate",
      leggings: "mekanismtools:refined_obsidian_leggings",
      boots: "mekanismtools:refined_obsidian_boots",
    },
  },
  {
    name: "osmium",
    fluid: "c:molten_osmium",
    type: "ingot",
    results: {
      helmet: "mekanismtools:osmium_helmet",
      chestplate: "mekanismtools:osmium_chestplate",
      leggings: "mekanismtools:osmium_leggings",
      boots: "mekanismtools:osmium_boots",
    },
  },
];

const pieceData = {
  helmet: { tag: "ftb:upgradable_helmets", ingots: 5 },
  chestplate: { tag: "ftb:upgradable_chestplates", ingots: 8 },
  leggings: { tag: "ftb:upgradable_leggings", ingots: 7 },
  boots: { tag: "ftb:upgradable_boots", ingots: 4 },
};

materials.forEach((mat) => {
  const mbPerUnit = mat.type === "gem" ? 100 : 90;

  Object.entries(mat.results).forEach(([piece, resultId]) => {
    const baseTag = pieceData[piece].tag;
    const amount = pieceData[piece].ingots * mbPerUnit;
    const outputName = resultId.split(":")[1];

    event.custom({
      type: "productivemetalworks:block_casting",
      cast: { tag: baseTag },
      consume_cast: true,
      fluid: { amount: amount, tag: mat.fluid },
      result: { count: 1, id: resultId },
    }).id(`ftb:productive_metalworks/${outputName}_casting`);
  });
});



});
