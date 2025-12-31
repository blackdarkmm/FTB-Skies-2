// priority: 10000

// Tag Prefix
const tagPrefix = "c";

// Registry Prefix =
const registryPrefix = "ftb";

// Settings
const enableClusters = true;
const enableChunks = true;
const enableNetherOres = false;
const enableEndOres = false;

// === FLUIDS ===
const fluids = fluids || [];
const fluidMod = "tinkers";
const fluidAmounts = [
  // Tag, Output Amount, Secondary Output, Secondary Output Fluid Amount
  ["gears", 180, false],
  ["ingots", 90, false],
  ["nuggets", 10, false],
  ["ores", 240, true, 20],
  ["plates", 90, false],
  ["raw_materials", 120, true, 10],
  ["storage_blocks", 810, false],
  ["raw_blocks", 1080, true, 90],
];

// == Multi Ore Output ===
/**
 * Defines two secondary byproducts for ores used in custom processing.
 *
 * Format:
 *   [primaryOre, [secondaryOre, chanceDecimal, amount], [createOutput, chanceDecimal, amount]]
 *
 * - `primaryOre`: The main ore being processed.
 * - `secondaryOre`: A byproduct with a drop `chance` and optional `amount`.
 * - `createOutput`: A byproduct used in Create crushing/washing with `chance` and optional `amount`.
 */
const secondaryOutputs = [
  ["aluminum", ["iron", 0.15, 1], ["minecraft:flint", 0.25, 1]],
  ["copper", ["gold", 0.1, 1], ["minecraft:clay_ball", 0.5, 1]],
  ["gold", ["silver", 0.12, 1], ["minecraft:quartz", 0.5, 1]],
  ["iron", ["nickel", 0.1, 1], ["minecraft:redstone", 0.75, 1]],
  ["lead", ["silver", 0.15, 1], ["minecraft:coal", 0.25, 1]],
  ["nickel", ["iron", 0.1, 1], ["minecraft:flint", 0.25, 1]],
  ["osmium", ["tin", 0.15, 1], ["minecraft:lapis_lazuli", 0.25, 1]],
  ["platinum", ["gold", 0.12, 1], ["minecraft:quartz", 0.25, 1]],
  ["silver", ["nickel", 0.12, 1], ["minecraft:glowstone_dust", 0.25, 1]],
  ["tin", ["lead", 0.1, 1], ["minecraft:clay_ball", 0.25, 1]],
  ["uranium", ["lead", 0.2, 1], ["minecraft:gunpowder", 0.25, 1]],
  ["zinc", ["iron", 0.12, 1], ["minecraft:gunpowder", 0.25, 1]],
];

// List of cluster types
const clusterTypes = [
  "platinum",
  "lapis_lazuli",
  "emerald",
  "redstone",
  "zinc",
  "uranium",
  "diamond",
  "gold",
  "iron",
  "lead",
  "nickel",
  "osmium",
  "quartz",
  "silver",
  "tin",
  "copper",
  "aluminum",
];
/**
 * Add ores to generate for mods like Actually Additions, Occultism, and Botania.
 *
 * Each ore entry defines:
 * - `weight`: A numeric value representing how frequently the ore should generate.
 * - `dimensions` (optional): List of allowed dimensions for generation. Defaults to `["Overworld", "Nether", "End"]` if not specified.
 * - `dimensions_override` (optional): Forces the ore to generate in the listed dimensions, even if those dimensions are globally disabled.
 * - `blockVariants`: Maps different generation contexts or forms to block IDs.
 *     Common keys include:
 *     - `stone`: Standard overworld variant (e.g., "minecraft:coal_ore")
 *     - `deepslate`: Deep layer overworld variant (e.g., "minecraft:deepslate_iron_ore")
 *     - `nether`: Variant specific to the Nether (e.g., "minecraft:nether_quartz_ore")
 *     - `end`: Variant specific to the End (if applicable)
 *     - `storage`: The storage block version (e.g., "minecraft:iron_block")
 *
 * @type {Object.<string, {
 *   weight: number,
 *   dimensions?: string[],
 *   dimensions_override?: string[],
 *   blockVariants: {
 *     stone?: string,
 *     deepslate?: string,
 *     nether?: string,
 *     end?: string,
 *     storage?: string,
 *     [variant: string]: string
 *   }
 * }>}
 */
const oreGenOres = {};
/**
 * A list of resource ore/ingot mappings used for processing or recipe generation.
 *
 * Each entry defines:
 * - `modID`: The namespace or mod ID that owns the material (e.g., "minecraft", "ftbmaterials").
 * - `modPrefixOverride` (optional): Overrides the default mod prefix used for output item IDs.
 * - `materials`: A list of material names associated with the mod (e.g., ["iron", "gold", "copper"]).
 *
 * @type {Array<{
 *   modID: string,
 *   modPrefixOverride?: string,
 *   materials: string[]
 * }>}
 */
const resourceOresIngots = [];
/**
 * List of gem resources used for processing or recipes.
 *
 * Each entry includes:
 * - `modID`: The namespace or mod ID owning the materials (e.g., "minecraft").
 * - `materials`: An array of material tuples, where each tuple contains:
 *    0: material name (string)
 *    1: amount (number) — quantity used or produced
 *    2: item ID override (string, optional) — defaults to `${modID}:${materialName}` if omitted
 *    3: disableCrushing (boolean, optional) — if true, crushing the item into dust is disabled; defaults to **true**
 *
 * Example:
 * ["coal", 2, "minecraft:coal", false]
 *
 * @type {Array<{
 *   modID: string,
 *   materials: Array<
 *     [string, number, (string|undefined)?, (boolean|undefined)?]
 *   >
 * }>}
 */
const resourcesOresGem = [];
/**
 * TODO: Add Better Support For This
 */
const enabledAlloys = [];
/**
 * List of enabled gear materials.
 *
 * Each entry is an array with one or two elements:
 * - `[type]` — material type as a string (e.g., "gold")
 * - `[type, tagOverride]` — optional tag override string
 *
 * If `tagOverride` is omitted, it defaults to `c:ingots/{type}`.
 *
 * @type {Array<[string, (string|undefined)]>}
 */
const enabledGears = [];

/**
 * List of enabled rod materials.
 *
 * Each entry is an array with one or two elements:
 * - `[type]` — material type as a string (e.g., "gold")
 * - `[type, tagOverride]` — optional tag override string
 *
 * If `tagOverride` is omitted, it defaults to `c:ingots/{type}`.
 *
 * @type {Array<[string, (string|undefined)]>}
 */
const enabledRods = [];

/**
 * List of enabled plate materials.
 *
 * Each entry is an array with one or two elements:
 * - `[type]` — material type as a string (e.g., "gold")
 * - `[type, tagOverride]` — optional tag override string
 *
 * If `tagOverride` is omitted, it defaults to `c:ingots/{type}`.
 *
 * @type {Array<[string, (string|undefined)]>}
 */
const enabledPlates = [];

/**
 * List of enabled wire materials.
 *
 * Each entry is an array with one or two elements:
 * - `[type]` — material type as a string (e.g., "gold")
 * - `[type, tagOverride]` — optional tag override string
 *
 * If `tagOverride` is omitted, it defaults to `c:ingots/{type}`.
 *
 * @type {Array<[string, (string|undefined)]>}
 */
const enabledWires = [];

/**
 * List of ores that are actively used.
 *
 * Any ores not listed here may be hidden from JEI or excluded from recipes.
 *
 * @type {string[]}
 */
const usedOres = [];

/**
 * List of materials that are actively used.
 *
 * Helps control which materials appear in recipes, tags, or JEI.
 *
 * @type {string[]}
 */
const usedMaterials = [];

/**
 * List of recipe IDs to remove from the game.
 *
 * Each entry is a full recipe ID string (e.g., "modid:recipe_name").
 *
 * @type {string[]}
 */
const removeRecipe = [];

/**
 * List of item or block IDs to fully remove from visibility and functionality.
 *
 * Each item will:
 * - Be removed from all tags (item)
 * - Be hidden from JEI
 *
 * @type {string[]}
 */
const removeItem = [];

/**
 * List of JEI recipe categories to hide from the interface.
 *
 * Each entry is a category ID (e.g., "minecraft:crafting", "mekanism:enriching").
 *
 * @type {string[]}
 */
const removeRecipeCategories = [];

/**
 * List of item tag removal rules.
 *
 * Each entry is a tuple of:
 * - `tag` (string): The item tag to remove the item from (e.g., "c:ingots/steel")
 * - `item` (string): The item ID to be removed from the tag (e.g., "oritech:biosteel_ingot")
 *
 * @type {Array<[string, string]>}
 */
const removeItemTag = [];

/**
 * List of ore block IDs to remove entirely from the game.
 *
 * Each block will:
 * - Be removed from all item and block tags
 * - Be hidden from JEI
 *
 * Typically used to fully disable duplicate or unused ore blocks from mods.
 *
 * @type {string[]}
 */
const removeOre = [];

const geoOres = [];

const enabledBlades = [];

const smallDusts = [];

const tinyDusts = [];
/**
 * List of tag prefixes used to identify if a given input string is a tag.
 *
 * For example: ["c"]
 *
 * @type {string[]}
 */
const tags = [tagPrefix];

// Mods

// Minecraft
if (Platform.isLoaded("minecraft")) {
  resourceOresIngots.push({
    modID: "minecraft",
    modPrefixOverride: "minecraft",
    materials: ["iron", "gold", "copper"],
  });
  resourcesOresGem.push({
    modID: "minecraft",
    materials: [
      ["coal", 2, "minecraft:coal", false],
      ["redstone", 10, "minecraft:redstone", false],
      ["lapis_lazuli", 8, "minecraft:lapis_lazuli"],
      ["diamond", 2],
      ["emerald", 2],
      ["quartz", 2],
    ],
  });

  // Special Ore Type. Need getting added here
  usedOres.push({
    modID: "minecraft",
    material: "ancient_debris",
  });

  removeOre.push("minecraft:nether_gold_ore");

  // Add Ores To Ore Gens
  Object.assign(oreGenOres, {
    ancient_debris: {
      weight: 20,
      dimensions: ["nether"],
      dimensions_override: ["nether"],
      blockVariants: {
        nether: "minecraft:ancient_debris",
        storage: "minecraft:ancient_debris",
      },
    },
    coal: {
      weight: 5000,
      blockVariants: {
        stone: "minecraft:coal_ore",
        deepslate: "minecraft:deepslate_coal_ore",
        storage: "minecraft:coal_block",
      },
    },
    copper: {
      weight: 2000,
      blockVariants: {
        stone: "minecraft:copper_ore",
        deepslate: "minecraft:deepslate_copper_ore",
        storage: "minecraft:raw_copper_block",
      },
    },
    diamond: {
      weight: 150,
      blockVariants: {
        stone: "minecraft:diamond_ore",
        deepslate: "minecraft:deepslate_diamond_ore",
        storage: "minecraft:diamond_block",
      },
    },
    emerald: {
      weight: 130,
      blockVariants: {
        stone: "minecraft:emerald_ore",
        deepslate: "minecraft:deepslate_emerald_ore",
        storage: "minecraft:emerald_block",
      },
    },
    gold: {
      weight: 500,
      blockVariants: {
        stone: "minecraft:gold_ore",
        deepslate: "minecraft:deepslate_gold_ore",
        nether: "minecraft:nether_gold_ore",
        storage: "minecraft:raw_gold_block",
      },
    },
    iron: {
      weight: 3000,
      blockVariants: {
        stone: "minecraft:iron_ore",
        deepslate: "minecraft:deepslate_iron_ore",
        storage: "minecraft:raw_iron_block",
      },
    },
    lapis: {
      weight: 250,
      blockVariants: {
        stone: "minecraft:lapis_ore",
        deepslate: "minecraft:deepslate_lapis_ore",
        storage: "minecraft:lapis_block",
      },
    },
    quartz: {
      weight: 3000,
      dimensions: ["nether"],
      dimensions_override: ["nether"],
      blockVariants: {
        nether: "minecraft:nether_quartz_ore",
        storage: "minecraft:quartz_block",
      },
    },
    redstone: {
      weight: 700,
      blockVariants: {
        stone: "minecraft:redstone_ore",
        deepslate: "minecraft:deepslate_redstone_ore",
        storage: "minecraft:redstone_block",
      },
    },
  });
}

// Thermal
if (Platform.isLoaded("thermal")) {
  resourceOresIngots.push({
    modID: "thermal",
    materials: ["silver", "nickel", "tin", "lead"],
  });

  resourcesOresGem.push({
    modID: "thermal",
    materials: [
      ["ruby", 2],
      ["sapphire", 2],
      ["apatite", 2],
      ["niter", 2],
      ["sulfur", 2],
      ["cinnabar", 2],
    ],
  });
  enabledAlloys.push("invar", "constantan", "electrum", "bronze", "lumium");

  enabledGears.push(
    ["tin"],
    ["iron"],
    ["invar"],
    ["gold"],
    ["electrum"],
    ["diamond", "c:gems/diamond"],
    ["copper"],
    ["constantan"],
    ["bronze"],
    ["lead"],
    ["lumium"],
    ["nickel"],
    ["silver"]
  );
  enabledPlates.push(
    ["lumium"],
    ["silver"],
    ["lead"],
    ["invar"],
    ["electrum"],
    ["constantan"],
    ["bronze"],
    ["iridium"]
  );
}

// Immersive Engineering
if (Platform.isLoaded("immersiveengineering")) {
  resourceOresIngots.push({
    modID: "immersiveengineering",
    materials: ["aluminum", "nickel"],
  });

  enabledWires.push(["lead"]);

  usedMaterials.push("bauxite", "niter", "coal_coke");

  usedMaterials.push("steel");
  enabledPlates.push(["aluminum"], ["nickel"], ["steel"], ["netherite"]);
  enabledWires.push(["aluminum"], ["copper"], ["electrum"], ["steel"]);
  enabledRods.push(["steel"], ["aluminum"], ["netherite"]);

  Object.assign(oreGenOres, {
    nickel: { weight: 2000 },
    silver: { weight: 1000 },
    sulfur: {
      weight: 1000,
      blockVariants: { storage: "ftbmaterials:sulfur_block" },
    },
    aluminum: { weight: 1400 },
  });
}

// Create
if (Platform.isLoaded("create")) {
  resourceOresIngots.push({
    modID: "create",
    materials: ["zinc"],
  });

  enabledAlloys.push("brass", "constantan");
  enabledPlates.push(
    ["copper"],
    ["gold"],
    ["iron"],
    ["obsidian", "c:obsidians/normal", false],
    ["brass"],
    ["constantan"],
    ["zinc"]
  );

  Object.assign(oreGenOres, { zinc: { weight: 1000 } });
}

// Create Addition
if (Platform.isLoaded("createaddition")) {
  enabledAlloys.push("electrum");
  enabledWires.push(["iron"], ["gold"], ["copper"], ["electrum"]);
  enabledRods.push(["gold"], ["electrum"], ["copper"], ["lumium"]);
}

// Embers
if (Platform.isLoaded("embers")) {
  if (fluidMod !== "embers") {
    fluids.push(
      "embers:molten_aluminum_bucket",
      "embers:molten_brass_bucket",
      "embers:molten_bronze_bucket",
      "embers:molten_constantan_bucket",
      "embers:molten_copper_bucket",
      "embers:molten_electrum_bucket",
      "embers:molten_gold_bucket",
      "embers:molten_invar_bucket",
      "embers:molten_iron_bucket",
      "embers:molten_lead_bucket",
      "embers:molten_nickel_bucket",
      "embers:molten_platinum_bucket",
      "embers:molten_silver_bucket",
      "embers:molten_tin_bucket",
      "embers:molten_uranium_bucket",
      "embers:molten_zinc_bucket",
      "embers:steam_bucket"
    );
  }
}

// Thermal Extra
if (Platform.isLoaded("thermal_extra")) {
  if (fluidMod !== "thermal_extra") {
    fluids.push(
      "thermal_extra:raw_aluminum_bucket",
      "thermal_extra:raw_copper_bucket",
      "thermal_extra:raw_gold_bucket",
      "thermal_extra:raw_iron_bucket",
      "thermal_extra:raw_lead_bucket",
      "thermal_extra:raw_nickel_bucket",
      "thermal_extra:raw_osmium_bucket",
      "thermal_extra:raw_silver_bucket",
      "thermal_extra:raw_tin_bucket",
      "thermal_extra:raw_uranium_bucket",
      "thermal_extra:raw_zinc_bucket"
    );
  }
}

// Mekanism
if (Platform.isLoaded("mekanism")) {
  resourceOresIngots.push({
    modID: "mekanism",
    materials: ["osmium", "tin", "lead", "uranium"],
  });

  resourcesOresGem.push({
    modID: "mekanism",
    materials: [
      ["sulfur", 2, "ftbmaterials:sulfur_dust", false],
      ["fluorite", 2, "ftbmaterials:fluorite_gem", false],
      ["salt", 2, "ftbmaterials:salt_dust", false],
    ],
  });

  usedMaterials.push("refined_glowstone", "refined_obsidian");

  Object.assign(oreGenOres, {
    uranium: { weight: 100 },
    lead: { weight: 1700 },
    tin: { weight: 2000 },
    osmium: { weight: 2000 },
    salt: {
      weight: 1000,
      blockVariants: {
        storage: "ftbmaterials:salt_block",
      },
    },
    fluorite: {
      weight: 500,
      blockVariants: { storage: "ftbmaterials:fluorite_block" },
    },
  });
}

// Oritech
if (Platform.isLoaded("oritech")) {
  resourceOresIngots.push({
    modID: "oritech",
    materials: ["platinum"],
  });
}

// Occultism
if (Platform.isLoaded("occultism")) {
  resourceOresIngots.push({
    modID: "occultism",
    materials: ["silver"],
  });
}

// Modern Industrialization
if (Platform.isLoaded("modern_industrialization")) {
  enabledRods.push(["copper"], ["iron"], ["bronze"], ["gold"], ["invar"], ["tin"], ["titanium"], ["uranium"]);

  enabledPlates.push(
    ["bronze"],
    ["diamond", "c:gems/diamond"],
    ["electrum"],
    ["invar"],
    ["lead"],
    ["platinum"],
    ["silver"],
    ["tin"],
    ["titanium"],
    ["tungsten"],
    ["chromium"],
    ["stainless_steel"],
    ["emerald", "c:gems/emerald"],
    ["silicon", "c:ingots/silicon"]
  );

  resourceOresIngots.push({
    modID: "modern_industrialization",
    materials: ["antimony", "iridium"],
  });

  resourcesOresGem.push({
    modID: "modern_industrialization",
    materials: [
      ["monazite", 2, "ftbmaterials:monazite_dust", false],
      ["tungsten", 2, "ftbmaterials:tungsten_raw_ore", false],
      ["titanium", 2, "ftbmaterials:titanium_raw_ore", false],
      ["bauxite", 2, "ftbmaterials:bauxite_dust", false],
    ],
  });

  enabledWires.push(["tin"], ["silver"], ["platinum"]);

  usedMaterials.push("titanium", "stainless_steel", "chromium", "plutonium", "iridium");
  enabledAlloys.push("invar", "electrum", "bronze");
  enabledGears.push(
    ["titanium"],
    ["invar"],
    ["tin"],
    ["stainless_steel"],
    ["steel"],
    ["copper"],
    ["bronze"],
    ["gold"],
    ["iron"]
  );

  Object.assign(oreGenOres, {
    antimony: { weight: 1700 },
    monazite: {
      weight: 1700,
      blockVariants: {
        storage: "ftbmaterials:monazite_stone_ore",
      },
    },
    platinum: { weight: 75 },
    titanium: { weight: 150 },
  });
}

// Industrial Foregoing
if (Platform.isLoaded("industrialforegoing")) {
  fluids.push("industrialforegoing:raw_ore_meat_bucket");
  removeItem.push(
    "industrialforegoing:washing_factory",
    "industrialforegoing:fermentation_station",
    "industrialforegoing:fluid_sieving_machine"
  );
  removeRecipeCategories.push(
    "industrialforegoing:fermenter",
    "industrialforegoing:ore_washer",
    "industrialforegoing:ore_sieve"
  );
  removeRecipe.push(
    "industrialforegoing:fluid_sieving_machine",
    "industrialforegoing:fermentation_station",
    "industrialforegoing:washing_factory"
  );

  enabledGears.push(["diamond", "c:gems/diamond"]);
}

// Actually Additions
if (Platform.isLoaded("actuallyadditions")) {
  resourcesOresGem.push({
    modID: "actuallyadditions",
    materials: [["black_quartz", 2, "actuallyadditions:black_quartz", false]],
  });

  removeItem.push("actuallyadditions:tiny_coal", "actuallyadditions:tiny_charcoal");

  removeRecipe.push("actuallyadditions:charcoal_to_tiny", "actuallyadditions:tiny_to_charcoal");
}

// Irons Jewelry
if (Platform.isLoaded("irons_jewelry")) {
  resourcesOresGem.push({
    modID: "irons_jewelry",
    materials: [
      ["sapphire", 2, "ftbmaterials:sapphire_gem"],
      ["ruby", 2, "ftbmaterials:ruby_gem"],
    ],
  });
  removeItem.push("irons_jewelry:sapphire", "irons_jewelry:ruby");

  Object.assign(oreGenOres, {
    ruby: {
      weight: 250,
      blockVariants: { storage: "ftbmaterials:ruby_block" },
    },
    sapphire: {
      weight: 250,
      blockVariants: { storage: "ftbmaterials:sapphire_block" },
    },
  });
}

if (Platform.isLoaded("xycraft_world")) {
  resourcesOresGem.push({
    modID: "xycraft_world",
    materials: [
      ["xychorium_blue", 2, "xycraft_world:xychorium_gem_blue", false],
      ["xychorium_green", 2, "xycraft_world:xychorium_gem_green", false],
      ["xychorium_red", 2, "xycraft_world:xychorium_gem_red", false],
      ["xychorium_dark", 2, "xycraft_world:xychorium_gem_dark", false],
      ["xychorium_light", 2, "xycraft_world:xychorium_gem_light", false],
    ],
  });

  Object.assign(oreGenOres, {
    xychorium_blue: {
      weight: 250,
      dimensions: ["overworld"],
      blockVariants: {
        stone: "xycraft_world:xychorium_ore_stone_blue",
        deepslate: "xycraft_world:xychorium_ore_deepslate_blue",
        storage: "xycraft_world:xychorium_storage_blue",
      },
    },
    xychorium_dark: {
      weight: 250,
      dimensions: ["overworld"],
      blockVariants: {
        stone: "xycraft_world:xychorium_ore_stone_red",
        deepslate: "xycraft_world:xychorium_ore_deepslate_red",
        storage: "xycraft_world:xychorium_storage_dark",
      },
    },
    xychorium_green: {
      weight: 250,
      dimensions: ["overworld"],
      blockVariants: {
        stone: "xycraft_world:xychorium_ore_stone_red",
        deepslate: "xycraft_world:xychorium_ore_deepslate_red",
        storage: "xycraft_world:xychorium_storage_green",
      },
    },
    xychorium_red: {
      weight: 250,
      dimensions: ["overworld"],
      blockVariants: {
        stone: "xycraft_world:xychorium_ore_stone_red",
        deepslate: "xycraft_world:xychorium_ore_deepslate_red",
        storage: "xycraft_world:xychorium_storage_red",
      },
    },
    xychorium_light: {
      weight: 250,
      dimensions: ["overworld"],
      blockVariants: {
        stone: "xycraft_world:xychorium_ore_stone_light",
        deepslate: "xycraft_world:xychorium_ore_deepslate_light",
        storage: "xycraft_world:xychorium_storage_light",
      },
    },
  });
}

// Refined Storage
if (Platform.isLoaded("refinedstorage")) {
  usedMaterials.push("silicon");
  removeItem.push("refinedstorage:silicon");
}

// AE2
if (Platform.isLoaded("ae2")) {
  removeItem.push("ae2:silicon");
}

// Productive Trees
if (Platform.isLoaded("productivetrees")) {
  removeRecipe.push("productivetrees:cured_rubber");
  removeItem.push("productivetrees:cured_rubber", "productivetrees:rubber");
}

// More Red
if (Platform.isLoaded("morered")) {
  removeItem.push("morered:red_alloy_ingot");
}

// MFFS
if (Platform.isLoaded("mffs")) {
  removeItem.push("mffs:steel_ingot", "mffs:steel_compound");
  removeRecipe.push("mffs:steel_compound", "mffs:steel_ingot");
}

if (Platform.isLoaded("silentgear")) {
  removeRecipe.push("silentgear:iron_rod");
  removeItem.push("silentgear:iron_rod");
}

if (Platform.isLoaded("mekanism_weaponry")) {
  removeRecipe.push("mekanism_weaponry:steel_rod");
  removeItem.push("mekanism_weaponry:steel_rod");
}

if (Platform.isLoaded("justdirethings")) {
  removeItem.push("justdirethings:charcoal");
  removeRecipe.push("justdirethings:charcoal_9x9", "justdirethings:charcoal_block_9x9");
}

if (Platform.isLoaded("pneumaticcraft")) {
  removeItem.push("pneumaticcraft:copper_nugget");
  removeRecipe.push("pneumaticcraft:copper_ingot_from_nugget");
}

if (Platform.isLoaded("appflux")) {
  removeItem.push("appflux:emerald_dust", "appflux:diamond_dust");
  removeRecipe.push("appflux:inscriber/crush_emerald", "appflux:inscriber/crush_diamond");
}

if (Platform.isLoaded("rftoolsbase")) {
  removeOre.push(
    // "rftoolsbase:dimensionalshard_overworld",
    "rftoolsbase:dimensionalshard_nether",
    "rftoolsbase:dimensionalshard_end"
  );

  resourcesOresGem.push({
    modID: "rftoolsbase",
    materials: [["dimensional_shard", 5, "rftoolsbase:dimensionalshard"]],
  });
}

if (Platform.isLoaded("malum")) {
  removeItem.push("malum:coal_fragment", "malum:charcoal_fragment");

  removeRecipe.push(
    "malum:coal_from_fragment",
    "malum:charcoal_from_fragment",
    "malum:charcoal_fragment",
    "malum:coal_fragment"
  );

  Object.assign(oreGenOres, {
    soulstone: {
      weight: 130,
      dimensions: ["overworld"],
      blockVariants: {
        stone: "malum:soulstone_ore",
        deepslate: "malum:deepslate_soulstone_ore",
        storage: "malum:block_of_raw_soulstone",
      },
    },
  });
}

if (Platform.isLoaded("utilitarian")) {
  removeItem.push("utilitarian:tiny_coal", "utilitarian:tiny_charcoal");
  removeRecipe.push(
    "utilitarian:tiny_fuel/tiny_coal",
    "utilitarian:tiny_fuel/coal",
    "utilitarian:tiny_fuel/tiny_charcoal",
    "utilitarian:tiny_fuel/charcoal"
  );
}

if (Platform.isLoaded("geore")) {
  geoOres.push(
    ["topaz", "irons_jewelry:topaz", 1],
    ["uraninite", "powah:uraninite", 6],
    ["black_quartz", "actuallyadditions:black_quartz", 4],
    ["monazite", "ftbmaterials:monazite_dust", 1],
    ["tungsten", "ftbmaterials:tungsten_tiny_dust", 9],
    ["sapphire", "ftbmaterials:sapphire_gem", 1],
    ["ruby", "ftbmaterials:ruby_gem", 1]
  );
}

if (Platform.isLoaded("mysticalagriculture")) {
  Object.assign(oreGenOres, {
    inferium_ore: {
      weight: 500,
      dimensions: ["overworld", "nether", "end"],
      blockVariants: {
        stone: "mysticalagriculture:inferium_ore",
        deepslate: "mysticalagriculture:deepslate_inferium_ore",
        nether: "mysticalagradditions:nether_inferium_ore",
        end: "mysticalagradditions:end_inferium_ore",
        storage: "mysticalagriculture:inferium_block",
      },
    },
    prosperity_ore: {
      weight: 250,
      dimensions: ["overworld", "nether", "end"],
      blockVariants: {
        stone: "mysticalagriculture:prosperity_ore",
        deepslate: "mysticalagriculture:deepslate_prosperity_ore",
        nether: "mysticalagradditions:nether_prosperity_ore",
        end: "mysticalagradditions:end_prosperity_ore",
        storage: "mysticalagriculture:prosperity_block",
      },
    },
  });
}

// Setup Data For Usage

// Ingot materials (already flat)
resourceOresIngots.forEach(function (resource) {
  usedMaterials.push.apply(usedMaterials, resource.materials);
});

// Gem materials (use only the first element of each entry)
resourcesOresGem.forEach(function (resource) {
  resource.materials.forEach(function (mat) {
    usedMaterials.push(mat[0]);
  });
});

if (resourceOresIngots) {
  resourceOresIngots.forEach((resource) => {
    resource.materials.forEach((material) => {
      usedOres.push({
        modID: resource.modID,
        material: material,
      });
    });
  });
}

if (resourcesOresGem) {
  resourcesOresGem.forEach((resource) => {
    resource.materials.forEach((material) => {
      usedOres.push({
        modID: resource.modID,
        material: material[0],
      });
    });
  });
}

// All Material Types
const types = [
  "aluminum",
  "apatite",
  "antimony",
  "bauxite",
  "brass",
  "bronze",
  "chromium",
  "cinnabar",
  "coal_coke",
  "constantan",
  "dimensional_shard",
  "refined_obsidian",
  "electrum",
  "fluorite",
  "graphite",
  "invar",
  "iridium",
  "lapis_lazuli",
  "lead",
  "lumium",
  "monazite",
  "nickel",
  "niter",
  "osmium",
  "platinum",
  "plutonium",
  "quartz",
  "redstone",
  "refined_glowstone",
  "resonating_ore",
  "ruby",
  "salt",
  "sapphire",
  "stainless_steel",
  "silicon",
  "silver",
  "steel",
  "sulfur",
  "tin",
  "titanium",
  "tungsten",
  "uranium",
  "zinc",
];

enabledAlloys.forEach((alloys) => {
  usedMaterials.push(alloys);
});

const hide = types.filter((ore) => !usedMaterials.includes(ore));

if (!Platform.isLoaded("mekanism")) {
  hide.push("dirty_dust", "clump", "crystal", "shard");
}

if (!enableClusters) {
  hide.push("cluster");
}

if (!enableChunks) {
  hide.push("chunk");
}

if (!enableNetherOres) {
  hide.push("nether_ore");
}

if (!enableEndOres) {
  hide.push("end_ore");
}
