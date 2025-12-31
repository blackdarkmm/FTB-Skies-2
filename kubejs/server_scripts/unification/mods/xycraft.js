// priority: 50

removeRecipe.push(
  "xycraft_world:compacting/raw_aluminum",
  "xycraft_world:compacting/aluminum_ingot",
  "xycraft_world:compacting/aluminum_nugget",
  "xycraft_world:blasting/aluminum",
  "xycraft_world:smelting/aluminum",
  "xycraft_world:unpacking/raw_aluminum",
  "xycraft_world:packing/aluminum_storage_forced",
  "xycraft_world:unpacking/aluminum_nugget",
  "xycraft_world:packing/aluminum_ingot_forced",
  "xycraft_world:unpacking/aluminum_ingot"
);

removeItem.push(
  "xycraft_world:raw_aluminum",
  "xycraft_world:raw_aluminum_block",
  "xycraft_world:aluminum_storage",
  "xycraft_world:aluminum_nugget",
  "xycraft_world:aluminum_ingot",
  "xycraft_machines:iron_sheet",
  "xycraft_machines:aluminum_dirty_dust",
  "xycraft_machines:aluminum_shard",
  "xycraft_machines:aluminum_crystal",
  "xycraft_machines:aluminum_clump"
);

removeOre.push(
  "xycraft_world:aluminum_ore_kivi",
  "xycraft_world:aluminum_ore_deepslate",
  "xycraft_world:aluminum_ore_stone"
);

const xychorium_types = ["blue", "green", "red", "dark", "light"];

// Add
ServerEvents.tags("item", (event) => {
  xychorium_types.forEach((color) => {
    event.add(`${tagPrefix}:ores/xychorium_${color}`, [
      `xycraft_world:xychorium_ore_stone_${color}`,
      `xycraft_world:xychorium_ore_deepslate_${color}`,
      `xycraft_world:xychorium_ore_kivi_${color}`,
    ]);
  });
});
