// priority: 991

//Fixing Villager Trades
MoreJS.villagerTrades(event => {

    //Maps crash and are otherwise kinda useless.
    event.removeTrades({output: /map/})
    event.addTrade("minecraft:cartographer", 2, Item.of("minecraft:emerald", 5), Item.of("hangglider:hang_glider", 1))

    //Removing Roots Invalid Trades
    event.removeTrades({first: "roots:silver_ingot"})

    //MI's Industrialist Villager =================================================================

    // = Level 1 = //

    
    event.addTrade("modern_industrialization:industrialist", 1, Item.of("minecraft:emerald", 5), Item.of("ftbmaterials:tin_ingot", 4))
    event.removeTrades({
        output: "modern_industrialization:tin_ingot",
        level: 1,
        professions: "modern_industrialization:industrialist",
    })

    event.removeTrades({
        first: "modern_industrialization:lignite_coal",
        level: 1,
        professions: "modern_industrialization:industrialist",
    })

    // = Level 2 = //

    event.addTrade("modern_industrialization:industrialist", 2, Item.of("minecraft:emerald", 10), Item.of("ftbmaterials:bronze_ingot", 6))
    event.removeTrades({
        output: "modern_industrialization:bronze_ingot",
        level: 2,
        professions: "modern_industrialization:industrialist",
    })

    event.addTrade("modern_industrialization:industrialist", 2, Item.of("minecraft:emerald", 5), Item.of("ftbmaterials:copper_gear", 4))
    event.removeTrades({
        output: "modern_industrialization:copper_gear",
        level: 2,
        professions: "modern_industrialization:industrialist",
    })

    event.addTrade("modern_industrialization:industrialist", 2, Item.of("ftbmaterials:sulfur_dust", 4), Item.of("minecraft:emerald", 1))
    event.removeTrades({
        first: "modern_industrialization:sulfur_dust",
        level: 2,
        professions: "modern_industrialization:industrialist",
    })

    // = Level 3 = //

    event.addTrade("modern_industrialization:industrialist", 3, Item.of("minecraft:emerald", 10), Item.of("ftbmaterials:steel_ingot", 6))
    event.removeTrades({
        output: "modern_industrialization:steel_ingot",
        level: 3,
        professions: "modern_industrialization:industrialist",
    })

    event.addTrade("modern_industrialization:industrialist", 3, Item.of("minecraft:emerald", 5), Item.of("ftbmaterials:bronze_gear", 4))
    event.removeTrades({
        output: "modern_industrialization:bronze_gear",
        level: 3,
        professions: "modern_industrialization:industrialist",
    })

    // = Level 4 = //

    event.addTrade("modern_industrialization:industrialist", 4, Item.of("minecraft:emerald", 5), Item.of("ftbmaterials:steel_gear", 5))
    event.removeTrades({
        output: "modern_industrialization:steel_gear",
        level: 4,
        professions: "modern_industrialization:industrialist",
    })

    event.addTrade("modern_industrialization:industrialist", 4, Item.of("minecraft:emerald", 10), Item.of("ftbmaterials:steel_plate", 6))
    event.removeTrades({
        output: "modern_industrialization:steel_plate",
        level: 4,
        professions: "modern_industrialization:industrialist",
    })

    // ============================================================================================

    //AE2's fluix researcher =================================================================

    // = Level 2 = //

    event.addTrade("ae2:fluix_researcher", 2, Item.of("ae2:charged_certus_quartz_crystal", 3), Item.of("minecraft:emerald", 1))
    event.addTrade("ae2:fluix_researcher", 2, Item.of("ftbmaterials:silicon_gem", 5), Item.of("minecraft:emerald", 1))
    event.removeTrades({
        output: "minecraft:emerald",
        level: 2,
        professions: "ae2:fluix_researcher",
    })


})