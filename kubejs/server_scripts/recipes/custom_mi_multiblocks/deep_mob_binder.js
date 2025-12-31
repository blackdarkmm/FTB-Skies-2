ServerEvents.recipes(event => {

    //Recipe for the Controller Itself
    event.shaped(Item.of("modern_industrialization:deep_mob_binder", 1), ["CCC", "IFI", "CCC"], {
      C: "enderio:nethercotta",
      F: "enderio:ensouled_chassis",
      I: "enderio:skeletal_contractor"
    }).id("ftb:shaped/modern_industrialization/deep_mob_binder");

    let deep_mob_binder_recipes = [
        {   
            ticks: 200,
            input: `hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:witch"]`,
            output: `enderio:filled_soul_vial[enderio:stored_entity={entityTag:{id:"minecraft:witch"},maxHealth:0.0f}]`
        },
        {   
            ticks: 200,
            input: `hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:shulker"]`,
            output: `enderio:filled_soul_vial[enderio:stored_entity={entityTag:{id:"minecraft:shulker"},maxHealth:0.0f}]`
        },
        {   
            ticks: 200,
            input: `hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:zombie"]`,
            output: `enderio:filled_soul_vial[enderio:stored_entity={entityTag:{id:"minecraft:zombie"},maxHealth:0.0f}]`
        },
        {   
            ticks: 200,
            input: "easy_villagers:villager",
            output: `enderio:filled_soul_vial[enderio:stored_entity={entityTag:{id:"minecraft:villager"},maxHealth:0.0f}]`
        },
        {   
            ticks: 200,
            input: `hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:enderman"]`,
            output: `enderio:filled_soul_vial[enderio:stored_entity={entityTag:{id:"minecraft:enderman"},maxHealth:0.0f}]`
        }
    ];

    deep_mob_binder_recipes.forEach(recipe => {
        event.recipes.modern_industrialization.deep_mob_binder(32, recipe.ticks)
            .itemIn(recipe.input)
            .itemIn("enderio:empty_soul_vial")
            .itemOut(recipe.output)
    });
});

//Making the Deep Mob Binder Breakable.
ServerEvents.tags("block", (event) => {
    event.add("minecraft:mineable/pickaxe", "modern_industrialization:deep_mob_binder");
    event.add("minecraft:needs_stone_tool", "modern_industrialization:deep_mob_binder");
});
