ServerEvents.recipes((event) => {
  //Adding Natural Quartz Recipes ======================================================
  event
    .shaped(Item.of("malum:natural_quartz", 12), ["QQQ", "QNQ", "QQQ"], {
      Q: "mysticalagriculture:nether_quartz_essence",
      N: "mysticalagriculture:nature_essence",
    })
    .id("ftb:mysticalagriculture/essence/malum/natural_quartz");

  event
    .custom({
      type: "malum:void_favor",
      input: {
        item: "ftbmaterials:silver_block",
      },
      result: {
        count: 1,
        id: "occultism:iesnium_ingot",
      },
    })
    .id("ftb:malum/void_favor/iesnium_ingot");


  // Code template credit to @matryoshika on Discord and Appulcake on [Git](https://github.com/FTBTeam/FTB-Modpack-Issues/issues/9065)
	event.forEachRecipe({ type: 'farmersdelight:cutting'}, r => {
		let jr = JsonUtils.toObject(r.json);
		//check if this recipe uses a tooltype instead of tag
		if(jr.tool.type) {
			//Filter by action
			if(jr.tool.action == 'axe_strip' || jr.tool.action == 'axe_dig'){
				//Copy by value and change tool from type to tag
				//Farmer's Delight does not use #tag, that's already handled by the field 'tag:', just use raw tag-id
        //Also Grabbing the Input to be used later in the Recipe ID.
        let inputId = jr.ingredients[0].item ?? jr.ingredients[0].tag ?? "unknown";
				let copy = {
					type: 'farmersdelight:cutting', 
					ingredients: jr.ingredients, 
					result: jr.result, 
					tool: {tag: 'minecraft:axes'}
				};
				//remove old recipe; FD's Choppingboard supports output[{}] but KubeJS's Recipes::remove does not;
				//Filter by first output item, or use different filters to finetune removal
				event.remove({ type: 'farmersdelight:cutting', input: jr.ingredients, output: jr.result[0].id})
				//re-add the recipe again, now using tool-tags
				event.custom(copy).id(`ftb:farmersdelight/cutting/axe/${inputId.split(":")[1]}`);
			}
		}
	});

});
