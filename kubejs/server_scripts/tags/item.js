// priority: 1002

const vanillaPlanks = [
  "minecraft:oak_planks",
  "minecraft:spruce_planks",
  "minecraft:birch_planks",
  "minecraft:jungle_planks",
  "minecraft:acacia_planks",
  "minecraft:dark_oak_planks",
  "minecraft:mangrove_planks",
  "minecraft:cherry_planks",
  "minecraft:bamboo_planks",
  "minecraft:crimson_planks",
  "minecraft:warped_planks",
  "ars_nouveau:archwood_planks",
  "malum:runewood_planks",
];

const rechiseled_acacia = [
  "rechiseled:acacia_planks_beams",
  "rechiseled:acacia_planks_beams_connecting",
  "rechiseled:acacia_planks_brick_pattern",
  "rechiseled:acacia_planks_brick_pattern_connecting",
  "rechiseled:acacia_planks_brick_paving",
  "rechiseled:acacia_planks_brick_paving_connecting",
  "rechiseled:acacia_planks_bricks",
  "rechiseled:acacia_planks_bricks_connecting",
  "rechiseled:acacia_planks_crate",
  "rechiseled:acacia_planks_crate_connecting",
  "rechiseled:acacia_planks_diagonal_stripes",
  "rechiseled:acacia_planks_diagonal_stripes_connecting",
  "rechiseled:acacia_planks_diagonal_tiles",
  "rechiseled:acacia_planks_diagonal_tiles_connecting",
  "rechiseled:acacia_planks_dotted",
  "rechiseled:acacia_planks_dotted_connecting",
  "rechiseled:acacia_planks_flooring",
  "rechiseled:acacia_planks_flooring_connecting",
  "rechiseled:acacia_planks_large_tiles",
  "rechiseled:acacia_planks_large_tiles_connecting",
  "rechiseled:acacia_planks_mosaic",
  "rechiseled:acacia_planks_pattern",
  "rechiseled:acacia_planks_pattern_connecting",
  "rechiseled:acacia_planks_rotated_bricks",
  "rechiseled:acacia_planks_rotated_bricks_connecting",
  "rechiseled:acacia_planks_small_bricks",
  "rechiseled:acacia_planks_small_bricks_connecting",
  "rechiseled:acacia_planks_small_tiles",
  "rechiseled:acacia_planks_small_tiles_connecting",
  "rechiseled:acacia_planks_squares",
  "rechiseled:acacia_planks_squares_connecting",
  "rechiseled:acacia_planks_tiles",
  "rechiseled:acacia_planks_tiles_connecting",
  "rechiseled:acacia_planks_wavy",
  "rechiseled:acacia_planks_wavy_connecting",
  "rechiseled:acacia_planks_woven",
  "rechiseled:acacia_planks_woven_connecting",
];
const rechiseled_bamboo = [
  "rechiseled:bamboo_planks_beams",
  "rechiseled:bamboo_planks_beams_connecting",
  "rechiseled:bamboo_planks_brick_pattern",
  "rechiseled:bamboo_planks_brick_pattern_connecting",
  "rechiseled:bamboo_planks_brick_paving",
  "rechiseled:bamboo_planks_brick_paving_connecting",
  "rechiseled:bamboo_planks_bricks",
  "rechiseled:bamboo_planks_bricks_connecting",
  "rechiseled:bamboo_planks_crate",
  "rechiseled:bamboo_planks_crate_connecting",
  "rechiseled:bamboo_planks_diagonal_stripes",
  "rechiseled:bamboo_planks_diagonal_stripes_connecting",
  "rechiseled:bamboo_planks_diagonal_tiles",
  "rechiseled:bamboo_planks_diagonal_tiles_connecting",
  "rechiseled:bamboo_planks_dotted",
  "rechiseled:bamboo_planks_dotted_connecting",
  "rechiseled:bamboo_planks_flooring",
  "rechiseled:bamboo_planks_flooring_connecting",
  "rechiseled:bamboo_planks_large_tiles",
  "rechiseled:bamboo_planks_large_tiles_connecting",
  "rechiseled:bamboo_planks_mosaic",
  "rechiseled:bamboo_planks_pattern",
  "rechiseled:bamboo_planks_pattern_connecting",
  "rechiseled:bamboo_planks_rotated_bricks",
  "rechiseled:bamboo_planks_rotated_bricks_connecting",
  "rechiseled:bamboo_planks_small_bricks",
  "rechiseled:bamboo_planks_small_bricks_connecting",
  "rechiseled:bamboo_planks_small_tiles",
  "rechiseled:bamboo_planks_small_tiles_connecting",
  "rechiseled:bamboo_planks_squares",
  "rechiseled:bamboo_planks_squares_connecting",
  "rechiseled:bamboo_planks_tiles",
  "rechiseled:bamboo_planks_tiles_connecting",
  "rechiseled:bamboo_planks_wavy",
  "rechiseled:bamboo_planks_wavy_connecting",
  "rechiseled:bamboo_planks_woven",
  "rechiseled:bamboo_planks_woven_connecting",
];
const rechiseled_birch = [
  "rechiseled:birch_planks_beams",
  "rechiseled:birch_planks_beams_connecting",
  "rechiseled:birch_planks_brick_pattern",
  "rechiseled:birch_planks_brick_pattern_connecting",
  "rechiseled:birch_planks_brick_paving",
  "rechiseled:birch_planks_brick_paving_connecting",
  "rechiseled:birch_planks_bricks",
  "rechiseled:birch_planks_bricks_connecting",
  "rechiseled:birch_planks_crate",
  "rechiseled:birch_planks_crate_connecting",
  "rechiseled:birch_planks_diagonal_stripes",
  "rechiseled:birch_planks_diagonal_stripes_connecting",
  "rechiseled:birch_planks_diagonal_tiles",
  "rechiseled:birch_planks_diagonal_tiles_connecting",
  "rechiseled:birch_planks_dotted",
  "rechiseled:birch_planks_dotted_connecting",
  "rechiseled:birch_planks_flooring",
  "rechiseled:birch_planks_flooring_connecting",
  "rechiseled:birch_planks_large_tiles",
  "rechiseled:birch_planks_large_tiles_connecting",
  "rechiseled:birch_planks_mosaic",
  "rechiseled:birch_planks_pattern",
  "rechiseled:birch_planks_pattern_connecting",
  "rechiseled:birch_planks_rotated_bricks",
  "rechiseled:birch_planks_rotated_bricks_connecting",
  "rechiseled:birch_planks_small_bricks",
  "rechiseled:birch_planks_small_bricks_connecting",
  "rechiseled:birch_planks_small_tiles",
  "rechiseled:birch_planks_small_tiles_connecting",
  "rechiseled:birch_planks_squares",
  "rechiseled:birch_planks_squares_connecting",
  "rechiseled:birch_planks_tiles",
  "rechiseled:birch_planks_tiles_connecting",
  "rechiseled:birch_planks_wavy",
  "rechiseled:birch_planks_wavy_connecting",
  "rechiseled:birch_planks_woven",
  "rechiseled:birch_planks_woven_connecting",
];
const rechiseled_cherry = [
  "rechiseled:cherry_planks_beams",
  "rechiseled:cherry_planks_beams_connecting",
  "rechiseled:cherry_planks_brick_pattern",
  "rechiseled:cherry_planks_brick_pattern_connecting",
  "rechiseled:cherry_planks_brick_paving",
  "rechiseled:cherry_planks_brick_paving_connecting",
  "rechiseled:cherry_planks_bricks",
  "rechiseled:cherry_planks_bricks_connecting",
  "rechiseled:cherry_planks_crate",
  "rechiseled:cherry_planks_crate_connecting",
  "rechiseled:cherry_planks_diagonal_stripes",
  "rechiseled:cherry_planks_diagonal_stripes_connecting",
  "rechiseled:cherry_planks_diagonal_tiles",
  "rechiseled:cherry_planks_diagonal_tiles_connecting",
  "rechiseled:cherry_planks_dotted",
  "rechiseled:cherry_planks_dotted_connecting",
  "rechiseled:cherry_planks_flooring",
  "rechiseled:cherry_planks_flooring_connecting",
  "rechiseled:cherry_planks_large_tiles",
  "rechiseled:cherry_planks_large_tiles_connecting",
  "rechiseled:cherry_planks_mosaic",
  "rechiseled:cherry_planks_pattern",
  "rechiseled:cherry_planks_pattern_connecting",
  "rechiseled:cherry_planks_rotated_bricks",
  "rechiseled:cherry_planks_rotated_bricks_connecting",
  "rechiseled:cherry_planks_small_bricks",
  "rechiseled:cherry_planks_small_bricks_connecting",
  "rechiseled:cherry_planks_small_tiles",
  "rechiseled:cherry_planks_small_tiles_connecting",
  "rechiseled:cherry_planks_squares",
  "rechiseled:cherry_planks_squares_connecting",
  "rechiseled:cherry_planks_tiles",
  "rechiseled:cherry_planks_tiles_connecting",
  "rechiseled:cherry_planks_wavy",
  "rechiseled:cherry_planks_wavy_connecting",
  "rechiseled:cherry_planks_woven",
  "rechiseled:cherry_planks_woven_connecting",
];
const rechiseled_crimson = [
  "rechiseled:crimson_planks_beams",
  "rechiseled:crimson_planks_beams_connecting",
  "rechiseled:crimson_planks_brick_pattern",
  "rechiseled:crimson_planks_brick_pattern_connecting",
  "rechiseled:crimson_planks_brick_paving",
  "rechiseled:crimson_planks_brick_paving_connecting",
  "rechiseled:crimson_planks_bricks",
  "rechiseled:crimson_planks_bricks_connecting",
  "rechiseled:crimson_planks_crate",
  "rechiseled:crimson_planks_crate_connecting",
  "rechiseled:crimson_planks_diagonal_stripes",
  "rechiseled:crimson_planks_diagonal_stripes_connecting",
  "rechiseled:crimson_planks_diagonal_tiles",
  "rechiseled:crimson_planks_diagonal_tiles_connecting",
  "rechiseled:crimson_planks_dotted",
  "rechiseled:crimson_planks_dotted_connecting",
  "rechiseled:crimson_planks_flooring",
  "rechiseled:crimson_planks_flooring_connecting",
  "rechiseled:crimson_planks_large_tiles",
  "rechiseled:crimson_planks_large_tiles_connecting",
  "rechiseled:crimson_planks_mosaic",
  "rechiseled:crimson_planks_pattern",
  "rechiseled:crimson_planks_pattern_connecting",
  "rechiseled:crimson_planks_rotated_bricks",
  "rechiseled:crimson_planks_rotated_bricks_connecting",
  "rechiseled:crimson_planks_small_bricks",
  "rechiseled:crimson_planks_small_bricks_connecting",
  "rechiseled:crimson_planks_small_tiles",
  "rechiseled:crimson_planks_small_tiles_connecting",
  "rechiseled:crimson_planks_squares",
  "rechiseled:crimson_planks_squares_connecting",
  "rechiseled:crimson_planks_tiles",
  "rechiseled:crimson_planks_tiles_connecting",
  "rechiseled:crimson_planks_wavy",
  "rechiseled:crimson_planks_wavy_connecting",
  "rechiseled:crimson_planks_woven",
  "rechiseled:crimson_planks_woven_connecting",
];
const rechiseled_dark_oak = [
  "rechiseled:dark_oak_planks_beams",
  "rechiseled:dark_oak_planks_beams_connecting",
  "rechiseled:dark_oak_planks_brick_pattern",
  "rechiseled:dark_oak_planks_brick_pattern_connecting",
  "rechiseled:dark_oak_planks_brick_paving",
  "rechiseled:dark_oak_planks_brick_paving_connecting",
  "rechiseled:dark_oak_planks_bricks",
  "rechiseled:dark_oak_planks_bricks_connecting",
  "rechiseled:dark_oak_planks_crate",
  "rechiseled:dark_oak_planks_crate_connecting",
  "rechiseled:dark_oak_planks_diagonal_stripes",
  "rechiseled:dark_oak_planks_diagonal_stripes_connecting",
  "rechiseled:dark_oak_planks_diagonal_tiles",
  "rechiseled:dark_oak_planks_diagonal_tiles_connecting",
  "rechiseled:dark_oak_planks_dotted",
  "rechiseled:dark_oak_planks_dotted_connecting",
  "rechiseled:dark_oak_planks_flooring",
  "rechiseled:dark_oak_planks_flooring_connecting",
  "rechiseled:dark_oak_planks_large_tiles",
  "rechiseled:dark_oak_planks_large_tiles_connecting",
  "rechiseled:dark_oak_planks_mosaic",
  "rechiseled:dark_oak_planks_pattern",
  "rechiseled:dark_oak_planks_pattern_connecting",
  "rechiseled:dark_oak_planks_rotated_bricks",
  "rechiseled:dark_oak_planks_rotated_bricks_connecting",
  "rechiseled:dark_oak_planks_small_bricks",
  "rechiseled:dark_oak_planks_small_bricks_connecting",
  "rechiseled:dark_oak_planks_small_tiles",
  "rechiseled:dark_oak_planks_small_tiles_connecting",
  "rechiseled:dark_oak_planks_squares",
  "rechiseled:dark_oak_planks_squares_connecting",
  "rechiseled:dark_oak_planks_tiles",
  "rechiseled:dark_oak_planks_tiles_connecting",
  "rechiseled:dark_oak_planks_wavy",
  "rechiseled:dark_oak_planks_wavy_connecting",
  "rechiseled:dark_oak_planks_woven",
  "rechiseled:dark_oak_planks_woven_connecting",
];
const rechiseled_jungle = [
  "rechiseled:jungle_planks_beams",
  "rechiseled:jungle_planks_beams_connecting",
  "rechiseled:jungle_planks_brick_pattern",
  "rechiseled:jungle_planks_brick_pattern_connecting",
  "rechiseled:jungle_planks_brick_paving",
  "rechiseled:jungle_planks_brick_paving_connecting",
  "rechiseled:jungle_planks_bricks",
  "rechiseled:jungle_planks_bricks_connecting",
  "rechiseled:jungle_planks_crate",
  "rechiseled:jungle_planks_crate_connecting",
  "rechiseled:jungle_planks_diagonal_stripes",
  "rechiseled:jungle_planks_diagonal_stripes_connecting",
  "rechiseled:jungle_planks_diagonal_tiles",
  "rechiseled:jungle_planks_diagonal_tiles_connecting",
  "rechiseled:jungle_planks_dotted",
  "rechiseled:jungle_planks_dotted_connecting",
  "rechiseled:jungle_planks_flooring",
  "rechiseled:jungle_planks_flooring_connecting",
  "rechiseled:jungle_planks_large_tiles",
  "rechiseled:jungle_planks_large_tiles_connecting",
  "rechiseled:jungle_planks_mosaic",
  "rechiseled:jungle_planks_pattern",
  "rechiseled:jungle_planks_pattern_connecting",
  "rechiseled:jungle_planks_rotated_bricks",
  "rechiseled:jungle_planks_rotated_bricks_connecting",
  "rechiseled:jungle_planks_small_bricks",
  "rechiseled:jungle_planks_small_bricks_connecting",
  "rechiseled:jungle_planks_small_tiles",
  "rechiseled:jungle_planks_small_tiles_connecting",
  "rechiseled:jungle_planks_squares",
  "rechiseled:jungle_planks_squares_connecting",
  "rechiseled:jungle_planks_tiles",
  "rechiseled:jungle_planks_tiles_connecting",
  "rechiseled:jungle_planks_wavy",
  "rechiseled:jungle_planks_wavy_connecting",
  "rechiseled:jungle_planks_woven",
  "rechiseled:jungle_planks_woven_connecting",
];
const rechiseled_mangrove = [
  "rechiseled:mangrove_planks_beams",
  "rechiseled:mangrove_planks_beams_connecting",
  "rechiseled:mangrove_planks_brick_pattern",
  "rechiseled:mangrove_planks_brick_pattern_connecting",
  "rechiseled:mangrove_planks_brick_paving",
  "rechiseled:mangrove_planks_brick_paving_connecting",
  "rechiseled:mangrove_planks_bricks",
  "rechiseled:mangrove_planks_bricks_connecting",
  "rechiseled:mangrove_planks_crate",
  "rechiseled:mangrove_planks_crate_connecting",
  "rechiseled:mangrove_planks_diagonal_stripes",
  "rechiseled:mangrove_planks_diagonal_stripes_connecting",
  "rechiseled:mangrove_planks_diagonal_tiles",
  "rechiseled:mangrove_planks_diagonal_tiles_connecting",
  "rechiseled:mangrove_planks_dotted",
  "rechiseled:mangrove_planks_dotted_connecting",
  "rechiseled:mangrove_planks_flooring",
  "rechiseled:mangrove_planks_flooring_connecting",
  "rechiseled:mangrove_planks_large_tiles",
  "rechiseled:mangrove_planks_large_tiles_connecting",
  "rechiseled:mangrove_planks_mosaic",
  "rechiseled:mangrove_planks_pattern",
  "rechiseled:mangrove_planks_pattern_connecting",
  "rechiseled:mangrove_planks_rotated_bricks",
  "rechiseled:mangrove_planks_rotated_bricks_connecting",
  "rechiseled:mangrove_planks_small_bricks",
  "rechiseled:mangrove_planks_small_bricks_connecting",
  "rechiseled:mangrove_planks_small_tiles",
  "rechiseled:mangrove_planks_small_tiles_connecting",
  "rechiseled:mangrove_planks_squares",
  "rechiseled:mangrove_planks_squares_connecting",
  "rechiseled:mangrove_planks_tiles",
  "rechiseled:mangrove_planks_tiles_connecting",
  "rechiseled:mangrove_planks_wavy",
  "rechiseled:mangrove_planks_wavy_connecting",
  "rechiseled:mangrove_planks_woven",
  "rechiseled:mangrove_planks_woven_connecting",
];
const rechiseled_oak = [
  "rechiseled:oak_planks_beams",
  "rechiseled:oak_planks_beams_connecting",
  "rechiseled:oak_planks_brick_pattern",
  "rechiseled:oak_planks_brick_pattern_connecting",
  "rechiseled:oak_planks_brick_paving",
  "rechiseled:oak_planks_brick_paving_connecting",
  "rechiseled:oak_planks_bricks",
  "rechiseled:oak_planks_bricks_connecting",
  "rechiseled:oak_planks_crate",
  "rechiseled:oak_planks_crate_connecting",
  "rechiseled:oak_planks_diagonal_stripes",
  "rechiseled:oak_planks_diagonal_stripes_connecting",
  "rechiseled:oak_planks_diagonal_tiles",
  "rechiseled:oak_planks_diagonal_tiles_connecting",
  "rechiseled:oak_planks_dotted",
  "rechiseled:oak_planks_dotted_connecting",
  "rechiseled:oak_planks_flooring",
  "rechiseled:oak_planks_flooring_connecting",
  "rechiseled:oak_planks_large_tiles",
  "rechiseled:oak_planks_large_tiles_connecting",
  "rechiseled:oak_planks_mosaic",
  "rechiseled:oak_planks_pattern",
  "rechiseled:oak_planks_pattern_connecting",
  "rechiseled:oak_planks_rotated_bricks",
  "rechiseled:oak_planks_rotated_bricks_connecting",
  "rechiseled:oak_planks_small_bricks",
  "rechiseled:oak_planks_small_bricks_connecting",
  "rechiseled:oak_planks_small_tiles",
  "rechiseled:oak_planks_small_tiles_connecting",
  "rechiseled:oak_planks_squares",
  "rechiseled:oak_planks_squares_connecting",
  "rechiseled:oak_planks_tiles",
  "rechiseled:oak_planks_tiles_connecting",
  "rechiseled:oak_planks_wavy",
  "rechiseled:oak_planks_wavy_connecting",
  "rechiseled:oak_planks_woven",
  "rechiseled:oak_planks_woven_connecting",
];
const rechiseled_spruce = [
  "rechiseled:spruce_planks_beams",
  "rechiseled:spruce_planks_beams_connecting",
  "rechiseled:spruce_planks_brick_pattern",
  "rechiseled:spruce_planks_brick_pattern_connecting",
  "rechiseled:spruce_planks_brick_paving",
  "rechiseled:spruce_planks_brick_paving_connecting",
  "rechiseled:spruce_planks_bricks",
  "rechiseled:spruce_planks_bricks_connecting",
  "rechiseled:spruce_planks_crate",
  "rechiseled:spruce_planks_crate_connecting",
  "rechiseled:spruce_planks_diagonal_stripes",
  "rechiseled:spruce_planks_diagonal_stripes_connecting",
  "rechiseled:spruce_planks_diagonal_tiles",
  "rechiseled:spruce_planks_diagonal_tiles_connecting",
  "rechiseled:spruce_planks_dotted",
  "rechiseled:spruce_planks_dotted_connecting",
  "rechiseled:spruce_planks_flooring",
  "rechiseled:spruce_planks_flooring_connecting",
  "rechiseled:spruce_planks_large_tiles",
  "rechiseled:spruce_planks_large_tiles_connecting",
  "rechiseled:spruce_planks_mosaic",
  "rechiseled:spruce_planks_pattern",
  "rechiseled:spruce_planks_pattern_connecting",
  "rechiseled:spruce_planks_rotated_bricks",
  "rechiseled:spruce_planks_rotated_bricks_connecting",
  "rechiseled:spruce_planks_small_bricks",
  "rechiseled:spruce_planks_small_bricks_connecting",
  "rechiseled:spruce_planks_small_tiles",
  "rechiseled:spruce_planks_small_tiles_connecting",
  "rechiseled:spruce_planks_squares",
  "rechiseled:spruce_planks_squares_connecting",
  "rechiseled:spruce_planks_tiles",
  "rechiseled:spruce_planks_tiles_connecting",
  "rechiseled:spruce_planks_wavy",
  "rechiseled:spruce_planks_wavy_connecting",
  "rechiseled:spruce_planks_woven",
  "rechiseled:spruce_planks_woven_connecting",
];
const rechiseled_warped = [
  "rechiseled:warped_planks_beams",
  "rechiseled:warped_planks_beams_connecting",
  "rechiseled:warped_planks_brick_pattern",
  "rechiseled:warped_planks_brick_pattern_connecting",
  "rechiseled:warped_planks_brick_paving",
  "rechiseled:warped_planks_brick_paving_connecting",
  "rechiseled:warped_planks_bricks",
  "rechiseled:warped_planks_bricks_connecting",
  "rechiseled:warped_planks_crate",
  "rechiseled:warped_planks_crate_connecting",
  "rechiseled:warped_planks_diagonal_stripes",
  "rechiseled:warped_planks_diagonal_stripes_connecting",
  "rechiseled:warped_planks_diagonal_tiles",
  "rechiseled:warped_planks_diagonal_tiles_connecting",
  "rechiseled:warped_planks_dotted",
  "rechiseled:warped_planks_dotted_connecting",
  "rechiseled:warped_planks_flooring",
  "rechiseled:warped_planks_flooring_connecting",
  "rechiseled:warped_planks_large_tiles",
  "rechiseled:warped_planks_large_tiles_connecting",
  "rechiseled:warped_planks_mosaic",
  "rechiseled:warped_planks_pattern",
  "rechiseled:warped_planks_pattern_connecting",
  "rechiseled:warped_planks_rotated_bricks",
  "rechiseled:warped_planks_rotated_bricks_connecting",
  "rechiseled:warped_planks_small_bricks",
  "rechiseled:warped_planks_small_bricks_connecting",
  "rechiseled:warped_planks_small_tiles",
  "rechiseled:warped_planks_small_tiles_connecting",
  "rechiseled:warped_planks_squares",
  "rechiseled:warped_planks_squares_connecting",
  "rechiseled:warped_planks_tiles",
  "rechiseled:warped_planks_tiles_connecting",
  "rechiseled:warped_planks_wavy",
  "rechiseled:warped_planks_wavy_connecting",
  "rechiseled:warped_planks_woven",
  "rechiseled:warped_planks_woven_connecting",
];

const xyAluminum = [
  "xycraft_world:aluminum_ore_stone",
  "xycraft_world:aluminum_ore_kivi",
  "xycraft_world:aluminum_ore_deepslate",
];

const ender_pearl_variations = [
  "endermanoverhaul:corrupted_pearl",
  "endermanoverhaul:soul_pearl",
  "endermanoverhaul:ancient_pearl",
  "endermanoverhaul:bubble_pearl",
  "endermanoverhaul:summoner_pearl",
  "endermanoverhaul:icy_pearl",
  "endermanoverhaul:crimson_pearl",
  "endermanoverhaul:warped_pearl",
];

const hidden_items = [
  "actuallyadditions:flax_seeds",
  "mysticalagriculture:enchanter",
  //Colored Cable Tier's Crafters kinda flood JEI.
  /cabletiers:.*_elite_autocrafter/,
  /cabletiers:.*_ultra_autocrafter/,
  /cabletiers:.*_mega_autocrafter/,
  /cabletiers:.*_creative_autocrafter/
];

const t1seeds = [
  "mysticalagriculture:stone_seeds",
  "mysticalagriculture:dirt_seeds",
  "mysticalagriculture:wood_seeds",
  "mysticalagriculture:ice_seeds",
  "mysticalagriculture:deepslate_seeds",
];

const elementalseed = [
  "mysticalagriculture:air_seeds",
  "mysticalagriculture:earth_seeds",
  "mysticalagriculture:water_seeds",
  "mysticalagriculture:fire_seeds",
];

const t2seeds = [
  //Vanilla
  "mysticalagriculture:nature_seeds",
  "mysticalagriculture:dye_seeds",
  "mysticalagriculture:nether_seeds",
  "mysticalagriculture:coal_seeds",
  "mysticalagriculture:coral_seeds",
  "mysticalagriculture:honey_seeds",
  "mysticalagriculture:amethyst_seeds",
  //Modded
  "mysticalagriculture:rubber_seeds",
  "mysticalagriculture:silicon_seeds",
  "mysticalagriculture:sulfur_seeds",
  "mysticalagriculture:aluminum_seeds",
  "mysticalagriculture:saltpeter_seeds",
  "mysticalagriculture:grains_of_infinity_seeds",
  "mysticalagriculture:limestone_seeds",
  "mysticalagriculture:menril_seeds",
];

const t2mobseeds = [
  "mysticalagriculture:pig_seeds",
  "mysticalagriculture:chicken_seeds",
  "mysticalagriculture:cow_seeds",
  "mysticalagriculture:sheep_seeds",
  "mysticalagriculture:squid_seeds",
  "mysticalagriculture:fish_seeds",
  "mysticalagriculture:slime_seeds",
  "mysticalagriculture:turtle_seeds",
  "mysticalagriculture:armadillo_seeds",
];

const t3seeds = [
  //Vanilla
  "mysticalagriculture:iron_seeds",
  "mysticalagriculture:copper_seeds",
  "mysticalagriculture:nether_quartz_seeds",
  "mysticalagriculture:glowstone_seeds",
  "mysticalagriculture:redstone_seeds",
  "mysticalagriculture:obsidian_seeds",
  "mysticalagriculture:prismarine_seeds",
  //Modded
  "mysticalagriculture:tin_seeds",
  "mysticalagriculture:zinc_seeds",
  "mysticalagriculture:silver_seeds",
  "mysticalagriculture:lead_seeds",
  "mysticalagriculture:copper_alloy_seeds",
  "mysticalagriculture:conductive_alloy_seeds",
  "mysticalagriculture:sky_stone_seeds",
  "mysticalagriculture:certus_quartz_seeds",
  "mysticalagriculture:quartz_enriched_copper_seeds",
  "mysticalagriculture:quartz_enriched_iron_seeds",
];

const t3mobseeds = [
  "mysticalagriculture:zombie_seeds",
  "mysticalagriculture:skeleton_seeds",
  "mysticalagriculture:creeper_seeds",
  "mysticalagriculture:spider_seeds",
  "mysticalagriculture:phantom_seeds",
  "mysticalagriculture:rabbit_seeds",
];

const t4seeds = [
  //Vanilla
  "mysticalagriculture:gold_seeds",
  "mysticalagriculture:lapis_lazuli_seeds",
  "mysticalagriculture:end_seeds",
  "mysticalagriculture:experience_seeds",
  //Modded
  "mysticalagriculture:soulium_seeds",
  "mysticalagriculture:soularium_seeds",
  "mysticalagriculture:steel_seeds",
  "mysticalagriculture:nickel_seeds",
  "mysticalagriculture:constantan_seeds",
  "mysticalagriculture:uranium_seeds",
  "mysticalagriculture:hop_graphite_seeds",
  "mysticalagriculture:osmium_seeds",
  "mysticalagriculture:fluorite_seeds",
  "mysticalagriculture:compressed_iron_seeds",
  "mysticalagriculture:fluix_seeds",
];

const t4mobseeds = [
  //Vanilla
  "mysticalagriculture:blaze_seeds",
  "mysticalagriculture:ghast_seeds",
  "mysticalagriculture:enderman_seeds",
  //Modded
  "mysticalagriculture:breeze_seeds",
];

const t5seeds = [
  //Vanilla
  "mysticalagriculture:diamond_seeds",
  "mysticalagriculture:emerald_seeds",
  "mysticalagriculture:netherite_seeds",
  //Modded
  "mysticalagriculture:entro_crystal_seeds",
  "mysticalagriculture:platinum_seeds",
  "mysticalagriculture:iridium_seeds",
  "mysticalagriculture:uraninite_seeds",
];

const t5mobseeds = ["mysticalagriculture:wither_skeleton_seeds"];

const georegolems = [
  "georenouveau:amethyst_golem_charm",
  "georenouveau:coal_geore_golem_charm",
  "georenouveau:copper_geore_golem_charm",
  "georenouveau:diamond_geore_golem_charm",
  "georenouveau:emerald_geore_golem_charm",
  "georenouveau:gold_geore_golem_charm",
  "georenouveau:iron_geore_golem_charm",
  "georenouveau:lapis_geore_golem_charm",
  "georenouveau:quartz_geore_golem_charm",
  "georenouveau:redstone_geore_golem_charm",
  "georenouveau:ancient_debris_geore_golem_charm",
  "georenouveau:ruby_geore_golem_charm",
  "georenouveau:sapphire_geore_golem_charm",
  "georenouveau:topaz_geore_golem_charm",
  "georenouveau:zinc_geore_golem_charm",
  "georenouveau:uraninite_geore_golem_charm",
  "georenouveau:black_quartz_geore_golem_charm",
  "georenouveau:monazite_geore_golem_charm",
  "georenouveau:aluminum_geore_golem_charm",
  "georenouveau:lead_geore_golem_charm",
  "georenouveau:nickel_geore_golem_charm",
  "georenouveau:osmium_geore_golem_charm",
  "georenouveau:platinum_geore_golem_charm",
  "georenouveau:silver_geore_golem_charm",
  "georenouveau:tin_geore_golem_charm",
  "georenouveau:tungsten_geore_golem_charm",
  "georenouveau:uranium_geore_golem_charm",
];

ServerEvents.tags("item", (event) => {
  //Adding Create's Andesite Blocks to the Chipped Andesite Tag.
  event.add("chipped:andesite", [
    "create:cut_andesite",
    "create:polished_cut_andesite",
    "create:cut_andesite_bricks",
    "create:small_andesite_bricks",
    "create:layered_andesite",
    "create:andesite_pillar",
  ]);
  //Adding Create's Granite Blocks to the Chipped Granite Tag.
  event.add("chipped:granite", [
    "create:cut_granite",
    "create:polished_cut_granite",
    "create:cut_granite_bricks",
    "create:small_granite_bricks",
    "create:layered_granite",
    "create:granite_pillar",
  ]);
  //Adding Create's Diorite Blocks to the Chipped Diorite Tag.
  event.add("chipped:diorite", [
    "create:cut_diorite",
    "create:polished_cut_diorite",
    "create:cut_diorite_bricks",
    "create:small_diorite_bricks",
    "create:layered_diorite",
    "create:diorite_pillar",
  ]);
  //Adding Create's Calcite Blocks to the Chipped Calcite Tag.
  event.add("chipped:calcite", [
    "create:cut_calcite",
    "create:polished_cut_calcite",
    "create:cut_calcite_bricks",
    "create:small_calcite_bricks",
    "create:layered_calcite",
    "create:calcite_pillar",
  ]);
  //Adding Create's Dripstone Blocks to the Chipped Dripstone Tag.
  event.add("chipped:dripstone_block", [
    "create:cut_dripstone",
    "create:polished_cut_dripstone",
    "create:cut_dripstone_bricks",
    "create:small_dripstone_bricks",
    "create:layered_dripstone",
    "create:dripstone_pillar",
  ]);
  //Adding Create's Deepslate Blocks to the Chipped Deepslate Tag.
  event.add("chipped:deepslate", [
    "create:cut_deepslate",
    "create:polished_cut_deepslate",
    "create:cut_deepslate_bricks",
    "create:small_deepslate_bricks",
    "create:layered_deepslate",
    "create:deepslate_pillar",
  ]);

  event.add("ftb:upgradable_helmets", [
    "minecraft:iron_helmet",
    "modern_industrialization:rubber_helmet",
    "pneumaticcraft:compressed_iron_helmet",
    "minecraft:chainmail_helmet",
    "minecraft:golden_helmet",
    "immersiveengineering:armor_faraday_helmet",
    "roots:beetle_helmet",
    "roots:copper_helmet",
    "justdirethings:ferricore_helmet",
  ]);

  event.add("ftb:upgradable_leggings", [
    "minecraft:iron_leggings",
    "pneumaticcraft:compressed_iron_leggings",
    "minecraft:chainmail_leggings",
    "minecraft:golden_leggings",
    "immersiveengineering:armor_faraday_leggings",
    "roots:beetle_leggings",
    "roots:copper_leggings",
    "justdirethings:ferricore_leggings",
  ]);

  event.add("ftb:upgradable_chestplates", [
    "minecraft:iron_chestplate",
    "pneumaticcraft:compressed_iron_chestplate",
    "minecraft:chainmail_chestplate",
    "minecraft:golden_chestplate",
    "immersiveengineering:armor_faraday_chestplate",
    "roots:beetle_chestplate",
    "roots:copper_chestplate",
    "justdirethings:ferricore_chestplate",
  ]);

  event.add("ftb:upgradable_boots", [
    "minecraft:iron_boots",
    "modern_industrialization:rubber_boots",
    "pneumaticcraft:compressed_iron_boots",
    "minecraft:chainmail_boots",
    "minecraft:golden_boots",
    "immersiveengineering:armor_faraday_boots",
    "roots:beetle_boots",
    "roots:copper_boots",
    "justdirethings:ferricore_boots",
  ]);

  //Adding Create's Tuff Blocks to the Chipped Tuff Tag.
  event.add("chipped:tuff", [
    "create:cut_tuff",
    "create:polished_cut_tuff",
    "create:cut_tuff_bricks",
    "create:small_tuff_bricks",
    "create:layered_tuff",
    "create:tuff_pillar",
  ]);
  //Adding Create's Waxed Copper Blocks to the Chipped Waxed Copper Tag.
  event.add("chipped:waxed_copper_block", [
    "create:waxed_copper_shingles",
    "create:waxed_copper_tiles",
  ]);
  event.add("chipped:waxed_exposed_copper_block", [
    "create:waxed_exposed_copper_shingles",
    "create:waxed_exposed_copper_tiles",
  ]);
  event.add("chipped:waxed_weathered_copper", [
    "create:waxed_weathered_copper_shingles",
    "create:waxed_weathered_copper_tiles",
  ]);
  event.add("chipped:waxed_oxidized_copper", [
    "create:waxed_oxidized_copper_shingles",
    "create:waxed_oxidized_copper_tiles",
  ]);

  event.add("ftb:enderman_head", [
    "enderio:enderman_head",
    "heads:enderman_head",
  ]);

  event.add("minecraft:short_grass", [
    "projectvibrantjourneys:short_grass",
    "minecraft:short_grass",
  ]);

  event.add("c:glass/colorless", [
    "#c:glass_blocks/colorless",
    "minecraft:glass",
  ]);


  event.add("ftb:corals", [
    "minecraft:tube_coral",
    "minecraft:brain_coral",
    "minecraft:bubble_coral",
    "minecraft:fire_coral",
    "minecraft:horn_coral",
    "minecraft:tube_coral_fan",
    "minecraft:brain_coral_fan",
    "minecraft:bubble_coral_fan",
    "minecraft:fire_coral_fan",
    "minecraft:horn_coral_fan"
  ]);

  event.remove("c:water", ["oritech:still_oil_bucket"]);

  //Adding Silent Gear's Silks to the String Tag
  event.add("c:strings", ["silentgear:fine_silk"]);
  event.add("c:strings", ["silentgear:fluffy_string"]);

  //Adding OhTheBiomes Pumpkin to a more general Pumpkin Tag
  event.add("chipped:pumpkin", ["biomeswevegone:pale_pumpkin"]);

  event.add("megacells:compression_overrides", "productivebees:obsidian_shard");
  event.add(
    "functionalstorage:ignore_crafting_check",
    "the_bumblezone:pollen_puff"
  );

  event.add("forge:ingots/iron", ["minecraft:iron_ingot"]);
  event.add("c:ores/uranium", ["bigreactors:deepslate_yellorite_ore"]);
  event.add("forge:ingots/iron", ["minecraft:iron_ingot"]);
  event.add("forge:dusts/redstone", ["minecraft:redstone"]);
  event.add("functionalstorage:ignore_crafting_check", "minecraft:snowball");
  event.add("functionalstorage:ignore_crafting_check", "minecraft:string");
  event.add("megacells:compression_overrides", "minecraft:string");
  event.add("forge:glass_panes/colorless", ["minecraft:glass_pane"]);
  event.add("c:dusts", ["mysticalagriculture:soulium_dust"]);
  event.add("c:dusts/soulium", ["mysticalagriculture:soulium_dust"]);
  event.add(
    "functionalstorage:ignore_crafting_check",
    "productivebees:draconic_dust"
  );
  event.add(
    "functionalstorage:ignore_crafting_check",
    "productivebees:obsidian_shard"
  );
  event.add("productivebees:flowers/plastic", "industrialforegoing:plastic");

  //remove globally ununified items
  global.get("unUnified").forEach((id) => {
    event.removeAllTagsFrom(id);
    event.add("c:hidden_from_recipe_viewers", id);
  });

  //Hiding only Items.
  hidden_items.forEach((id) => {
    event.add("c:hidden_from_recipe_viewers", id);
  });

  //remove spawn eggs
  event.remove("ftb:spawn_eggs", "productivebees:spawn_egg_configurable_bee");
  [
    "ars_nouveau:whirlisprig_se",
    "ars_nouveau:wilden_guardian_se",
    "ars_nouveau:wilden_hunter_se",
    "ars_nouveau:wilden_stalker_se",
  ].forEach((item) => event.add("ftb:spawn_eggs", item));

  //Adding Rechiseled Planks to Specific Tags
  rechiseled_acacia.forEach((plank) => {
    event.add("rechiseled:acacia_planks", plank);
  });
  rechiseled_oak.forEach((plank) => {
    event.add("rechiseled:oak_planks", plank);
  });
  rechiseled_spruce.forEach((plank) => {
    event.add("rechiseled:spruce_planks", plank);
  });
  rechiseled_birch.forEach((plank) => {
    event.add("rechiseled:birch_planks", plank);
  });
  rechiseled_jungle.forEach((plank) => {
    event.add("rechiseled:jungle_planks", plank);
  });
  rechiseled_dark_oak.forEach((plank) => {
    event.add("rechiseled:dark_oak_planks", plank);
  });
  rechiseled_mangrove.forEach((plank) => {
    event.add("rechiseled:mangrove_planks", plank);
  });
  rechiseled_cherry.forEach((plank) => {
    event.add("rechiseled:cherry_planks", plank);
  });
  rechiseled_bamboo.forEach((plank) => {
    event.add("rechiseled:bamboo_planks", plank);
  });
  rechiseled_crimson.forEach((plank) => {
    event.add("rechiseled:crimson_planks", plank);
  });
  rechiseled_warped.forEach((plank) => {
    event.add("rechiseled:warped_planks", plank);
  });

  //Adding All Vanilla Planks to a specific Tag ===================================================

  //First Adding from Other Plank OreDicts
  event.add("ftb:vanilla_planks", "#chipped:oak_planks");
  event.add("ftb:vanilla_planks", "#chipped:spruce_planks");
  event.add("ftb:vanilla_planks", "#chipped:birch_planks");
  event.add("ftb:vanilla_planks", "#chipped:jungle_planks");
  event.add("ftb:vanilla_planks", "#chipped:acacia_planks");
  event.add("ftb:vanilla_planks", "#chipped:dark_oak_planks");
  event.add("ftb:vanilla_planks", "#chipped:mangrove_planks");
  event.add("ftb:vanilla_planks", "#chipped:cherry_planks");
  event.add("ftb:vanilla_planks", "#chipped:bamboo_planks");
  event.add("ftb:vanilla_planks", "#chipped:crimson_planks");
  event.add("ftb:vanilla_planks", "#chipped:warped_planks");
  event.add("ftb:vanilla_planks", "#rechiseled:oak_planks");
  event.add("ftb:vanilla_planks", "#rechiseled:spruce_planks");
  event.add("ftb:vanilla_planks", "#rechiseled:birch_planks");
  event.add("ftb:vanilla_planks", "#rechiseled:jungle_planks");
  event.add("ftb:vanilla_planks", "#rechiseled:acacia_planks");
  event.add("ftb:vanilla_planks", "#rechiseled:dark_oak_planks");
  event.add("ftb:vanilla_planks", "#rechiseled:mangrove_planks");
  event.add("ftb:vanilla_planks", "#rechiseled:cherry_planks");
  event.add("ftb:vanilla_planks", "#rechiseled:bamboo_planks");
  event.add("ftb:vanilla_planks", "#rechiseled:crimson_planks");
  event.add("ftb:vanilla_planks", "#rechiseled:warped_planks");

  //Second Adding from Lists
  vanillaPlanks.forEach((plank) => {
    event.add("ftb:vanilla_planks", plank);
  });

  ender_pearl_variations.forEach((pearl) => {
    event.add("ftb:ender_pearl_variations", pearl);
  });

  //Powered Furnaces Tag
  const powered_furnaces = [
    "actuallyadditions:powered_furnace",
    "industrialforegoing:resourceful_furnace",
    "modern_industrialization:electric_furnace",
    "oritech:powered_furnace_block",
  ];

  powered_furnaces.forEach((furnace) => {
    event.add("ftb:powered_furnaces", furnace);
  });

  //Tanks Tag
  let modpack_tanks = [
    "mekanism:basic_fluid_tank",
    "mekanism:advanced_fluid_tank",
    "mekanism:elite_fluid_tank",
    "mekanism:ultimate_fluid_tank",
    "modern_industrialization:iron_tank",
    "modern_industrialization:bronze_tank",
    "modern_industrialization:steel_tank",
    "modern_industrialization:aluminum_tank",
    "modern_industrialization:stainless_steel_tank",
    "modern_industrialization:titanium_tank",
    "modern_industrialization:quantum_tank",
    "pneumaticcraft:huge_tank",
    "pneumaticcraft:large_tank",
    "pneumaticcraft:medium_tank",
    "pneumaticcraft:small_tank",
    "dimstorage:dimensional_tank",
    "oritech:small_tank_block",
    "enderio:pressurized_fluid_tank",
    "enderio:fluid_tank",
    "mob_grinding_utils:jumbo_tank",
    "mob_grinding_utils:tank",
  ];

  modpack_tanks.forEach((tank) => {
    event.add("ftb:tanks", tank);
  });

  //Adding Niter Dusts to Saltpeter Tag since they're equivalent.
  event.add("c:dusts/saltpeter", "ftbmaterials:niter_dust");

  //Adding Black Quartz to the All Quartz AE Tag.
  event.add("ae2:all_quartz", "actuallyadditions:black_quartz");

  //Adding our Custom Ruby Gem to the Ruby Gem Tag
  event.add("productivebees:flowers/ruby", "ftbmaterials:ruby_gem");

  //Adding the Correct Brick Tag to Vanilla Bricks.
  event.add("c:ingots/brick", "minecraft:brick");

  //Adding more Hammers to MI's Hammer List
  event.add("modern_industrialization:forge_hammer_tools", [
    "ftbstuff:stone_hammer",
    "ftbstuff:iron_hammer",
    "ftbstuff:gold_hammer",
    "ftbstuff:diamond_hammer",
    "ftbstuff:netherite_hammer",
    "silentgear:crude_hammer",
  ]);

  //Creating a Tag specifically for Squat Grow Hoes.
  const hoes = event.get("minecraft:hoes").getObjectIds();
  hoes.forEach((hoe) => {
    if (hoe !== "silentgear:hoe") {
      event.add("ftb:non_silent_hoes", hoe);
    }
  });

  //Creating a Tag to Fix the Conflict when hammering Kivi.
  const non_kivi_stones = event.get("c:stones").getObjectIds();
  non_kivi_stones.forEach((stone) => {
    if (
      stone !== "xycraft_world:kivi" &&
      stone !== "xycraft_world:smooth_kivi"
    ) {
      event.add("ftb:non_kivi_stones", stone);
    }
  });

  //For fire crafting
  const fire_immune_items = [
    "cognition:cognitive_flux",
    "minecraft:iron_block",
    "ftbmaterials:obsidian_dust",
    "cognition:primordial_assembly",
    "irons_spellbooks:scroll",
    "ftbmaterials:silver_block",
    "ftbmaterials:aluminum_block",
    "geore:budding_osmium",
    "actuallyadditions:black_quartz",
  ];
  fire_immune_items.forEach((item) => {
    event.add("lychee:fire_immune", item);
  });

  //For making quests easier to update
  event.add("ftb:t1seeds", t1seeds);
  event.add("ftb:elementalseed", elementalseed);
  event.add("ftb:t2seeds", t2seeds);
  event.add("ftb:t2mobseeds", t2mobseeds);
  event.add("ftb:t3seeds", t3seeds);
  event.add("ftb:t3mobseeds", t3mobseeds);
  event.add("ftb:t4seeds", t4seeds);
  event.add("ftb:t4mobseeds", t4mobseeds);
  event.add("ftb:t5seeds", t5seeds);
  event.add("ftb:t5mobseeds", t5mobseeds);
  event.add("ftb:georegolems", georegolems);

  //Adding MI's Rubber to the correct Rubber Tag. (Fixes MA's Rubber Seed Recipe)
  event.add("c:rubber", "modern_industrialization:rubber_sheet");

  //Adding FTB Mat's Niter Dust to MA's Saltpeter Tag. (Fixes MA's Saltpeter Seed Recipe)
  event.add(
    "mysticalagriculture:material/saltpeter",
    "ftbmaterials:niter_dust"
  );
  event.add("modern_industrialization:rubber_sheet", "modern_industrialization:rubber_sheet");

  event.add("neoforge:dusts/gold", "#c:dusts/gold");
  event.add("neoforge:dusts/obsidian", "#c:dusts/obsidian");
});
