// priority: 900

ServerEvents.recipes((event) => {
    const dripperRecipes = [
      ["minecraft:dirt", "minecraft:water", "minecraft:clay", 100, 0.2],

      [
        "minecraft:andesite",
        "minecraft:water",
        "ftb:andesite_amalgam_block",
        1000,
        0.2,
      ],
      [
        "minecraft:iron_block",
        "minecraft:lava",
        "ftbstuff:cast_iron_block",
        1000,
        0.08,
      ],
      [
        "minecraft:magma_block",
        "minecraft:lava",
        "ftbstuff:blue_magma_block",
        1000,
        0.05,
      ],
      [
        "#minecraft:leaves",
        "minecraft:water",
        "minecraft:water",
        500,
        0.05,
      ],
      [
        "minecraft:granite",
        "minecraft:water",
        "minecraft:dripstone_block",
        1000,
        0.05,
      ],      
      [
        "ftb:void_crystal_catalyst",
        "minecraft:lava",
        "xycraft_world:kivi",
        1000,
        0.05,
      ],
      [
        "minecraft:calcite",
        "minecraft:lava",
        "mysticalagriculture:prosperity_ore",
        250,
        0.05,
      ],      
      ['minecraft:tuff', "minecraft:lava", "minecraft:deepslate", 50, 0.12],
      ['minecraft:netherrack', "justdirethings:polymorphic_fluid_source", "minecraft:nether_quartz_ore", 250, 0.12],
      ['xycraft_world:kivi', "justdirethings:polymorphic_fluid_source", "replication:deepslate_replica_ore", 250, 0.12],
      ['minecraft:emerald_block', "justdirethings:polymorphic_fluid_source", "minecraft:diamond_block", 1000, 0.05],
    ];

    dripperRecipes.forEach(
      ([itemInput, fluidInput, itemOutput, fluidAmount, chance]) => {
        event
          .custom({
            type: "ftbstuff:dripper",
            chance: chance,
            input: itemInput,
            output: itemOutput,
            fluid: {
              amount: fluidAmount,
              id: fluidInput,
            },
          })
  
          .id(`ftb:stuff/dripper/${itemOutput.split(":")[1]}`);
      }
    );
});
