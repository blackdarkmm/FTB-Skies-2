// const $KubeFluidType = Java.loadClass("dev.latvian.mods.kubejs.fluid.FluidTypeBuilder")
StartupEvents.registry("fluid", (event) => {

    event.create('ftb:molten_kivi')
    // .displayName(Text.translate("ftb.fluid.molten_kivi"))        
    .stillTexture("ftb:fluid/kivi_still")          
    .flowingTexture("ftb:fluid/kivi_flow")          
    .tint(0x0d0e0f)

    event.create('ftb:industrial_coolant')
    // .displayName(Text.translate("ftb.fluid.industrial_coolant"))
    .stillTexture("ftb:fluid/industrial_coolant_still")      
    .flowingTexture("ftb:fluid/industrial_coolant_flow")
    .tint(0x6090fe)

});