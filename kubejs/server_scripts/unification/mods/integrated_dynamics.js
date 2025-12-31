// priority: 50

removeRecipe.push(
  "integrateddynamics:mechanical_squeezer/ore/coal",
  "integrateddynamics:mechanical_squeezer/ore/dust_coal",
  "integrateddynamics:mechanical_squeezer/ore/dust_obsidian",
  "integrateddynamics:mechanical_squeezer/ore/gem_diamond",
  "integrateddynamics:mechanical_squeezer/ore/gem_emerald",
  "integrateddynamics:mechanical_squeezer/ore/gem_lapis",
  "integrateddynamics:mechanical_squeezer/ore/gem_quartz",
  "integrateddynamics:mechanical_squeezer/ore/glowstone_dust",
  "integrateddynamics:mechanical_squeezer/ore/netherrite_scrap",
  "integrateddynamics:mechanical_squeezer/ore/raw_aluminum",
  "integrateddynamics:mechanical_squeezer/ore/raw_copper",
  "integrateddynamics:mechanical_squeezer/ore/raw_gold",
  "integrateddynamics:mechanical_squeezer/ore/raw_iron",
  "integrateddynamics:mechanical_squeezer/ore/raw_lead",
  "integrateddynamics:mechanical_squeezer/ore/raw_nickel",
  "integrateddynamics:mechanical_squeezer/ore/raw_osmium",
  "integrateddynamics:mechanical_squeezer/ore/raw_platinum",
  "integrateddynamics:mechanical_squeezer/ore/raw_silver",
  "integrateddynamics:mechanical_squeezer/ore/raw_tin",
  "integrateddynamics:mechanical_squeezer/ore/raw_tungsten",
  "integrateddynamics:mechanical_squeezer/ore/raw_uranium",
  "integrateddynamics:mechanical_squeezer/ore/raw_zinc",
  "integrateddynamics:squeezer/ore/coal",
  "integrateddynamics:squeezer/ore/dust_coal",
  "integrateddynamics:squeezer/ore/gem_diamond",
  "integrateddynamics:squeezer/ore/gem_emerald",
  "integrateddynamics:squeezer/ore/gem_lapis",
  "integrateddynamics:squeezer/ore/gem_quartz",
  "integrateddynamics:squeezer/ore/netherrite_scrap",
  "integrateddynamics:squeezer/ore/quartz",
  "integrateddynamics:squeezer/ore/raw_aluminum",
  "integrateddynamics:squeezer/ore/raw_copper",
  "integrateddynamics:squeezer/ore/raw_gold",
  "integrateddynamics:squeezer/ore/raw_iron",
  "integrateddynamics:squeezer/ore/raw_lead",
  "integrateddynamics:squeezer/ore/raw_nickel",
  "integrateddynamics:squeezer/ore/raw_osmium",
  "integrateddynamics:squeezer/ore/raw_platinum",
  "integrateddynamics:squeezer/ore/raw_silver",
  "integrateddynamics:squeezer/ore/raw_tin",
  "integrateddynamics:squeezer/ore/raw_tungsten",
  "integrateddynamics:squeezer/ore/raw_uranium",
  "integrateddynamics:squeezer/ore/raw_zinc",
  "integrateddynamics:squeezer/ore/redstone",
  "integrateddynamics:squeezer/ore/dust_obsidian",
  "integrateddynamics:blasting/menril_log_filled_coal",
  "integrateddynamics:blasting/menril_log_coal"
);

ServerEvents.recipes((event) => {
  resourceOresIngots.forEach((mod) => {
    mod.materials.forEach((material) => {
      const rawMaterialTag = `${tagPrefix}:raw_materials/${material}`;
      const oreTag = `${tagPrefix}:ores/${material}`;
      const dust = `ftbmaterials:${material}_dust`;

      // Raw Ore -> Dust
      addRecipeIntegratedDynamicsMechanicalSqueezer(
        event,
        rawMaterialTag,
        [
          [dust, 1],
          [dust, 1, 0.33],
        ],
        `ftb:integrated/mechanical_squeezer/raw_ore/${material}`
      );

      // Ore -> Raw Ore
      addRecipeIntegratedDynamicsMechanicalSqueezer(
        event,
        oreTag,
        [
          [getRawOreId(material), 2],
          [getRawOreId(material), 1, 0.25],
        ],
        `ftb:integrated/mechanical_squeezer/ore/${material}`
      );

      // Raw Ore -> Dust
      addRecipeIntegratedDynamicsSqueezer(
        event,
        rawMaterialTag,
        [
          [dust, 1],
          [dust, 1, 0.33],
        ],
        `ftb:integrated/squeezer/raw_ore/${material}`
      );

      // Ore -> Raw Ore
      addRecipeIntegratedDynamicsSqueezer(
        event,
        oreTag,
        [
          [getRawOreId(material), 2],
          [getRawOreId(material), 1, 0.25],
        ],
        `ftb:integrated/squeezer/ore/${material}`
      );
    });
  });

  //Obsidian Dust
  addRecipeIntegratedDynamicsMechanicalSqueezer(
    event,
    "c:obsidians",
    [["ftbmaterials:obsidian_dust", 4]],
    `ftb:integrated/mechanical_squeezer/ore/dust_obsidian`
  );
});
