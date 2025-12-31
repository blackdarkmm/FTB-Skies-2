ServerEvents.recipes((event) => {
  for (const entry of global.get("dyeToGeode")) {
    let geodeItem = entry.geode;
    let dyeItem = entry.dye;
    event
      .custom({
        type: "lychee:block_interacting",
        item_in: {
          item: dyeItem,
        },
        block_in: "ftb:void_crystal_catalyst",
        post: [
          {
            type: "execute",
            command:
              "particle minecraft:happy_villager ~ ~0.5 ~ 0.4 0.4 0.4 0 25",
            hide: true,
          },
          {
            type: "delay",
            s: 0.2,
          },
          {
            type: "place",
            block: geodeItem,
          },
          {
            type: "damage_item",
          },
        ],
      })
      .id(
        "ftb:lychee/" +
          dyeItem.replace(":", "_") +
          "_to_" +
          geodeItem.replace("geore:", "")
      );
  }

  //Blocks Listed here will be blacklisted from Firesticks, since Firesticks are consumed but do not generate fire on them.
  const firestick_blacklist = [
      "minecraft:campfire",
      "minecraft:soul_campfire",
      "occultism:spirit_campfire",
      "compactmachines:solid_wall"      
  ];

  firestick_blacklist.forEach(block => {
      event.custom({
        type: "lychee:block_interacting",
        hide_in_viewer: true,
        item_in: {
            "item": "ftb:firestick"
        },
        block_in: block,
        post: [
          { "type": "prevent_default" }
        ]
      }).id(`ftb:lychee/firestick_blacklist/${block.split(":")[1]}`);
  });

  event.custom({
    type: "lychee:block_interacting",
    hide_in_viewer: true,
    item_in: {
        "item": "ftb:firestick"
    },
    block_in: "minecraft:campfire",
    post: [
      { "type": "prevent_default" }
    ]
  }).id("ftb:lychee/firestick_campfire");

  event
    .custom({
      type: "lychee:block_interacting",
      item_in: [
        {
          item: "ftb:firestick",
        },
      ],
      block_in: "*",
      post: [
        {
          type: "move",
          offset: [0, 1, 0],
        },
        {
          type: "execute",
          command: "execute if block ~ ~ ~ air run setblock ~ ~ ~ fire",
        },
        {
          type: "damage_item",
        }
      ]
    })
    .id("ftb:lychee/firestick");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "minecraft:dirt",
        },
        {
          item: "enderio:grains_of_infinity",
        },
      ],
      block_in: {
        blocks: "minecraft:water",
      },
      post: [
        {
          type: "drop_item",
          id: "jags:grass_seed",
        },
      ],
    })
    .id("ftb:lychee/grass_seed_from_dirt_water");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          tag: "c:dyes/cyan",
        },
        {
          tag: "minecraft:saplings",
        },
        {
          item: "enderio:grains_of_infinity",
        },
      ],
      block_in: {
        blocks: "minecraft:water",
      },
      post: [
        {
          type: "drop_item",
          id: "integrateddynamics:menril_sapling",
        },
      ],
    })
    .id("ftb:lychee/menril_from_water");

  event
    .custom({
      type: "lychee:lightning_channeling",
      item_in: [
        {
          item: "minecraft:emerald",
        },
      ],
      post: [
        {
          type: "drop_item",
          id: "minecraft:diamond",
        },
      ],
    })
    .id("ftb:lychee/lightning_channeling_emerald_to_diamond");

  event
    .custom({
      type: "lychee:lightning_channeling",
      item_in: [
        {
          item: "ae2:certus_quartz_crystal",
        },
      ],
      post: [
        {
          type: "drop_item",
          id: "ae2:charged_certus_quartz_crystal",
        },
      ],
    })
    .id("ftb:lychee/lightning_channeling_charged_certus");

  event
    .custom({
      type: "lychee:lightning_channeling",
      item_in: [
        {
          item: "minecraft:emerald_block",
        },
      ],
      post: [
        {
          type: "drop_item",
          id: "minecraft:diamond_block",
        },
      ],
    }).id("ftb:lychee/lightning_channeling_emerald_to_diamond_block");

  event
    .custom({
      type: "lychee:item_burning",
      item_in: {
        item: "minecraft:paper"
      },
      if: [{
        type: "location",
        predicate: {
          position: {
            block: {
              blocks: ["minecraft:fire"]
            }
          }
        }
      }],
      post: [
        {
          type: "drop_item",
          id: `irons_spellbooks:scroll[irons_spellbooks:spell_container={data:[{id:"irons_spellbooks:burning_dash",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}]}`
        },
        {
          type: "move",
          offset: [0, 0.25, 0]
        },
        {
          type: "place",
          block: "*"
        }
      ]
    }).id("ftb:lychee/burning_paper_to_burning_dash");

  event
    .custom({
      type: "lychee:item_burning",
      item_in: {
        item: "ftbstuff:crushed_basalt"
      },
      if: [{
        type: "location",
        predicate: {
          position: {
            block: {
              blocks: ["minecraft:fire"]
            }
          }
        }
      }],
      post: [
        {
          type: "drop_item",
          id: `enderio:grains_of_infinity`
        },
        {
          type: "move",
          offset: [0, 0.25, 0]
        },
        {
          type: "place",
          block: "*"
        }
      ]
    }).id("ftb:lychee/burning_crushed_basalt_to_grains_of_infinity");

  event
    .custom({
      type: "lychee:item_burning",
      item_in: {
        item: "ftbmaterials:obsidian_tiny_dust"
      },
      if: [{
        type: "location",
        predicate: {
          position: {
            block: {
              blocks: ["minecraft:fire"]
            }
          }
        }
      }],
      post: [
        {
          type: "drop_item",
          id: `enderio:grains_of_infinity`,
          count: 2
        },
        {
          type: "move",
          offset: [0, 0.25, 0]
        },
        {
          type: "place",
          block: "*"
        }
      ]
    }).id("ftb:lychee/burning_obsidian_dust_to_grains_of_infinity");

event
    .custom({
      type: "lychee:block_interacting",
      item_in: {
        item: "minecraft:flint_and_steel"
      },
      block_in: {
        blocks: "compactmachines:wall"
      },
      post: [
        {
          type: "damage_item",
          damage: 16
        },
        {
          type: "drop_item",
          id: `enderio:grains_of_infinity`
        }
      ]
    }).id("ftb:lychee/burning_compact_machine_wall_to_grains_of_infinity");

    // --- Explosion Transforms ---
    const explosionTransforms = [
      {
        ingredients: [
          { item: "actuallyadditions:black_quartz", count: 4 },
          { item: "ftb:void_crystal_catalyst" },
        ],
        result: { count: 1, id: "geore:budding_black_quartz" },
      },
      {
        ingredients: [
          { item: "minecraft:golden_apple", count: 1 },
          { item: "enderio:grains_of_infinity", count: 2 },
          { item: "minecraft:ender_pearl", count: 1 },
        ],
        result: { count: 1, id: "ftb:eye_of_legend" },
      },
      {
        ingredients: [
          { item: "ftbmaterials:tungsten_dust" },
          { item: "ftb:void_crystal_catalyst" },
        ],
        result: { count: 1, id: "geore:budding_tungsten" },
      },
      {
        ingredients: [
          { item: "ftbstuff:compressed_clay" },
          { item: "enderio:grains_of_infinity" },
        ],
        result: { count: 4, id: "ftbmaterials:aluminum_dust" },
      },
      {
        ingredients: [
          { item: "ftbstuff:compressed_cobblestone" },
          { item: "enderio:grains_of_infinity" },
        ],
        result: { count: 4, id: "ftbmaterials:nickel_dust" },
      },
      {
        ingredients: [
          { item: "ftbstuff:compressed_sand" },
          { item: "enderio:grains_of_infinity" },
        ],
        result: { count: 4, id: "ftbmaterials:gold_dust" },
      },
      {
        ingredients: [
          { item: "minecraft:wheat" }
        ],
        result: { count: 1, id: "create:wheat_flour", chance: 0.50 },
      },
      {
        ingredients: [
          { item: "minecraft:iron_ingot" }
        ],
        result: { count: 1, id: "pneumaticcraft:ingot_iron_compressed", chance: 0.80 },
      },
      {
        ingredients: [
          { item: "minecraft:iron_block" }
        ],
        result: { count: 1, id: "pneumaticcraft:compressed_iron_block", chance: 0.80 },
      },
      {
        ingredients: [
          { item: "ftbmaterials:iron_gear" }
        ],
        result: { count: 1, id: "pneumaticcraft:compressed_iron_gear", chance: 0.80 },
      }
    ];
  
    explosionTransforms.forEach((r) => {
      if (!Array.isArray(r.result)) {
        r.result = [r.result];
      }
      let post = [];
      let description = "Explosion transform chance";
      r.result.forEach((result) => {
        description = description.concat(`\n ${Text.translate(Item.of(result.id).getDescriptionId()).getString()} chance: ${result.chance*100 || 100}%`);
        let ifCondition = undefined
        if( result.chance){
          ifCondition = {
            "type": "chance",
            "secret": false,
            "chance": result.chance,
            "description": "Explosion transform chance"
          };
        }
        post.push(
          {
              "type": "drop_item",
              "id": result.id,
              "count": result.count || 1,
              "if": ifCondition,
            }
        );
      })
      
      event.custom(
        {
          "type": "lychee:item_exploding",
          "item_in": r.ingredients,
          "post":post,
          "comment": description
      }).id(`ftb:lychee/item_exploding/${r.ingredients.map(i => i.item.split(":")[1]  || i.tag.split(":")[1] ).join("_")}`);
    });

    // --- Block Crushing Recipe ---
    event.custom({
      type: "lychee:block_crushing",
      landing_block: "minecraft:bedrock",
      item_in: [
        {
            "item": "minecraft:redstone",
            "count": 1
        },
        {
            "item": "ftbmaterials:obsidian_dust",
            "count": 1
        }
      ],
      post: [
        {
            "type": "drop_item",
            "id": "fluxnetworks:flux_dust",
            "count": 2
        }
      ]
  })
    
});
