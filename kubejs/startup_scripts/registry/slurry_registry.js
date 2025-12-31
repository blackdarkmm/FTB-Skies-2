// priority: 10000

const addSlurry = [
  ["aluminum", 0xc3ccd4, 0xd7e3ec],
  ["nickel", 0xb6b8a4, 0xc4c6b3],
  ["zinc", 0xd8d8c8, 0xcfd1c0],
  ["platinum", 0xa9adb5, 0xb8beca],
  ["silver", 0xbfc4c9, 0xccdae4],
  ["antimony", 0x9ea1a7, 0x7e838a],
  ["iridium", 0xb5c6cf, 0x8ea2ab],
];

const $Slurry = Java.loadClass("mekanism.api.chemical.Chemical");
const $SlurryBuilder = Java.loadClass("mekanism.api.chemical.ChemicalBuilder");

// If you still want a registry prefix, define it here instead of using global
const registryPrefix = "ftb";

StartupEvents.registry("mekanism:chemical", (event) => {
  addSlurry.forEach(([ore, dirtyColor, cleanColor]) => {
    // dirty slurry
    event.createCustom(
      `${registryPrefix}:dirty_${ore}`,
      () => new $Slurry($SlurryBuilder.dirtySlurry().tint(dirtyColor).ore(`kubejs:ore/${ore}`))
    );

    // clean slurry
    event.createCustom(
      `${registryPrefix}:clean_${ore}`,
      () => new $Slurry($SlurryBuilder.cleanSlurry().tint(cleanColor).ore(`kubejs:ore/${ore}`))
    );
  });
});
