// priority: 980

ServerEvents.recipes((event) => {
  //Adjusting Raw Titanium Arc Furnace Recipe to produce Hot Ingots.
  event
    .custom({
      type: "immersiveengineering:arc_furnace",
      additives: [],
      energy: 25600,
      input: {
        basePredicate: {
          tag: "c:dusts/titanium",
        },
        count: 1,
      },
      results: [
        {
          item: "modern_industrialization:titanium_hot_ingot",
        },
      ],
      time: 100,
    })
    .id("ftb:immersiveengineering/arc_furnace/titanium_dust");

  //Removing IE's Arc Furnace Recycling Recipes.
  event.remove({ id: /immersiveengineering:arc_recycling_.*/ });

  event
    .custom({
      type: "immersiveengineering:coke_oven",
      creosote: 500,
      input: {
        basePredicate: {
          item: "geore:coal_shard",
        },
        count: 16,
      },
      result: {
        tag: "c:coal_coke",
      },
      time: 6000,
    })
    .id("ftb:immersiveengineering/coke_oven/coal_shard_to_coke");
});
