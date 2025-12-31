// priority: 955

ServerEvents.recipes((event) => {
  event
    .custom({
      type: "xycraft_machines:extractor",
      adjacent: [
        {
          fluid_type: "productivemetalworks:molten_ender",
          predicate_type: "xycraft_core:fluid_type_rule",
        },
        {
          block: "minecraft:sculk_catalyst",
          predicate_type: "xycraft_core:block_rule",
        },
        {
          block: "minecraft:end_stone",
          predicate_type: "xycraft_core:block_rule",
        },
      ],
      output: {
        count: 1,
        id: "minecraft:sculk",
      },
      target: {
        block: "minecraft:sculk",
        predicate_type: "xycraft_core:block_rule",
      },
      ticks: 30,
    })
    .id("ftb:xycraft_machines/extractor/sculk_from_sculk_catalyst");

    //Adding Fluid Dye + Lava Interaction Recipes to the Extractor.
    const colors = [
      "white",
      "light_gray",
      "gray",
      "black",
      "lime",
      "yellow",
      "orange",
      "brown",
      "red",
      "pink",
      "magenta",
      "purple",
      "blue",
      "light_blue",
      "cyan",
      "green"
    ];

    colors.forEach(color => {

      event.custom({
        "type": "xycraft_machines:extractor",
        "adjacent": [
          {
            "predicate_type": "xycraft_core:fluid_type_rule",
            "fluid_type": `create_dragons_plus:${color}_dye`
          },
          {
            "predicate_type": "xycraft_core:fluid_type_rule",
            "fluid_type": "minecraft:lava"
          }
        ],
        "output": {
          "count": 1,
          "id": `minecraft:${color}_concrete`
        },
        "target": {
          "block": `minecraft:${color}_concrete`,
          "predicate_type": "xycraft_core:block_rule"
        },
        "ticks": 30
      }).id(`ftb:xycraft_machines/extractor/create_fluid_dye/${color}`)

    });

});
