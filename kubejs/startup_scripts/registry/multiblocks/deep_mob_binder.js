let deep_mob_binder

MIMachineEvents.registerRecipeTypes(event => {
    deep_mob_binder = event.register('deep_mob_binder')
        .withItemInputs()
        .withItemOutputs()
})

MIMachineEvents.registerMachines(event => {

    const obsidian = event.memberOfBlock("glassential:obsidian_glass");
    const sim_chamber = event.memberOfBlock("hostilenetworks:sim_chamber");
    const soul_binder = event.memberOfBlock("enderio:soul_binder");
    const soul_frame = event.memberOfBlock("enderio:ensouled_chassis");
    const soul_bricks = event.memberOfBlock("mysticalagriculture:soulstone_bricks");
    const soul_brazier = event.memberOfBlock("irons_spellbooks:brazier_soul");
    const hatchBlock = event.hatchOf("item_input", "item_output", "energy_input", "fluid_output");

    const multiblock_shape = event.layeredShape("soul_bricks_casing", [
        ["JJJ", "HEH", "CBC", "JJJ"],
        ["JJJ", "EFE", "BIB", "JSJ"],
        ["JJJ", "H#H", "CBC", "JJJ"],
    ])
        .key("C", soul_bricks, event.noHatch())
        .key("B", obsidian, event.noHatch())
        .key("F", sim_chamber, event.noHatch())
        .key("I", soul_binder, event.noHatch())
        .key("J", soul_frame, event.noHatch())
        .key("S", soul_brazier, event.noHatch())
        .key("H", soul_bricks, hatchBlock)
        .key("E", obsidian, hatchBlock)
        .build()

    event.simpleElectricCraftingMultiBlock(
        "Deep Mob Soul Binder", /* Translated Name */
        "deep_mob_binder", /* Internal Name */
        deep_mob_binder, /* Recipe Name */
        multiblock_shape, /* Multiblock Shape */
        /* JEI DISPLAY CONFIGURATION */
        // JEI progress bar
        event.progressBar(77, 33, "arrow"),
        // JEI item inputs, item outputs, fluid inputs, fluid outputs
        itemInputs => itemInputs.addSlots(56, 35, 1, 2), itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(36, 35), fluidOutputs => fluidOutputs.addSlot(122, 35),
        /* MODEL CONFIGUATION */
        // casing of the controller, overlay folder, front overlay?, top overlay?, side overlay?
        "soul_bricks_casing", "multiblockd", true, false, false
    )
})