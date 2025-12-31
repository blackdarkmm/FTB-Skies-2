// priority: 50

removeOre.push("malum:natural_quartz_ore", "malum:deepslate_quartz_ore");

removeRecipe.push(
  "malum:natural_quartz_from_deepslate_blasting",
  "malum:natural_quartz_from_blasting",
  "malum:natural_quartz_from_deepslate_smelting",
  "malum:natural_quartz_from_smelting",
  "malum:create/crushing/ore/crush_natural_quartz_ore",
  "malum:create/crushing/ore/crush_natural_quartz_deepslate_ore",
  "malum:arcane_charcoal_from_runewood",
  "malum:arcane_charcoal_from_soulwood"
);

ServerEvents.tags("item", (event) => {
  //Removing Natural Quartz from the Quartz Tag.
  event.add("c:ores/natural_quartz", "malum:natural_quartz_ore");
  event.add("c:ores/natural_quartz", "malum:deepslate_quartz_ore");
  event.removeAllTagsFrom("malum:natural_quartz");

  //Adding Specific Tags in order to fix Malum's Arcane Charcoal Recipe.
  const non_arcane_logs = event.get("minecraft:logs").getObjectIds();
  non_arcane_logs.forEach((log) => {
    if (Ingredient.of(/.*runewood.*/).test(log) || Ingredient.of(/.*soulwood.*/).test(log)) {
      event.add("ftb:arcane_logs", log);
    } else if (Ingredient.of(/.*netherwood.*/).test(log)) {
      event.add("ftb:excluded_logs", log);
    } else {
      event.add("ftb:non_arcane_logs", log);
    }
  });
});

ServerEvents.recipes((event) => {
  //Fixing Malum's Arcane Charcoal Recipe.
  event.replaceInput({ id: "minecraft:charcoal" }, "#minecraft:logs", "#ftb:non_arcane_logs");
  event.replaceInput({ id: "utilitarian:utility/charcoal_from_campfire" }, "#minecraft:logs", "#ftb:non_arcane_logs");
  event.smelting("malum:arcane_charcoal", "#ftb:arcane_logs");
  event.campfireCooking("malum:arcane_charcoal", "#ftb:arcane_logs", 0.35, 600);
});
