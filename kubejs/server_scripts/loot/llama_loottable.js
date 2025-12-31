const llamaFoodLootTable = {
    "basic": {
        weight: 5,
        items: [
            "minecraft:carrot",
            "minecraft:potato",
            "minecraft:apple",
            "minecraft:sweet_berries",
            "minecraft:glow_berries",
            "minecraft:melon_slice",
            "minecraft:beetroot"
        ],
        rules: {
            matchEntityCustom: entity => entity.getLootStrength() <= 4
        } 
    },
    "common": {
        weight: 5,
        items: [
            "minecraft:cooked_beef",
            "minecraft:cooked_porkchop",
            "minecraft:cooked_mutton",
            "minecraft:cooked_chicken",
            "minecraft:cooked_rabbit",
            'occultism:datura',
            'ars_nouveau:sourceberry_bush'
        ],
        rules: {
            matchEntityCustom: entity => entity.getLootStrength() >= 2
        } 
    },
    "rare": {
        weight: 3,
        items: [
            "minecraft:rabbit_stew",
            "farmersdelight:smoked_ham",
            "farmersdelight:hamburger",
            "farmersdelight:stuffed_potato"
        ],
        rules: {
            matchEntityCustom: entity => entity.getLootStrength() >= 5
        } 
    },
    "epic": {
        weight: 1,
        items: [
            "farmersdelight:pasta_with_meatballs",
            "farmersdelight:grilled_salmon",
            "farmersdelight:shepherds_pie",
            "farmersdelight:honey_glazed_ham"
        ],
        rules: {
            matchEntityCustom: entity => entity.getLootStrength() == 10
        } 
    }
}

LootJS.lootTables(event => {

    function createLootEntry(item, weight, rules) {
        rules = rules || {};
        let entry = LootEntry.of(item).withWeight(weight);
        if (rules.matchEntityCustom) {
            entry = entry.matchEntityCustom(rules.matchEntityCustom);
        }
        return entry;
    }
    event.create("ftb:llama_food").createPool(pool => {
        Object.entries(llamaFoodLootTable).forEach(([rarity, value]) => {
            const {weight, items, rules} = value;
            items.forEach(item => {
                pool.addEntry(createLootEntry(item, weight, rules));
            });
        });
    });
})

