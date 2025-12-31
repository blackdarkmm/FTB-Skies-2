removeRecipe.push("silentgear:bronze_ingot", "silentgear:stone_rod", "silentgear:crude_mixer");

removeItem.push("silentgear:crude_mixer");

ServerEvents.recipes((event) => {
  event.shapeless("minecraft:string", ["silentgear:fluffy_string"]).id("ftb:silent_gear/string");
});
