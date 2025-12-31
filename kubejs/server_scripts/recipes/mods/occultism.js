// priority: 972

ServerEvents.recipes((event) => {
    //Readding Demons's Dream Essence Recipe, but now only accepting the Seed or a Datura Box
    //(Keeping only the Fire Recipe as it would probably not get used by people, only if there was a "Seed" Block...)
    // event.shaped('occultism:demons_dream_essence', 
    //     [
    //     'SSS', 
    //     'SSS', 
    //     'SSS'
    //     ], 
    //     {
    //     S: '#c:seeds/datura',
    //     }
    // ).id('ftb:demons_dream_essence_1')

    //Nerfing Datura Shake Recipe (Makes the Culinary Generator Unbalanced)
    event.replaceInput(
      { id: "occultismdelight:datura_shake" },
      'minecraft:glass_bottle',
      '#c:foods/milk'
    )
    event.replaceInput(
      { id: "occultismdelight:datura_shake" },
      'minecraft:sugar',
      'minecraft:honey_bottle'
    )
    
});