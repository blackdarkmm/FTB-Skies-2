ServerEvents.recipes((event) => {

    //Adding Unified Dough Recipes ===============================================================

    if (Platform.isLoaded("create")) {
        event.shapeless(Item.of("farmersdelight:wheat_dough"), [
            "create:wheat_flour",
            "#c:buckets/water",
          ]).id("ftb:farmersdelight/dough_water");
    }

    if (Platform.isLoaded("create") && Platform.isLoaded("ceramicbucket")) {
        event.shapeless(Item.of("farmersdelight:wheat_dough"), [
            "create:wheat_flour",
            `ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]`,
        ]).id("ftb:farmersdelight/dough_water_1");
    }
    
});