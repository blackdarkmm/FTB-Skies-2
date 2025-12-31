// priority: 960

const beeConversions = [
  {
    source: "productivebees:oily",
    result: "minecraft:bee",
    item: "mysticalagriculture:nature_essence",
  },
  {
    source: "productivebees:prismarine",
    result: "minecraft:bee",
    item: "mysticalagriculture:nature_essence",
  },
  {
    source: "productivebees:water",
    result: "minecraft:bee",
    item: "mysticalagriculture:nature_essence",
  },
  {
    source: "productivebees:sponge",
    result: "minecraft:bee",
    item: "mysticalagriculture:nature_essence",
  },
];

ServerEvents.recipes((event) => {
  beeConversions.forEach((entry) => {
    const sourceId = entry.source.split(":")[1];
    const resultId = entry.result.split(":")[1];
    const recipeId = `ftb:bee_conversion/${sourceId}_to_${resultId}`;

    event
      .custom({
        type: "productivebees:bee_conversion",
        source: entry.source,
        result: entry.result,
        item: {
          item: entry.item,
        },
      })
      .id(recipeId);
  });
});
