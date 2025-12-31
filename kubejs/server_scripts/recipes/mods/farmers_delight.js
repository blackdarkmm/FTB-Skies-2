// priority: 966

ServerEvents.recipes((event) => {
  event
    .custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          tag: "c:charcoal",
        },
      ],
      result: [
        {
          item: {
            count: 1,
            id: "minecraft:black_dye",
          },
        },
      ],
      tool: {
        type: "farmersdelight:item_ability",
        action: "pickaxe_dig",
      },
    })
    .id("ftb:farmersdelight/cutting/charcoal_to_black_dye");
});

ServerEvents.recipes((event) => {
  event
    .custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          tag: "c:foods/dough",
        },
      ],
      result: [
        {
          item: {
            count: 1,
            id: "farmersdelight:raw_pasta",
          },
        },
      ],
      tool: {
        tag: "c:tools/knife"
      },
    })
    .id("farmersdelight:cutting/raw_pasta");
  })

ServerEvents.recipes((event) => {
  event
    .custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "minecraft:tuff",
        },
      ],
      result: [
        {
          item: {
            count: 1,
            id: "ftbmaterials:zinc_nugget",
          },
        },
      ],
      tool: {
        tag: "ftbstuff:hammers"
      },
    })
    .id("ftb:farmersdelight/hammering/tuff_to_zinc");

    });

ServerEvents.recipes((event) => {
  event
    .custom({
      type: "farmersdelight:cutting",
      ingredients: [
        {
          item: "minecraft:dripstone_block",
        },
      ],
      result: [
        {
          item: {
            count: 1,
            id: "minecraft:pointed_dripstone",
          },
        },
      ],
      tool: {
        tag: "ftbstuff:hammers"
      },
    })
    .id("ftb:farmersdelight/hammering/dripstone_to_pointed");



    //Readding Create Milling Integration Recipes =================================================

    const milling_recipes = [
      {input: "farmersdelight:rice_panicle", outputs: [{"id": "farmersdelight:rice"}, {"id": "farmersdelight:straw"}]},
      {input: "farmersdelight:wild_beetroots", outputs: [{"id": "minecraft:beetroot_seeds"}, {"id": "minecraft:red_dye"}]},
      {input: "farmersdelight:wild_cabbages", outputs: [{"id": "farmersdelight:cabbage_seeds"}, {"id": "minecraft:yellow_dye"}]},
      {input: "farmersdelight:wild_carrots", outputs: [{"id": "minecraft:light_gray_dye"}, {"id": "minecraft:lime_dye"}]},
      {input: "farmersdelight:wild_onions", outputs: [{"id": "minecraft:magenta_dye", "count": 1}, {"id": "minecraft:magenta_dye", "count": 3, "chance": 0.2}, {"id": "minecraft:lime_dye", "count": 1, "chance": 0.1}]},
      {input: "farmersdelight:wild_potatoes", outputs: [{"id": "minecraft:purple_dye", "count": 2}, {"id": "minecraft:lime_dye", "count": 1, "chance": 0.1}]},
      {input: "farmersdelight:wild_rice", outputs: [{"id": "farmersdelight:rice", "count": 1}, {"id": "farmersdelight:straw", "count": 1, "chance": 0.5}]},
      {input: "farmersdelight:wild_tomatoes", outputs: [{"id": "farmersdelight:tomato_seeds","count": 1}, {"id": "minecraft:green_dye","count": 1}]}
  ];

  milling_recipes.forEach(recipe => {
      let id = recipe.input.split(":")[1]
      event.custom({
          "type": "create:milling",
          "ingredients": [
              {
                  "item": recipe.input
              }
          ],
          "processing_time": 60,
          "results": recipe.outputs
      }).id(`ftb:create/milling/farmers_delight/${id}`);
  });

});
