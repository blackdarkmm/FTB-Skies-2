// priority: 987

ServerEvents.recipes((event) => {
  event.custom({
    type: "cognition:molecular_metamorphosis",
    ingredient1: {
      item: "malum:fused_consciousness",
    },
    count1: 1,
    ingredient2: {
      item: "cognition:cognitive_crystal",
    },
    count2: 64,
    ingredient3: {
      item: "minecraft:nether_star",
    },
    count3: 16,
    result: {
      id: "ftb:realized_transcendence",
      count: 1,
    },
    cost: 30970,
    processTime: 2000,
    id: "ftb:cognition/molecular_metamorphosis/realized_transcendence",
  });

  event.custom({
    type: "cognition:molecular_metamorphosis",
    ingredient1: {
      item: "apotheosis:mythic_material",
    },
    count1: 1,
    ingredient2: {
      item: "mysticalagriculture:awakened_supremium_gemstone",
    },
    count2: 32,
    ingredient3: {
      item: "enchanted:attuned_stone_charged",
    },
    count3: 4,
    result: {
      id: "ftb:primal_essence",
      count: 1,
    },
    cost: 80085,
    processTime: 3500,
    id: "ftb:cognition/molecular_metamorphosis/primal_essence",
  });

  event.custom({
    type: "cognition:molecular_metamorphosis",
    ingredient1: {
      item: "actuallyadditions:black_quartz",
    },
    count1: 1,
    ingredient2: {
      item: "mysticalagriculture:silver_essence",
    },
    count2: 16,
    ingredient3: {
      item: "enderio:grains_of_infinity",
    },
    count3: 1,
    result: {
      id: "mysticalagriculture:osmium_essence",
      count: 8,
    },
    cost: 42,
    processTime: 200,
    id: "ftb:cognition/molecular_metamorphosis/osmium_essence",
  });

  event.custom({
    type: "cognition:molecular_metamorphosis",
    ingredient1: {
      item: "malum:iridescent_ether",
    },
    count1: 1,
    ingredient2: {
      item: "oritech:plutonium_pellet",
    },
    count2: 32,
    ingredient3: {
      item: "ars_additions:sonic_boom_protection_charm",
    },
    count3: 1,
    result: {
      id: "ftb:ethereal_essence",
      count: 1,
    },
    cost: 30970,
    processTime: 1500,
    id: "ftb:cognition/molecular_metamorphosis/ethereal_essence",
  });
});
