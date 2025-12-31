// priority: 50

removeRecipe.push(
  "enderio:iron_gear",
  "enderio:item.minecraft.copper_ingot_from_blasting",
  "enderio:item.minecraft.copper_ingot_from_smelting",
  "enderio:item.minecraft.gold_ingot_from_blasting",
  "enderio:item.minecraft.gold_ingot_from_smelting",
  "enderio:item.minecraft.iron_ingot_from_blasting",
  "enderio:item.minecraft.iron_ingot_from_smelting",
  "enderio:sag_milling/lapis_ore",
  "enderio:sag_milling/copper_ore",
  "enderio:sag_milling/gold_ore",
  "enderio:sag_milling/iron_ore",
  "enderio:sag_milling/copper",
  "enderio:sag_milling/iron",
  "enderio:sag_milling/copper",
  "enderio:sag_milling/raw_iron",
  "enderio:sag_milling/raw_copper",
  "enderio:sag_milling/raw_gold",
  "enderio:sag_milling/gold"
);

removeItem.push(
  "enderio:silicon",
  "enderio:iron_gear",
  "enderio:flour",
  "enderio:powdered_coal",
  "enderio:powdered_iron",
  "enderio:powdered_gold",
  "enderio:powdered_copper",
  "enderio:powdered_tin",
  "enderio:powdered_ender_pearl",
  "enderio:powdered_obsidian",
  "enderio:powdered_cobalt",
  "enderio:powdered_lapis_lazuli",
  "enderio:powdered_quartz"
);

ServerEvents.recipes((event) => {
  // Add SAG milling recipes for FTB materials
  resourceOresIngots.forEach((mod) => {
    mod.materials.forEach((material) => {
      const rawMaterialTag = `${tagPrefix}:raw_materials/${material}`;
      const oreTag = `${tagPrefix}:ores/${material}`;
      const ingotTag = `${tagPrefix}:ingots/${material}`;
      const dust = `ftbmaterials:${material}_dust`;

      // Raw Ores -> Dust
      addRecipeEnderIOSagMilling(
        event,
        rawMaterialTag,
        [
          [`ftbmaterials:${material}_dust`, 1],
          [`ftbmaterials:${material}_dust`, 1, 0.33],
        ],
        `ftb:enderio/sag_mill/raw_materials/${material}`,
        true
      );

      // Ores -> Raw Ores
      addRecipeEnderIOSagMilling(
        event,
        oreTag,
        [
          [getRawOreId(material), 2],
          [getRawOreId(material), 1, 0.25],
        ],
        `ftb:enderio/sag_mill/ores/${material}`,
        true
      );

      // Ingots -> Dusts
      addRecipeEnderIOSagMilling(event, ingotTag, [[dust, 1]], `ftb:enderio/sag_mill/ingots/${material}`, false);
    });
  });

  // Loop For Gem Ores
  resourcesOresGem.forEach((mod) => {
    mod.materials.forEach((material) => {
      const gemType = material[0];
      let oreTag = `${tagPrefix}:ores/${gemType}`;
      if (oreTag === "c:ores/lapis_lazuli") {
        oreTag = "c:ores/lapis";
      }
      const outputId = material[2] ?? `${mod.modID}:${gemType}`;
      const outputAmount = material[1] ?? 1;

      // Ore -> Gem
      addRecipeEnderIOSagMilling(
        event,
        oreTag,
        [
          [outputId, outputAmount],
          [outputId, Math.max(1, Math.floor(outputAmount / 2)), 0.33],
        ],
        `ftb:enderio/sagmill/ores/${gemType}`
      );
    });
  });

  enabledAlloys.forEach((material) => {
    const ingotTag = `${tagPrefix}:ingots/${material}`;
    const dust = `ftbmaterials:${material}_dust`;

    // Ingot -> Dusts
    addRecipeEnderIOSagMilling(event, ingotTag, [[dust, 1]], `ftb:enderio/sag_mill/ingots/${material}`, false);
  });

  //Manually Added Recipes ======================================================================

  addRecipeEnderIOAlloySmelting(
    event,
    ["c:ingots/gold", "c:ingots/silver"],
    ["ftbmaterials:electrum_ingot", 1],
    "ftb:enderio/alloy_smelting/electrum"
  );

  //Salt Crushing
  addRecipeEnderIOSagMilling(
    event,
    "c:gems/salt",
    [
      ["ftbmaterials:salt_dust", 2],
      ["ftbmaterials:salt_dust", Math.max(1, Math.floor(2 / 2)), 0.33],
    ],
    `ftb:enderio/sagmill/gems/salt`
  );
});
