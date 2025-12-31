// priority: 959

ServerEvents.recipes((event) => {    

    let crop_to_seed_recipes = [
        ["minecraft:wheat_seeds", "minecraft:wheat"],
        ["minecraft:beetroot_seeds", "minecraft:beetroot"],
        ["farmersdelight:cabbage_seeds", "farmersdelight:cabbage"],
        ["immersiveengineering:seed", "immersiveengineering:hemp_fiber"],
    ];

    crop_to_seed_recipes.forEach(recipe => {
        let output_name = recipe[0].split(":")[1]

        event.shapeless(
            Item.of(recipe[0], 1),
           [
            recipe[1]
           ]
       ).id("ftb:shapeless/crop_to_seed/" + output_name);

    });

});