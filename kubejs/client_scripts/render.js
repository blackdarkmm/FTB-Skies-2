let arrow = 'jade:textures/gui/sprites/progress.png'
let oblong_frame = 'minecraft:textures/gui/sprites/advancements/goal_frame_unobtained.png'

/**
 * Renders a conversion recipe GUI, displaying the left item, a catalyst, a right-click icon, and the right item.
 * Originally designed by Matryoshika at lat.dev
 *
 * @param {object} event - The render event object, providing rendering methods.
 * @param {Item} left - The item.id to render on the left side of the recipe.
 * @param {Item} right - The item.id to render on the right side of the recipe.
 */
let renderConversionRecipe = (event, left, right) => {

    let screenHeight = Client.window.getGuiScaledHeight()
    let screenWidth = Client.window.getGuiScaledWidth()

    let sine = Math.sin((Utils.getSystemTime() % 9000) / 180.0)

    event.renderGuiItem(left, (screenWidth / 2) - 8 - 24, (screenHeight / 2) - 8 + 8 + (sine * 4))
    event.renderGuiItem(Item.of("ftb:void_crystal_catalyst"), (screenWidth / 2) - 8 - 24, (screenHeight / 2) - 8 + 32)


    event.drawTexture(oblong_frame, (screenWidth / 2) - 10, (screenHeight / 2) - 8 + 12, 20, 20)
    event.drawTexture("lychee:textures/gui/sprites/right_click.png", (screenWidth / 2) - 8, (screenHeight / 2) - 8 + 14, 16, 16)
    event.drawTexture(arrow, (screenWidth / 2) - 8, (screenHeight / 2) - 8 + 36, 16, 10, 0, 0, Math.min(((Utils.getSystemTime() % 1800) / 100.0), 16.0), 10 )
    
    // event.drawTexture(spiked_frame, (screenWidth / 2) - 8 + 20, (screenHeight / 2) - 8 + 28, 24, 24)
    event.renderGuiItem(right, (screenWidth / 2) - 8 + 24, (screenHeight / 2) - 8 + 32)
}

let renderFireStickRecipe = (event) => {
  let screenHeight = Client.window.getGuiScaledHeight();
  let screenWidth = Client.window.getGuiScaledWidth();
  let left = Item.of("ftb:firestick");

  event.renderGuiItem(
    left,
    screenWidth / 2 - 8 - 24,
    screenHeight / 2 - 8 + 32
  );

  event.renderGuiItem(
    Item.of("irons_spellbooks:fire_upgrade_orb"),
    screenWidth / 2 - 8 + 24,
    screenHeight / 2 - 8 + 32
  );
  event.drawTexture(
    "lollipop:textures/particles/glow_mid.png",
    screenWidth / 2 - 12,
    screenHeight / 2 - 11 + 32,
    24,
    24
  );
  event.drawTexture(
    "lychee:textures/gui/sprites/right_click.png",
    screenWidth / 2 - 8,
    screenHeight / 2 - 8 + 32,
    16,
    16
  );
};


RenderJSEvents.onGuiPostRender(event => {
  const client = event.client;
  const player = client.getCameraEntity();
  const debug = 0; // Set to 0 to disable debug messages

  if (!player) {
    if (debug) console.log("No player entity found.");
    return;
  }

  const handItem = player.getMainHandItem();
  if (!handItem) {
    if (debug) console.log("No item in main hand.");
    return;
  }

  const blockHitResult = player.rayTrace(5);
  if (!blockHitResult) {
    if (debug) console.log("No block in sight.");
    return;
  }

  const block = blockHitResult.block;
  if (!block) {
    if (debug) console.log("Block trace returned null.");
    return;
  }

  if (debug) {
    console.log(`Looking at block: ${block.id}`);
    console.log(`Holding item: ${handItem.id}`);
  }

  if (block.id === "ftb:void_crystal_catalyst") {
    const dyeToGeode = global.get("dyeToGeode") || [];
    for (const entry of dyeToGeode) {
      if (handItem.id === entry.dye) {
        if (debug) console.log(`Matched dye: ${entry.dye}, rendering geode: ${entry.geode}`);
        renderConversionRecipe(event, Item.of(entry.dye), Item.of(entry.geode));
        return;
      }
    }
  } else if (handItem.id === "ftb:firestick") {
    if (debug) console.log("Rendering firestick recipe UI.");
    renderFireStickRecipe(event);
  }
});

