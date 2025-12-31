// priority: 50

removeRecipe.push("actuallyadditions:coal_to_tiny", "actuallyadditions:tiny_to_coal");

ServerEvents.recipes((event) => {
  // Loop For Resource Ores
  resourceOresIngots.forEach((mod) => {
    mod.materials.forEach((material) => {
      const oreTag = `${tagPrefix}:ores/${material}`;
      const ingotTag = `${tagPrefix}:ingots/${material}`;
      const dust = `ftbmaterials:${material}_dust`;

      // Ore -> Crushed
      addRecipeActuallyAdditionsCrushing(
        event,
        oreTag,
        [
          [getRawOreId(material), 2],
          [getRawOreId(material), 1, 0.25],
        ],
        `ftb:actually_additions/crushing/ores/${material}`
      );

      // Ingot -> Dust
      addRecipeActuallyAdditionsCrushing(
        event,
        ingotTag,
        [[dust]],
        `ftb:actually_additions/crushing/ingots/${material}`
      );
    });
  });

  // Loop For Gem Ores
  resourcesOresGem.forEach((mod) => {
    mod.materials.forEach((material) => {
      const gemType = material[0];
      const oreTag = `${tagPrefix}:ores/${gemType}`;
      const outputId = material[2] ?? `${mod.modID}:${gemType}`;
      const outputAmount = material[1] ?? 1;

      // Ore -> Gem
      addRecipeActuallyAdditionsCrushing(
        event,
        oreTag,
        [
          [outputId, outputAmount],
          [outputId, Math.max(1, Math.floor(outputAmount / 2)), 0.33],
        ],
        `ftb:actually_additions/crushing/ores/${gemType}`
      );
    });
  });

  // Loop For Alloys
  enabledAlloys.forEach((material) => {
    const ingotTag = `${tagPrefix}:ingots/${material}`;
    const dust = `ftbmaterials:${material}_dust`;

    // Ingot -> Dust
    addRecipeActuallyAdditionsCrushing(event, ingotTag, [[dust]], `ftb:actually_additions/crushing/ingots/${material}`);
  });

  enabledPlates.forEach((entry) => {
    const material = entry[0];
    if (entry[2] === false) {
      return;
    }
    const tag = entry[1] ?? `c:plates/${material}`;

    addRecipeActuallyAdditionsCrushing(
      event,
      tag,
      [[`ftbmaterials:${material}_dust`]],
      `ftb:actually_additions/crushing/plates/${material}`
    );
  });

  //Manually Added Recipes ======================================================================

  //Salt Crushing
  addRecipeActuallyAdditionsCrushing(
    event,
    "c:gems/salt",
    [
      ["ftbmaterials:salt_dust", 2],
      ["ftbmaterials:salt_dust", 1, 0.25],
    ],
    `ftb:actually_additions/crushing/gems/salt`
  );
});
