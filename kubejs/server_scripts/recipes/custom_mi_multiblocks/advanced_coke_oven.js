ServerEvents.recipes(event => {

    //Recipe for the Controller Itself
    event.shaped(Item.of("modern_industrialization:advanced_coke_oven", 1), ["CCC", "IFI", "CCC"], {
      C: "immersiveengineering:cokebrick",
      F: "#ftb:powered_furnaces",
      I: "modern_industrialization:iron_large_plate"
    }).id("ftb:shaped/modern_industrialization/advanced_coke_oven");

    let advanced_coke_oven_recipes = [
        {   
            eut: 4,
            ticks: 400,
            input: "1x #minecraft:logs",
            output: "1x minecraft:charcoal",
            fluid_output: "250x immersiveengineering:creosote"
        },
        {   
            eut: 4,
            ticks: 400,
            input: "2x geore:coal_shard",
            output: "1x ftbmaterials:coal_coke_gem",
            fluid_output: "250x immersiveengineering:creosote"
        },
        {   
            eut: 2,
            ticks: 300,
            input: "1x minecraft:coal",
            output: "1x ftbmaterials:coal_coke_gem",
            fluid_output: "500x immersiveengineering:creosote"
        },
        {   
            eut: 2,
            ticks: 300,
            input: "1x ftbmaterials:coal_dust",
            output: "1x ftbmaterials:coal_coke_dust",
            fluid_output: "500x immersiveengineering:creosote"
        },
        {   
            eut: 18,
            ticks: 2700,
            input: "1x minecraft:coal_block",
            output: "1x ftbmaterials:coal_coke_block",
            fluid_output: "4500x immersiveengineering:creosote"
        }
    ];

    advanced_coke_oven_recipes.forEach(recipe => {
        event.recipes.modern_industrialization.advanced_coke_oven(recipe.eut, recipe.ticks)
            .itemIn(recipe.input)
            .itemOut(recipe.output)
            .fluidOut(recipe.fluid_output);
    });
});

//Making the Advanced Coke Oven Breakable.
ServerEvents.tags("block", (event) => {
    event.add("minecraft:mineable/pickaxe", "modern_industrialization:advanced_coke_oven");
    event.add("minecraft:needs_stone_tool", "modern_industrialization:advanced_coke_oven");
});