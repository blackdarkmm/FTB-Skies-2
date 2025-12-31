// priority: 981

ServerEvents.recipes((event) => {
    //replacements
    event.replaceInput(
        { mod: "handcrafted" },
        "#c:chests",
        "minecraft:oak_pressure_plate"
    );
    event.replaceInput(
        { id: "handcrafted:wood_plate" },
        "#minecraft:wooden_slabs",
        '#minecraft:wooden_pressure_plates'
    );
});