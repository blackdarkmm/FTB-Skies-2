ServerEvents.recipes(e => {
    
	//Seed additions for Farming for Blockheads Market
	const seeds = [
        ["silentgear:fluffy_seeds", 1],
        ["silentgear:flax_seeds", 1],
        ["actuallyadditions:flax_seeds", 1],
        ["actuallyadditions:coffee_beans", 1],
        ["enchanted:belladonna_seeds", 1],
        ["enchanted:garlic", 1],
        ["enchanted:mandrake_seeds", 1],
        ["enchanted:snowbell_seeds", 1],
        ["enchanted:water_artichoke_seeds", 1],
        ["enchanted:wolfsbane_seeds", 1],
        ["roots:aubergine_seeds", 1],
        ["roots:grove_spores", 1],
        ["roots:wildroot", 1],
        ["occultism:datura_seeds", 1],
        ["ars_nouveau:sourceberry_bush", 1],
        ["minecraft:potato", 1],
        ["minecraft:carrot", 1]
    ];

    seeds.forEach(([item, count]) => {
        e.custom({
            type: "farmingforblockheads:market",
            category: "farmingforblockheads:seeds",
            preset: "minecraft:seeds",
            result: {
                item: item,
                count: count
            }
        }).id(`ftb:farmingforblockheads/market/seeds/${item.split(":")[0]}/${item.split(":")[1]}`);
    });

	//Sapling additions for Farming for Blockheads Market
	const saplings = [
        ["vanillabackport:pale_oak_sapling", 1]
    ];

    saplings.forEach(([item, count]) => {
        e.custom({
            type: "farmingforblockheads:market",
            category: "farmingforblockheads:saplings",
            preset: "minecraft:saplings",
            result: {
                item: item,
                count: count
            }
        }).id(`ftb:farmingforblockheads/market/saplings/${item.split(":")[0]}/${item.split(":")[1]}`);
    });



});
