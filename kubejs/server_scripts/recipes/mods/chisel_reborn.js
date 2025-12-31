// priority: 988

ServerEvents.recipes((event) => {
    //replacements
    event.replaceInput(
        { id: "chisel:chisel" },
        'minecraft:iron_ingot',
        '#c:plates/iron'
    );
});