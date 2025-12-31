// priority: 800
const event_pyromancer = {
  name: "ftb:pyromancer",
  displayName: "Pyromancer",
  description: "Toggles the Pyromancer Event.",
  chance: 0.5,
  minDistance: 2,
  maxDistance: 15,
  size: 0,
  checkBlocks: ["minecraft:air"],
  requireBlockBelow: true,
//   no_solicitors: Block.id("cyclic:no_soliciting").blockState,
  stage: null,
  disableStage: null,

  execute(event, player, location, name) {
    const level = player.getLevel();

    const checkAmountOfTraders = new Ku.Level(level).findEntitiesWithinRadius(
      "irons_spellbooks:pyromancer",
      location.pos,
      64
    );
    if(checkAmountOfTraders.length >= 2) {
      Statistics().addFailure(this.displayName);
      Statistics().removeSuccess(this.displayName);
      if(Math.random() < 0.5) { eventSystem(event); }
      return};

    player.tell([`Pyromancer has spawned at X: ${location.pos.x}, Y: ${location.pos.y}, Z: ${location.pos.z}`]);

    let entityWandering = level.createEntity("irons_spellbooks:pyromancer");
    if(name) {
      entityWandering.setCustomName(name)
      entityWandering.setCustomNameVisible(true)
    }
    entityWandering.setPosition(location.pos.x + 0.5, location.pos.y + 0.5, location.pos.z + 0.5);
    entityWandering.spawn();
  
  },
};