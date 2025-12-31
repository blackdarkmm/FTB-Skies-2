// priority: 50

ServerEvents.tags("item", (event) => {
  event.add("c:spyglass", [
    "geore:redstone_spyglass",
    "geore:ancient_debris_spyglass",
    "geore:ruby_spyglass",
    "geore:sapphire_spyglass",
    "geore:topaz_spyglass",
    "geore:zinc_spyglass",
    "geore:uraninite_spyglass",
    "geore:black_quartz_spyglass",
    "geore:monazite_spyglass",
    "geore:aluminum_spyglass",
    "geore:lead_spyglass",
    "geore:nickel_spyglass",
    "geore:osmium_spyglass",
    "geore:platinum_spyglass",
    "geore:silver_spyglass",
    "geore:tin_spyglass",
    "geore:tungsten_spyglass",
    "geore:uranium_spyglass",
    "geore:redstone_spyglass",
    "geore:quartz_spyglass",
    "geore:lapis_spyglass",
    "geore:iron_spyglass",
    "geore:gold_spyglass",
    "geore:emerald_spyglass",
    "geore:diamond_spyglass",
    "geore:copper_spyglass",
    "geore:coal_spyglass",
  ]);
});

ServerEvents.recipes((event) => {
  event.remove({
    mod: "geore",
    not: { output: "#c:spyglass" },
  });

  // Remove Productive Metalworks Recipes
  if (Platform.isLoaded("productivemetalworks")) {
    event.remove({ id: /^productivemetalworks:melting\/geore\// });
  }

  // Adding Blocking Recipes
  resourceOresIngots.forEach((mod) => {
    mod.materials.forEach((material) => {
      const shardId = `geore:${material}_shard`;
      const shardBlockId = `geore:${material}_block`;
      const shardBuddingBlockId = `geore:budding_${material}`;
      const vanilla_materials = ["iron", "copper", "gold"];

      // Only create recipes if the item exists
      if (Item.exists(shardBlockId)) {
        //Compressing
        event
          .shaped(Item.of(shardBlockId, 1), ["GG", "GG"], {
            G: shardId,
          })
          .id(`ftb:geore/shaped/${material}_block`);

        //Uncompressing
        event.shapeless(Item.of(shardId, 4), [shardBlockId]).id(`ftb:geore/shapeless/${material}_shard`);

        //Compacting with a Drawer
        if (Platform.isLoaded("functionalstorage")) {
          if (vanilla_materials.includes(material)) {
            addFunctionalStorageCompactingRecipe(
              event,
              [shardId, 9],
              [`minecraft:raw_${material}_block`, 1],
              `ftb:functional_storage/compacting/geore_shards/${material}`
            );
          } else {
            addFunctionalStorageCompactingRecipe(
              event,
              [shardId, 9],
              [`ftbmaterials:${material}_raw_block`, 1],
              `ftb:functional_storage/compacting/geore_shards/${material}`
            );
          }
        }

        //Extracting with Xycraft
        if (Platform.isLoaded("xycraft_machines")) {
          //console.log(`Adding Xycraft extractor recipe for ${shardId}`);
          event
            .custom({
              type: "xycraft_machines:extractor",
              adjacent: [
                {
                  fluid_type: "minecraft:water",
                  predicate_type: "xycraft_core:fluid_type_rule",
                },
              ],
              output: {
                count: 1,
                id: shardId,
              },
              target: {
                block: shardBuddingBlockId,
                predicate_type: "xycraft_core:block_rule",
              },
              ticks: 1200,
            })
            .id(`ftb:xycraft_machines/extractor/geore_shards/${material}`);
        }
      }
    });
  });

  //Manually Adding a Xycraft's Extractor Recipe for Ancient Debris GeOres and Topaz.
  if (Platform.isLoaded("xycraft_machines")) {
    //Manually Adding for Topaz
    event
      .custom({
        type: "xycraft_machines:extractor",
        adjacent: [
          {
            fluid_type: "minecraft:water",
            predicate_type: "xycraft_core:fluid_type_rule",
          },
        ],
        output: {
          count: 1,
          id: "geore:topaz_shard",
        },
        target: {
          block: "geore:budding_topaz",
          predicate_type: "xycraft_core:block_rule",
        },
        ticks: 1200,
      })
      .id(`ftb:xycraft_machines/extractor/geore_shards/topaz`);

    event
      .custom({
        type: "xycraft_machines:extractor",
        adjacent: [
          {
            fluid_type: "minecraft:water",
            predicate_type: "xycraft_core:fluid_type_rule",
          },
        ],
        output: {
          count: 1,
          id: "geore:ancient_debris_shard",
        },
        target: {
          block: "geore:budding_ancient_debris",
          predicate_type: "xycraft_core:block_rule",
        },
        ticks: 1200,
      })
      .id(`ftb:xycraft_machines/extractor/geore_shards/ancient_debris`);
  }

  resourcesOresGem.forEach((mod) => {
    mod.materials.forEach((material) => {
      let id = material[0];
      if (id === "lapis_lazuli") {
        id = "lapis";
      }
      const shardId = `geore:${id}_shard`;
      const shardBlockId = `geore:${id}_block`;
      const shardBuddingBlockId = `geore:budding_${id}`;

      // Only create recipes if the item exists
      if (Item.exists(shardBlockId)) {
        //Compressing
        event
          .shaped(Item.of(shardBlockId, 1), ["GG", "GG"], {
            G: shardId,
          })
          .id(`ftb:geore/shaped/${id}_block`);

        //Uncompressing
        event.shapeless(Item.of(shardId, 4), [shardBlockId]).id(`ftb:geore/shapeless/${id}_shard`);

        //Compacting with a Drawer
        if (Platform.isLoaded("functionalstorage")) {
          addFunctionalStorageCompactingRecipe(
            event,
            [shardId, 4],
            [shardBlockId, 1],
            `ftb:functional_storage/compacting/geore_shards/${id}`
          );
        }

        //Extracting with Xycraft
        if (Platform.isLoaded("xycraft_machines")) {
          //console.log(`Adding Xycraft extractor recipe for ${shardId}`);
          event
            .custom({
              type: "xycraft_machines:extractor",
              adjacent: [
                {
                  fluid_type: "minecraft:water",
                  predicate_type: "xycraft_core:fluid_type_rule",
                },
              ],
              output: {
                count: 1,
                id: shardId,
              },
              target: {
                block: shardBuddingBlockId,
                predicate_type: "xycraft_core:block_rule",
              },
              ticks: 1200,
            })
            .id(`ftb:xycraft_machines/extractor/geore_shards/${id}`);
        }
      }
    });
  });

  geoOres.forEach((ore) => {
    const shardID = `geore:${ore[0]}_shard`;
    addOreProcessingRecipes(event, shardID, [ore[1], ore[2]], `${ore[0]}`, "geoore", 200);
  });

  addOreProcessingRecipes(event, "geore:coal_shard", ["ftbmaterials:coal_tiny", 4], "coal_shard", "geoore", 600);
});

ServerEvents.tags("item", (event) => {
  resourceOresIngots.forEach((mod) => {
    mod.materials.forEach((material) => {
      const shardId = `geore:${material}_shard`;
      event.add("c:raw_materials", shardId);
      event.add(`c:raw_materials/${material}`, shardId);
    });
  });

  resourcesOresGem.forEach((mod) => {
    mod.materials.forEach((material) => {
      let id = material[0];
      if (id === "lapis_lazuli") {
        id = "lapis";
      }
      const shardId = `geore:${id}_shard`;
      event.add("c:raw_materials", shardId);
      event.add(`c:raw_materials/${material[0]}`, shardId);
    });
  });
});
