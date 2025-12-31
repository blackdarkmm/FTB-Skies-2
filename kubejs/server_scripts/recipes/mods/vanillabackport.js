ServerEvents.recipes((event) => {
	//Adding ways to get Pale Oak and Pale Moss Blocks
    event.shaped("8x vanillabackport:pale_moss_block", 
        ["PMP", "MEM", "PMP"], {
        E: "ars_nouveau:manipulation_essence",
        M: "minecraft:moss_block",
        P: "vanillabackport:pale_oak_leaves"
    }).id("ftb:ars_nouveau/manipulation_essence_to_pale_moss_block");

    event.custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "minecraft:magma_cream"
        },
        {
          item: "integrateddynamics:crystalized_menril_chunk"
        }
      ],
      block_in: {
        blocks: "minecraft:water",
      },
      post: [
        {
          type: "drop_item",
          id: "vanillabackport:resin_clump",
        },
        {
            "type": "place",
            "block": "*"
        }
      ],
    }).id("ftb:lychee/vanillabackport/resin_clump");

});
