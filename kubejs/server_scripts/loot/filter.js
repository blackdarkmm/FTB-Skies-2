LootJS.modifiers((event) => {
    event.addTableModifier(
        //Purposely excluded advancements and blocks
        LootType.CHEST,
        LootType.ENTITY,
        LootType.FISHING,
        LootType.GIFT,
        LootType.PIGLIN_BARTER,
        LootType.UNKNOWN
    )
    .customAction((context, loot) => {
        let entity = context.attackingEntity ?? context.entity;
        let staged = ["diamond", "emerald", "chance_cube", "bastion_ring", "peridot", "^modern_industrialization:.*_gear"];
        if(entity && entity.isPlayer()) staged = staged.filter($ => !entity.stages.has("obtained_" + $));
        loot.remove(RegExp(staged.join("|")));
    })
});
