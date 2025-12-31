// priority: 800

const event_llama = {
  name: "ftb:llama",
  displayName: "Llama",
  description: "Toggles the Llamapalooza Event. Spawns a random Loot Lama near you, Leash it before it runs away!",
  chance: 0.6,
  checkBlocks: ["minecraft:air"],
  requireBlockBelow: true,
  itemDespawnTime: 400,
  stage: null,
  minDistance: 2,
  maxDistance: 15,
  size: 0,
  commandSuggestions: [
    {"lootTable": "llamapalooza:resources/general"},
    {"lootTable": "llamapalooza:resources/ores"}
  ],
  
  execute(event, player, location, name, options) {
    const level = player.getLevel();
    const server = level.getServer();


    const checkAmountOfLlamas = new Ku.Level(level).findEntitiesWithinRadius(
      "llamapalooza:loot_llama",
      location.pos,
      64
    );
    if(checkAmountOfLlamas.length >= 4) {
      Statistics().addFailure(this.displayName);
      Statistics().removeSuccess(this.displayName);
      if(Math.random() < 0.5) { eventSystem(event); }
      return;
    };



    // console.log('Warning Player' + player.id + ' that a goat is near');
    player.sendSystemMessage(Text.translate("ftb.event_system.spawn.warning").red(), true);
    // player.sendSystemMessage(Text.translate("kubejs.events.rustling").red(), true);
    player.persistentData.timer = 11000; //lower their event timer instead of a full reset

    level.server.scheduleInTicks(140, () => {
      let llama = level.createEntity("llamapalooza:loot_llama");
      player.sendSystemMessage(Text.translate("ftb.event_system.llama.spawn").green(), true);
      llama.setLootTable(options?.lootTable ?? "ftb:llama_food")
      llama.x = location.pos.x;
      llama.y = location.pos.y;
      llama.z = location.pos.z;
      llama.setCustomName(Text.translate("ftb.loot_llama.name", [Text.translate("ftb.loot_llama.food").getString()]))
      llama.setCustomNameVisible(false);
      if(name) {
        llama.setCustomName(name)
        llama.setCustomNameVisible(true);
      }
      
      llama.spawn();
      server.runCommandSilent(
        `execute in ${player.level.dimension} positioned ${llama.x} ${
          llama.y -1
        } ${
          llama.z
        } run summon firework_rocket ~ ~1 ~ {LifeTime:15,FireworksItem:{id:firework_rocket,components:{fireworks:{flight_duration:1.5,explosions:[{shape:star,has_twinkle:1b,has_trail:1b,colors:[I;11546150,8439583],fade_colors:[I;16351261,16701501]}]}}}}`
      );

      level.server.scheduleInTicks(20*15, () => {
        if( llama.isLeashed()) {
          player.sendSystemMessage(Text.translate("ftb.event_system.llama.leash").green(), true);
          return;
        }

        level.spawnParticles("minecraft:smoke", true, llama.x, llama.y+0.5, llama.z, 0.25, 0.5, 0.25, 25, 0.01);
        player.sendSystemMessage(Text.translate("ftb.event_system.llama.escape").red(), true);
        llama.discard();
      });
    });
  },
};




