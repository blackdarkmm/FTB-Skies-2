// priority: 977

ServerEvents.recipes((event) => {
  event
    .custom({
      type: "justdirethings:goospread",
      craftingDuration: 1200,
      id: "justdirethings:prospertity_stone",
      input: {
        Name: "minecraft:diorite",
      },
      output: {
        Name: "mysticalagriculture:prosperity_ore",
      },
      tierRequirement: 1,
    })
    .id("justdirethings:goospread/prosperity_stone");

  event
    .custom({
      type: "justdirethings:goospread",
      craftingDuration: 1200,
      id: "justdirethings:soul_stone",
      input: {
        Name: "mysticalagriculture:soulstone",
      },
      output: {
        Name: "malum:block_of_raw_soulstone",
      },
      tierRequirement: 2,
    })
    .id("justdirethings:goospread/soul_stone");


  event
    .custom({
      type: "justdirethings:goospread",
      craftingDuration: 1200,
      id: "justdirethings:soul_stone",
      input: {
        Name: "ftbmaterials:zinc_block",
      },
      output: {
        Name: "ftbmaterials:antimony_block",
      },
      tierRequirement: 2,
    })
    .id("justdirethings:goospread/zinc_block_to_antimony_block");

  event
    .custom({
      type: "justdirethings:goospread",
      craftingDuration: 1200,
      id: "justdirethings:soul_stone",
      input: {
        Name: "ftbmaterials:aluminum_block",
      },
      output: {
        Name: "ftbmaterials:silver_block",
      },
      tierRequirement: 2,
    })
    .id("justdirethings:goospread/aluminum_block_to_silver_block");

  event
    .custom({
      type: "justdirethings:goospread",
      craftingDuration: 1200,
      id: "justdirethings:soul_stone",
      input: {
        Name: "geore:budding_black_quartz",
      },
      output: {
        Name: "ae2:damaged_budding_quartz",
      },
      tierRequirement: 2,
    })
    .id(
      "justdirethings:certus_quartz/budding_black_quartz_to_damaged_budding_quartz"
    );

  event
    .custom({
      type: "justdirethings:goospread",
      craftingDuration: 1200,
      id: "justdirethings:soul_stone",
      input: {
        Name: "ae2:damaged_budding_quartz",
      },
      output: {
        Name: "ae2:chipped_budding_quartz",
      },
      tierRequirement: 2,
    })
    .id(
      "justdirethings:certus_quartz/damaged_budding_quartz_to_chipped_budding_quartz"
    );

  event
    .custom({
      type: "justdirethings:goospread",
      craftingDuration: 1200,
      id: "justdirethings:soul_stone",
      input: {
        Name: "ae2:chipped_budding_quartz",
      },
      output: {
        Name: "ae2:flawed_budding_quartz",
      },
      tierRequirement: 2,
    })
    .id(
      "justdirethings:certus_quartz/chipped_budding_quartz_to_flawed_budding_quartz"
    );

  event
    .custom({
      type: "justdirethings:goospread",
      craftingDuration: 1200,
      id: "justdirethings:soul_stone",
      input: {
        Name: "ae2:flawed_budding_quartz",
      },
      output: {
        Name: "ae2:flawless_budding_quartz",
      },
      tierRequirement: 3,
    })
    .id(
      "justdirethings:certus_quartz/flawed_budding_quartz_to_flawless_budding_quartz"
    );

  event
    .shaped("justdirethings:gooblock_tier3", ["PEP", "SGS", "PEP"], {
      P: "minecraft:ender_pearl",
      E: "minecraft:end_stone",
      S: "malum:null_slate",
      G: "justdirethings:gooblock_tier2",
    })
    .id("ftb:gooblock_tier3_from_null_slate");

  event
    .shaped("justdirethings:gooblock_tier3", ["PEP", "SGS", "PEP"], {
      P: "minecraft:ender_pearl",
      E: "minecraft:end_stone",
      S: "ars_elemental:anima_essence",
      G: "justdirethings:gooblock_tier2",
    })
    .id("ftb:gooblock_tier3_from_anima_essence");

  event
    .shaped("justdirethings:gooblock_tier3", ["PEP", "SGS", "PEP"], {
      P: "minecraft:ender_pearl",
      E: "minecraft:end_stone",
      S: "modern_industrialization:neodymium_dust",
      G: "justdirethings:gooblock_tier2",
    })
    .id("ftb:gooblock_tier3_from_neodymium_dust");

  event.custom({
    type: "justdirethings:goospread",
    craftingDuration: 1200,
    id: "ftb:bee_nest",
    input: {
      Name: "minecraft:bamboo_block",
    },
    output: {
      Name: "minecraft:bee_nest",
    },
    tierRequirement: 1,
  });

  //Hand Tilling Dire Soils =======================================================================

  event.shapeless(Item.of("justdirethings:goosoil_tier1", 2),
    [
      "#minecraft:dirt",
      "#minecraft:dirt",
        Item.of("justdirethings:ferricore_hoe")
    ]
  ).damageIngredient("justdirethings:ferricore_hoe", 1).id("ftb:justdirethings/hand_tilling/soil_1");
  
  event.shapeless(Item.of("justdirethings:goosoil_tier2", 2),
    [
      "#minecraft:dirt",
      "#minecraft:dirt",
        Item.of("justdirethings:blazegold_hoe")
    ]
  ).damageIngredient("justdirethings:blazegold_hoe", 1).id("ftb:justdirethings/hand_tilling/soil_2");
  
  event.shapeless(Item.of("justdirethings:goosoil_tier3", 2),
    [
      "#minecraft:dirt",
      "#minecraft:dirt",
        Item.of("justdirethings:celestigem_hoe")
    ]
  ).damageIngredient("justdirethings:celestigem_hoe", 1).id("ftb:justdirethings/hand_tilling/soil_3");
  
  event.shapeless(Item.of("justdirethings:goosoil_tier4", 2),
    [
      "#minecraft:dirt",
      "#minecraft:dirt",
        Item.of("justdirethings:eclipsealloy_hoe")
    ]
  ).damageIngredient("justdirethings:eclipsealloy_hoe", 1).id("ftb:justdirethings/hand_tilling/soil_4");


});
