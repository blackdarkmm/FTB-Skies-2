LootJS.modifiers((event) => {
  let lootGroup = LootEntry.group(
    LootEntry.of("minecraft:wheat_seeds").when((c) => c.randomChance(0.2)),
    LootEntry.of("immersiveengineering:seed").when((c) => c.randomChance(0.1))
  );
  const silkTouch = LootEntry.of("minecraft:short_grass").when((c) =>
    c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
  );
  const shears = LootEntry.of("minecraft:short_grass").when((c) =>
    c.matchMainHand(ItemFilter.tag("c:tools/shear"))
  );
  event
    .addBlockModifier("minecraft:tall_grass")
    .removeLoot(Ingredient.all)
    .addAlternativesLoot(silkTouch, shears, lootGroup);

  event
    .addBlockModifier("minecraft:dirt")
    .addLoot(
      LootEntry.of("mysticalagriculture:dirt_essence").when((c) =>
        c.randomChance(0.15).matchMainHand(ItemFilter.tag("minecraft:shovels"))
      )
    );

  const geoOreTypes = [
    "emerald",
    "monazite",
    "nickel",
    "coal",
    "iron",
    "lapis",
    "ruby",
    "sapphire",
    "topaz",
    "zinc",
    "uraninite",
    "lead",
    "osmium",
    "platinum",
    "tin",
    "tungsten",
    "uranium",
    "redstone",
    "copper",
    "silver",
    "aluminum",
    "gold",
    "diamond",
    "ancient_debris",
    "quartz",
    "black_quartz",
  ];
  for (const oreType of geoOreTypes) {
    event
      .addBlockModifier(`geore:small_${oreType}_bud`)
      .addLoot(LootEntry.of("minecraft:sand"));
    event
      .addBlockModifier(`geore:medium_${oreType}_bud`)
      .addLoot(LootEntry.of("minecraft:sand"));
    event
      .addBlockModifier(`geore:large_${oreType}_bud`)
      .addLoot(LootEntry.of("minecraft:sand"));
  }

});

// gotta do some hacky stuff to get the end portal frame to drop
BlockEvents.broken("minecraft:end_portal_frame", event => {
  event.block.popItem("minecraft:end_portal_frame")
})
