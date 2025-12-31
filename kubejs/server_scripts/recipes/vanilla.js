// priority: 964

ServerEvents.recipes((event) => {
  //vanilla Bookshelf == Oak Bookshelf (Fixes a Recipe Conflict)
  event.replaceInput(
    { id: "minecraft:bookshelf" },
    "#minecraft:planks",
    "#ftb:vanilla_planks"
  );

  //Fixing the Vanilla Crafting Table Recipe
  event.replaceInput(
    { id: "minecraft:crafting_table" },
    "#minecraft:planks",
    "#ftb:vanilla_planks"
  );

  //Improving the Dispenser Recipe (Now Accepts multiple types of Cobble)
  event.replaceInput(
    { id: "minecraft:dispenser" },
    "#c:cobblestones/normal",
    "#minecraft:stone_crafting_materials"
  );

  //Improving the Observer Recipe (Now Accepts multiple types of Cobble)
  event.replaceInput(
    { id: "minecraft:observer" },
    "#c:cobblestones/normal",
    "#minecraft:stone_crafting_materials"
  );

  //Improving the Piston Recipe (Now Accepts multiple types of Cobble)
  event.replaceInput(
    { id: "minecraft:piston" },
    "#c:cobblestones/normal",
    "#minecraft:stone_crafting_materials"
  );

  //Improving the Dropper Recipe (Now Accepts multiple types of Cobble)
  event.replaceInput(
    { id: "minecraft:dropper" },
    "#c:cobblestones/normal",
    "#minecraft:stone_crafting_materials"
  );

  //Improving the Lever Recipe (Now Accepts multiple types of Cobble and Sticks)
  event.replaceInput(
    { id: "minecraft:lever" },
    "#c:cobblestones/normal",
    "#minecraft:stone_crafting_materials"
  );
  event.replaceInput(
    { id: "minecraft:lever" },
    "#minecraft:stick",
    "#c:rods/wooden"
  );

  //Improving the Beehive Recipe (Now Accepts multiple types of Combs)
  event.replaceInput(
    { id: "minecraft:beehive" },
    "minecraft:honeycomb",
    "#c:honeycombs"
  );

  //Improving the Sticky Piston Recipe (Now Accepts multiple types of Slime)
  event.replaceInput(
    { id: "minecraft:sticky_piston" },
    "minecraft:slime_ball",
    "#c:slime_balls"
  );

  //Improving the Lead Recipe (Now Accepts multiple types of Slime)
  event.replaceInput(
    { id: "minecraft:lead" },
    "minecraft:slime_ball",
    "#c:slime_balls"
  );

  //Improving the Cake Recipe (Now Accepts multiple types of Milk)
  event.replaceInput(
    { id: "minecraft:cake" },
    "minecraft:milk_bucket",
    "#c:foods/milk"
  );

  //Trying to Fix the Honey Block Recipe in AE2 (The Default Vanilla Recipe would always leave 1 honey bottle in the terminal for some reason)
  event
    .shapeless(Item.of("minecraft:honey_block"), [
      "minecraft:honey_bottle",
      "minecraft:honey_bottle",
      "minecraft:honey_bottle",
      "minecraft:honey_bottle",
    ])
    .id("ftb:minecraft/honey_block");

  //Workaround until the Pillager Captain Loottable is fixed.
  event
    .shapeless(Item.of("minecraft:ominous_bottle"), [
      `minecraft:white_banner[banner_patterns=[{color:"cyan",pattern:"minecraft:rhombus"},{color:"light_gray",pattern:"minecraft:stripe_bottom"},{color:"gray",pattern:"minecraft:stripe_center"},{color:"light_gray",pattern:"minecraft:border"},{color:"black",pattern:"minecraft:stripe_middle"},{color:"light_gray",pattern:"minecraft:half_horizontal"},{color:"light_gray",pattern:"minecraft:circle"},{color:"black",pattern:"minecraft:border"}],hide_additional_tooltip={},item_name='{"color":"gold","translate":"block.minecraft.ominous_banner"}']`,
      "minecraft:experience_bottle",
    ])
    .id("ftb:minecraft/ominous_bottle");

  //Fixing Red Dye from Beetroot Conflicting Recipe.
  event
    .shapeless(Item.of("2x minecraft:red_dye"), [
      "minecraft:beetroot",
      "minecraft:beetroot",
    ])
    .id("ftb:minecraft/red_dye_from_beetroot");

  //Adding a Gravel to Flint Recipe.
  event.shaped(Item.of("minecraft:flint", 1),
    ["GG", "G "],
    {
      G: "#c:gravels",
    }
  )
  .id("ftb:minecraft/shaped/gravel_to_flint");

  //Re-adding vanilla bonemeal recipe.
  event.shapeless(Item.of("minecraft:bone_meal", 3),
    "#c:bones"
  )
  .id("ftb:minecraft/bone_meal");

});
