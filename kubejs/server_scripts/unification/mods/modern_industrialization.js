// priority: 50

const processorVariants = [
  ["extendedae", "extendedae:concurrent_processor_print", "extendedae:concurrent_processor"],
  ["appflux", "appflux:printed_energy_processor", "appflux:energy_processor"],
  ["advanced_ae", "advanced_ae:printed_quantum_processor", "advanced_ae:quantum_processor"],
];

removeRecipe.push(
  "modern_industrialization:compat/mekanism/osmium_ingot_to_dust",
  "modern_industrialization:materials/aluminum/macerator/gear",
  "modern_industrialization:materials/aluminum/macerator/ingot",
  "modern_industrialization:materials/aluminum/macerator/nugget",
  "modern_industrialization:materials/aluminum/macerator/plate",
  "modern_industrialization:materials/aluminum/macerator/rod",
  "modern_industrialization:materials/aluminum/macerator/wire",
  "modern_industrialization:materials/antimony/macerator/ingot",
  "modern_industrialization:materials/antimony/macerator/nugget",
  "modern_industrialization:materials/antimony/macerator/ore_to_raw",
  "modern_industrialization:materials/antimony/macerator/raw_metal",
  "modern_industrialization:materials/bauxite/macerator/crushed_dust",
  "modern_industrialization:materials/bauxite/macerator/ore_to_crushed",
  "modern_industrialization:materials/bronze/macerator/gear",
  "modern_industrialization:materials/bronze/macerator/ingot",
  "modern_industrialization:materials/bronze/macerator/nugget",
  "modern_industrialization:materials/bronze/macerator/plate",
  "modern_industrialization:materials/bronze/macerator/rod",
  "modern_industrialization:materials/cadmium/macerator/ingot",
  "modern_industrialization:materials/cadmium/macerator/plate",
  "modern_industrialization:materials/cadmium/macerator/rod",
  "modern_industrialization:materials/carbon/macerator/plate",
  "modern_industrialization:materials/chromium/macerator/ingot",
  "modern_industrialization:materials/chromium/macerator/nugget",
  "modern_industrialization:materials/chromium/macerator/plate",
  "modern_industrialization:materials/coke/macerator/gem",
  "modern_industrialization:materials/copper/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/copper/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/copper/forge_hammer/nugget_to_tiny_dust",
  "modern_industrialization:materials/copper/macerator/gear",
  "modern_industrialization:materials/copper/macerator/ingot",
  "modern_industrialization:materials/copper/macerator/ingot",
  "modern_industrialization:materials/copper/macerator/nugget",
  "modern_industrialization:materials/copper/macerator/plate",
  "modern_industrialization:materials/copper/macerator/raw_metal",
  "modern_industrialization:materials/copper/macerator/rod",
  "modern_industrialization:materials/copper/macerator/wire",
  "modern_industrialization:materials/copper/smelting/tiny_dust_to_nugget_blasting",
  "modern_industrialization:materials/copper/smelting/tiny_dust_to_nugget_smelting",
  "modern_industrialization:materials/copper/unpacker/tiny_dust",
  "modern_industrialization:materials/diamond/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/diamond/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/diamond/macerator/crushed_dust",
  "modern_industrialization:materials/diamond/macerator/gem",
  "modern_industrialization:materials/diamond/macerator/ore_to_crushed",
  "modern_industrialization:materials/diamond/macerator/plate",
  "modern_industrialization:materials/diamond/unpacker/tiny_dust",
  "modern_industrialization:materials/electrum/macerator/ingot",
  "modern_industrialization:materials/electrum/macerator/nugget",
  "modern_industrialization:materials/electrum/macerator/plate",
  "modern_industrialization:materials/electrum/macerator/wire",
  "modern_industrialization:materials/emerald/macerator/crushed_dust",
  "modern_industrialization:materials/emerald/macerator/gem",
  "modern_industrialization:materials/emerald/macerator/ore_to_crushed",
  "modern_industrialization:materials/emerald/macerator/plate",
  "modern_industrialization:materials/gold/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/gold/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/gold/forge_hammer/nugget_to_tiny_dust",
  "modern_industrialization:materials/gold/macerator/gear",
  "modern_industrialization:materials/gold/macerator/ingot",
  "modern_industrialization:materials/gold/macerator/nugget",
  "modern_industrialization:materials/gold/macerator/ore_to_raw",
  "modern_industrialization:materials/gold/macerator/plate",
  "modern_industrialization:materials/gold/macerator/raw_metal",
  "modern_industrialization:materials/gold/macerator/rod",
  "modern_industrialization:materials/gold/smelting/tiny_dust_to_nugget_blasting",
  "modern_industrialization:materials/gold/smelting/tiny_dust_to_nugget_smelting",
  "modern_industrialization:materials/gold/unpacker/tiny_dust",
  "modern_industrialization:materials/invar/craft/block_from_ingot",
  "modern_industrialization:materials/invar/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/invar/craft/gear",
  "modern_industrialization:materials/invar/craft/ingot_from_block",
  "modern_industrialization:materials/invar/craft/ingot_from_nugget",
  "modern_industrialization:materials/invar/craft/nugget_from_ingot",
  "modern_industrialization:materials/invar/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/invar/macerator/gear",
  "modern_industrialization:materials/invar/macerator/ingot",
  "modern_industrialization:materials/invar/macerator/nugget",
  "modern_industrialization:materials/invar/macerator/plate",
  "modern_industrialization:materials/invar/macerator/rod",
  "modern_industrialization:materials/iron/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/iron/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/iron/forge_hammer/nugget_to_tiny_dust",
  "modern_industrialization:materials/iron/macerator/gear",
  "modern_industrialization:materials/iron/macerator/ingot",
  "modern_industrialization:materials/iron/macerator/ingot",
  "modern_industrialization:materials/iron/macerator/large_plate",
  "modern_industrialization:materials/iron/macerator/nugget",
  "modern_industrialization:materials/iron/macerator/ore_to_raw",
  "modern_industrialization:materials/iron/macerator/plate",
  "modern_industrialization:materials/iron/macerator/raw_metal",
  "modern_industrialization:materials/iron/macerator/rod",
  "modern_industrialization:materials/iron/smelting/tiny_dust_to_nugget_blasting",
  "modern_industrialization:materials/iron/smelting/tiny_dust_to_nugget_smelting",
  "modern_industrialization:materials/iron/unpacker/tiny_dust",
  "modern_industrialization:materials/lapis/macerator/crushed_dust",
  "modern_industrialization:materials/lapis/macerator/gem",
  "modern_industrialization:materials/lead/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/lead/craft/raw_metal_block_from_raw_metal",
  "modern_industrialization:materials/lead/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/lead/macerator/ingot",
  "modern_industrialization:materials/lead/macerator/ingot",
  "modern_industrialization:materials/lead/macerator/nugget",
  "modern_industrialization:materials/lead/macerator/ore_to_raw",
  "modern_industrialization:materials/lead/macerator/plate",
  "modern_industrialization:materials/lead/smelting/tiny_dust_to_nugget_blasting",
  "modern_industrialization:materials/lead/smelting/tiny_dust_to_nugget_smelting",
  "modern_industrialization:materials/lead/unpacker/tiny_dust",
  "modern_industrialization:materials/lignite_coal/macerator/gem",
  "modern_industrialization:materials/lignite_coal/macerator/ore_to_crushed",
  "modern_industrialization:materials/macerator/copper_ore_to_raw",
  "modern_industrialization:materials/macerator/lapis_ore_to_crushed",
  "modern_industrialization:materials/macerator/lead_crushed_to_dust",
  "modern_industrialization:materials/macerator/quartz_ore_to_crushed",
  "modern_industrialization:materials/macerator/redstone_ore_to_crushed",
  "modern_industrialization:materials/monazite/macerator/crushed_dust",
  "modern_industrialization:materials/monazite/macerator/ore_to_crushed",
  "modern_industrialization:materials/nickel/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/nickel/craft/raw_metal_block_from_raw_metal",
  "modern_industrialization:materials/nickel/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/nickel/macerator/ingot",
  "modern_industrialization:materials/nickel/macerator/ingot",
  "modern_industrialization:materials/nickel/macerator/nugget",
  "modern_industrialization:materials/nickel/macerator/ore_to_raw",
  "modern_industrialization:materials/nickel/macerator/plate",
  "modern_industrialization:materials/nickel/macerator/raw_metal",
  "modern_industrialization:materials/nickel/macerator/raw_metal",
  "modern_industrialization:materials/nickel/smelting/tiny_dust_to_nugget_blasting",
  "modern_industrialization:materials/nickel/smelting/tiny_dust_to_nugget_smelting",
  "modern_industrialization:materials/nickel/unpacker/tiny_dust",
  "modern_industrialization:materials/platinum/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/platinum/craft/raw_metal_block_from_raw_metal",
  "modern_industrialization:materials/platinum/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/platinum/macerator/ingot",
  "modern_industrialization:materials/platinum/macerator/ingot",
  "modern_industrialization:materials/platinum/macerator/nugget",
  "modern_industrialization:materials/platinum/macerator/ore_to_raw",
  "modern_industrialization:materials/platinum/macerator/plate",
  "modern_industrialization:materials/platinum/macerator/wire",
  "modern_industrialization:materials/platinum/packer/dust",
  "modern_industrialization:materials/platinum/packer/dust",
  "modern_industrialization:materials/platinum/unpacker/tiny_dust",
  "modern_industrialization:materials/quartz/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/quartz/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/quartz/macerator/crushed_dust",
  "modern_industrialization:materials/quartz/macerator/gem",
  "modern_industrialization:materials/quartz/packer/dust",
  "modern_industrialization:materials/quartz/unpacker/tiny_dust",
  "modern_industrialization:materials/redstone/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/redstone/macerator/crushed_dust",
  "modern_industrialization:materials/salt/craft/block_from_dust",
  "modern_industrialization:materials/salt/craft/dust_from_block",
  "modern_industrialization:materials/salt/craft/dust_from_block",
  "modern_industrialization:materials/salt/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/salt/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/salt/macerator/crushed_dust",
  "modern_industrialization:materials/silicon/craft/block_from_ingot",
  "modern_industrialization:materials/silicon/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/silicon/craft/ingot_from_block",
  "modern_industrialization:materials/silicon/craft/ingot_from_nugget",
  "modern_industrialization:materials/silicon/craft/nugget_from_ingot",
  "modern_industrialization:materials/silicon/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/silicon/macerator/ingot",
  "modern_industrialization:materials/silicon/macerator/nugget",
  "modern_industrialization:materials/silicon/macerator/plate",
  "modern_industrialization:materials/silver/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/silver/craft/raw_metal_block_from_raw_metal",
  "modern_industrialization:materials/silver/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/silver/macerator/ingot",
  "modern_industrialization:materials/silver/macerator/ingot",
  "modern_industrialization:materials/silver/macerator/nugget",
  "modern_industrialization:materials/silver/macerator/plate",
  "modern_industrialization:materials/silver/macerator/raw_metal",
  "modern_industrialization:materials/silver/macerator/wire",
  "modern_industrialization:materials/silver/packer/dust",
  "modern_industrialization:materials/silver/smelting/tiny_dust_to_nugget_blasting",
  "modern_industrialization:materials/silver/smelting/tiny_dust_to_nugget_smelting",
  "modern_industrialization:materials/silver/unpacker/tiny_dust",
  "modern_industrialization:materials/steel/craft/block_from_ingot",
  "modern_industrialization:materials/steel/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/steel/craft/ingot_from_block",
  "modern_industrialization:materials/steel/craft/ingot_from_nugget",
  "modern_industrialization:materials/steel/craft/nugget_from_ingot",
  "modern_industrialization:materials/steel/smelting/dust_to_ingot_blasting",
  "modern_industrialization:materials/steel/smelting/dust_to_ingot_smelting",
  "modern_industrialization:materials/tin/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/tin/craft/raw_metal_block_from_raw_metal",
  "modern_industrialization:materials/tin/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/tin/forge_hammer/nugget_to_tiny_dust",
  "modern_industrialization:materials/tin/macerator/gear",
  "modern_industrialization:materials/tin/macerator/ingot",
  "modern_industrialization:materials/tin/macerator/ingot",
  "modern_industrialization:materials/tin/macerator/nugget",
  "modern_industrialization:materials/tin/macerator/ore_to_raw",
  "modern_industrialization:materials/tin/macerator/plate",
  "modern_industrialization:materials/tin/macerator/raw_metal",
  "modern_industrialization:materials/tin/macerator/wire",
  "modern_industrialization:materials/tin/packer/dust",
  "modern_industrialization:materials/tin/smelting/raw_metal_to_ingot_blasting",
  "modern_industrialization:materials/tin/smelting/raw_metal_to_ingot_smelting",
  "modern_industrialization:materials/tin/smelting/tiny_dust_to_nugget_blasting",
  "modern_industrialization:materials/tin/smelting/tiny_dust_to_nugget_smelting",
  "modern_industrialization:materials/tin/unpacker/tiny_dust",
  "modern_industrialization:materials/titanium/macerator/gear",
  "modern_industrialization:materials/titanium/macerator/ingot",
  "modern_industrialization:materials/titanium/macerator/nugget",
  "modern_industrialization:materials/titanium/macerator/ore_to_raw",
  "modern_industrialization:materials/titanium/macerator/plate",
  "modern_industrialization:materials/titanium/macerator/rod",
  "modern_industrialization:materials/tungsten/macerator/ingot",
  "modern_industrialization:materials/tungsten/macerator/nugget",
  "modern_industrialization:materials/tungsten/macerator/ore_to_raw",
  "modern_industrialization:materials/tungsten/macerator/plate",
  "modern_industrialization:materials/tungsten/macerator/raw_metal",
  "modern_industrialization:materials/uranium/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/uranium/craft/raw_metal_block_from_raw_metal",
  "modern_industrialization:materials/uranium/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/uranium/macerator/ingot",
  "modern_industrialization:materials/uranium/macerator/nugget",
  "modern_industrialization:materials/uranium/macerator/ore_to_raw",
  "modern_industrialization:materials/uranium/macerator/raw_metal",
  "modern_industrialization:materials/uranium/macerator/rod",
  "modern_industrialization:materials/uranium/packer/dust",
  "modern_industrialization:materials/uranium/unpacker/tiny_dust",
  "modern_industrialization:materials/chromium/craft/ingot_from_nugget",
  "modern_industrialization:materials/chromium/craft/ingot_from_block",
  "modern_industrialization:materials/chromium/craft/block_from_ingot",
  "modern_industrialization:materials/chromium/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/chromium/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/chromium/craft/nugget_from_ingot",
  "modern_industrialization:materials/lead/craft/raw_metal_from_raw_metal_block",
  "modern_industrialization:materials/nickel/craft/raw_metal_from_raw_metal_block",
  "modern_industrialization:materials/platinum/craft/raw_metal_from_raw_metal_block",
  "modern_industrialization:materials/silver/craft/raw_metal_from_raw_metal_block",
  "modern_industrialization:materials/tin/craft/raw_metal_from_raw_metal_block",
  "modern_industrialization:materials/lead/unpacker/raw_metal",
  "modern_industrialization:materials/platinum/unpacker/raw_metal",
  "modern_industrialization:materials/silver/unpacker/raw_metal",
  "modern_industrialization:materials/tin/unpacker/raw_metal",
  "modern_industrialization:materials/tin/forge_hammer/ore_to_raw_metal",
  "modern_industrialization:materials/tin/forge_hammer/ore_to_raw_metal_with_tool",
  "modern_industrialization:materials/uranium/craft/raw_metal_from_raw_metal_block",
  "modern_industrialization:materials/uranium/unpacker/raw_metal",
  "modern_industrialization:materials/uranium/packer/raw_metal_block",
  "modern_industrialization:materials/tungsten/craft/raw_metal_block_from_raw_metal",
  "modern_industrialization:materials/tungsten/packer/raw_metal_block",
  "modern_industrialization:materials/titanium/craft/raw_metal_block_from_raw_metal",
  "modern_industrialization:materials/titanium/packer/raw_metal_block",
  "modern_industrialization:materials/tin/packer/raw_metal_block",
  "modern_industrialization:materials/silver/packer/raw_metal_block",
  "modern_industrialization:materials/platinum/packer/raw_metal_block",
  "modern_industrialization:materials/nickel/packer/raw_metal_block",
  "modern_industrialization:materials/nickel/packer/raw_metal_block",
  "modern_industrialization:materials/antimony/craft/raw_metal_block_from_raw_metal",
  "modern_industrialization:materials/antimony/packer/raw_metal_block",
  "modern_industrialization:materials/lead/packer/raw_metal_block",
  "modern_industrialization:materials/antimony/craft/raw_metal_from_raw_metal_block",
  "modern_industrialization:materials/titanium/craft/raw_metal_from_raw_metal_block",
  "modern_industrialization:materials/tungsten/craft/raw_metal_from_raw_metal_block",
  "modern_industrialization:materials/electrum/craft/ingot_from_block",
  "modern_industrialization:materials/electrum/craft/ingot_from_nugget",
  "modern_industrialization:materials/electrum/smelting/dust_to_ingot_blasting",
  "modern_industrialization:materials/electrum/smelting/dust_to_ingot_smelting",
  "modern_industrialization:materials/electrum/packer/ingot",
  "modern_industrialization:materials/electrum/unpacker/ingot",
  "modern_industrialization:materials/nickel/craft/ingot_from_nugget",
  "modern_industrialization:materials/nickel/craft/ingot_from_block",
  "modern_industrialization:materials/nickel/smelting/ore_deepslate_to_ingot_blasting",
  "modern_industrialization:materials/nickel/smelting/dust_to_ingot_blasting",
  "modern_industrialization:materials/nickel/smelting/raw_metal_to_ingot_blasting",
  "modern_industrialization:materials/nickel/smelting/ore_to_ingot_blasting",
  "modern_industrialization:materials/nickel/smelting/ore_to_ingot_smelting",
  "modern_industrialization:materials/nickel/smelting/ore_deepslate_to_ingot_smelting",
  "modern_industrialization:materials/nickel/smelting/raw_metal_to_ingot_smelting",
  "modern_industrialization:materials/nickel/packer/ingot",
  "modern_industrialization:materials/nickel/unpacker/ingot",
  "modern_industrialization:materials/platinum/craft/ingot_from_nugget",
  "modern_industrialization:materials/platinum/craft/ingot_from_block",
  "modern_industrialization:materials/platinum/packer/ingot",
  "modern_industrialization:materials/platinum/unpacker/ingot",
  "modern_industrialization:materials/tin/craft/ingot_from_block",
  "modern_industrialization:materials/tin/craft/ingot_from_nugget",
  "modern_industrialization:materials/tin/smelting/ore_to_ingot_blasting",
  "modern_industrialization:materials/tin/smelting/ore_deepslate_to_ingot_blasting",
  "modern_industrialization:materials/tin/smelting/dust_to_ingot_blasting",
  "modern_industrialization:materials/tin/smelting/dust_to_ingot_smelting",
  "modern_industrialization:materials/tin/smelting/ore_deepslate_to_ingot_smelting",
  "modern_industrialization:materials/tin/smelting/ore_to_ingot_smelting",
  "modern_industrialization:materials/tin/packer/ingot",
  "modern_industrialization:materials/tin/unpacker/ingot",
  "modern_industrialization:materials/uranium/craft/ingot_from_nugget",
  "modern_industrialization:materials/uranium/craft/ingot_from_block",
  "modern_industrialization:materials/uranium/packer/ingot",
  "modern_industrialization:materials/uranium/unpacker/ingot",
  "modern_industrialization:materials/titanium/craft/ingot_from_block",
  "modern_industrialization:materials/titanium/craft/ingot_from_nugget",
  "modern_industrialization:materials/titanium/packer/ingot",
  "modern_industrialization:materials/titanium/unpacker/ingot",
  "modern_industrialization:materials/silver/craft/ingot_from_block",
  "modern_industrialization:materials/silver/craft/ingot_from_nugget",
  "modern_industrialization:materials/silver/smelting/dust_to_ingot_blasting",
  "modern_industrialization:materials/silver/smelting/raw_metal_to_ingot_blasting",
  "modern_industrialization:materials/silver/smelting/dust_to_ingot_smelting",
  "modern_industrialization:materials/silver/smelting/raw_metal_to_ingot_smelting",
  "modern_industrialization:materials/silver/packer/ingot",
  "modern_industrialization:materials/silver/unpacker/ingot",
  "modern_industrialization:materials/lead/craft/ingot_from_block",
  "modern_industrialization:materials/lead/craft/ingot_from_nugget",
  "modern_industrialization:materials/lead/smelting/ore_deepslate_to_ingot_blasting",
  "modern_industrialization:materials/lead/smelting/dust_to_ingot_blasting",
  "modern_industrialization:materials/lead/smelting/ore_to_ingot_blasting",
  "modern_industrialization:materials/lead/smelting/raw_metal_to_ingot_blasting",
  "modern_industrialization:materials/lead/smelting/ore_deepslate_to_ingot_smelting",
  "modern_industrialization:materials/lead/smelting/raw_metal_to_ingot_smelting",
  "modern_industrialization:materials/lead/smelting/ore_to_ingot_smelting",
  "modern_industrialization:materials/lead/smelting/dust_to_ingot_smelting",
  "modern_industrialization:materials/lead/packer/ingot",
  "modern_industrialization:materials/lead/unpacker/ingot",
  "modern_industrialization:materials/bronze/craft/ingot_from_nugget",
  "modern_industrialization:materials/bronze/craft/ingot_from_block",
  "modern_industrialization:materials/bronze/smelting/dust_to_ingot_blasting",
  "modern_industrialization:materials/bronze/smelting/dust_to_ingot_smelting",
  "modern_industrialization:materials/bronze/packer/ingot",
  "modern_industrialization:materials/bronze/unpacker/ingot",
  "modern_industrialization:materials/antimony/craft/ingot_from_nugget",
  "modern_industrialization:materials/antimony/craft/ingot_from_block",
  "modern_industrialization:materials/antimony/smelting/dust_to_ingot_blasting",
  "modern_industrialization:materials/antimony/smelting/ore_deepslate_to_ingot_blasting",
  "modern_industrialization:materials/antimony/smelting/raw_metal_to_ingot_blasting",
  "modern_industrialization:materials/antimony/packer/ingot",
  "modern_industrialization:materials/antimony/unpacker/ingot",
  "modern_industrialization:materials/nickel/smelting/dust_to_ingot_smelting",
  "modern_industrialization:materials/antimony/smelting/dust_to_ingot_smelting",
  "modern_industrialization:materials/antimony/smelting/raw_metal_to_ingot_smelting",
  "modern_industrialization:materials/antimony/smelting/ore_deepslate_to_ingot_smelting",
  "modern_industrialization:materials/tin/craft/nugget_from_ingot",
  "modern_industrialization:materials/tin/unpacker/nugget",
  "modern_industrialization:materials/titanium/craft/nugget_from_ingot",
  "modern_industrialization:materials/titanium/unpacker/nugget",
  "modern_industrialization:materials/tungsten/craft/nugget_from_ingot",
  "modern_industrialization:materials/tungsten/unpacker/nugget",
  "modern_industrialization:materials/uranium/craft/nugget_from_ingot",
  "modern_industrialization:materials/uranium/unpacker/nugget",
  "modern_industrialization:materials/nickel/craft/nugget_from_ingot",
  "modern_industrialization:materials/nickel/unpacker/nugget",
  "modern_industrialization:materials/nickel/craft/nugget_from_ingot",
  "modern_industrialization:materials/nickel/unpacker/nugget",
  "modern_industrialization:materials/bronze/craft/nugget_from_ingot",
  "modern_industrialization:materials/bronze/smelting/tiny_dust_to_nugget_blasting",
  "modern_industrialization:materials/bronze/smelting/tiny_dust_to_nugget_smelting",
  "modern_industrialization:materials/bronze/unpacker/nugget",
  "modern_industrialization:materials/lead/craft/nugget_from_ingot",
  "modern_industrialization:materials/lead/unpacker/nugget",
  "modern_industrialization:materials/electrum/craft/nugget_from_ingot",
  "modern_industrialization:materials/electrum/smelting/tiny_dust_to_nugget_blasting",
  "modern_industrialization:materials/electrum/smelting/tiny_dust_to_nugget_smelting",
  "modern_industrialization:materials/copper/craft/nugget_from_ingot",
  "modern_industrialization:materials/copper/unpacker/nugget",
  "modern_industrialization:materials/antimony/craft/nugget_from_ingot",
  "modern_industrialization:materials/antimony/smelting/tiny_dust_to_nugget_blasting",
  "modern_industrialization:materials/antimony/smelting/tiny_dust_to_nugget_smelting",
  "modern_industrialization:materials/platinum/craft/nugget_from_ingot",
  "modern_industrialization:materials/platinum/unpacker/nugget",
  "modern_industrialization:materials/silver/craft/nugget_from_ingot",
  "modern_industrialization:materials/silver/unpacker/nugget",
  "modern_industrialization:materials/antimony/unpacker/nugget",
  "modern_industrialization:materials/electrum/unpacker/nugget",
  "modern_industrialization:materials/chromium/unpacker/nugget",
  "modern_industrialization:materials/salt/unpacker/tiny_dust",
  "modern_industrialization:materials/electrum/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/electrum/unpacker/tiny_dust",
  "modern_industrialization:materials/antimony/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/antimony/unpacker/tiny_dust",
  "modern_industrialization:materials/monazite/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/monazite/unpacker/tiny_dust",
  "modern_industrialization:materials/titanium/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/titanium/unpacker/tiny_dust",
  "modern_industrialization:materials/redstone/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/redstone/unpacker/tiny_dust",
  "modern_industrialization:materials/titanium/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/monazite/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/antimony/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/electrum/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/tin/wiremill/wire",
  "modern_industrialization:materials/silver/wiremill/wire",
  "modern_industrialization:materials/platinum/wiremill/wire",
  "modern_industrialization:materials/electrum/wiremill/wire",
  "modern_industrialization:materials/copper/wiremill/wire",
  "modern_industrialization:materials/titanium/unpacker/raw_metal",
  "modern_industrialization:materials/tungsten/unpacker/raw_metal",
  "modern_industrialization:materials/antimony/unpacker/raw_metal",
  "modern_industrialization:materials/nickel/unpacker/raw_metal",
  "modern_industrialization:materials/iridium/unpacker/raw_metal",
  "modern_industrialization:materials/iridium/craft/raw_metal_from_raw_metal_block",
  "modern_industrialization:materials/iridium/packer/raw_metal_block",
  "modern_industrialization:materials/iridium/craft/raw_metal_block_from_raw_metal",
  "modern_industrialization:materials/uranium/craft/block_from_ingot",
  "modern_industrialization:materials/silver/craft/block_from_ingot",
  "modern_industrialization:materials/platinum/craft/block_from_ingot",
  "modern_industrialization:materials/tin/craft/block_from_ingot",
  "modern_industrialization:materials/nickel/craft/block_from_ingot",
  "modern_industrialization:materials/lead/craft/block_from_ingot",
  "modern_industrialization:materials/electrum/craft/block_from_ingot",
  "modern_industrialization:materials/bronze/craft/block_from_ingot",
  "modern_industrialization:materials/uranium/packer/block",
  "modern_industrialization:materials/silver/packer/block",
  "modern_industrialization:materials/platinum/packer/block",
  "modern_industrialization:materials/tin/packer/block",
  "modern_industrialization:materials/nickel/packer/block",
  "modern_industrialization:materials/lead/packer/block",
  "modern_industrialization:materials/electrum/packer/block",
  "modern_industrialization:materials/bronze/packer/block",
  "modern_industrialization:materials/salt/packer/block",
  "modern_industrialization:materials/bauxite/craft/block_from_dust",
  "modern_industrialization:materials/monazite/craft/block_from_dust",
  "modern_industrialization:materials/invar/packer/block",
  "modern_industrialization:materials/iridium/craft/block_from_ingot",
  "modern_industrialization:materials/tungsten/craft/block_from_ingot",
  "modern_industrialization:materials/tungsten/craft/block_from_ingot",
  "modern_industrialization:materials/titanium/craft/block_from_ingot",
  "modern_industrialization:materials/sulfur/craft/block_from_dust",
  "modern_industrialization:materials/antimony/craft/block_from_ingot",
  "modern_industrialization:materials/bauxite/packer/block",
  "modern_industrialization:materials/monazite/packer/block",
  "modern_industrialization:materials/iridium/packer/block",
  "modern_industrialization:materials/tungsten/packer/block",
  "modern_industrialization:materials/titanium/packer/block",
  "modern_industrialization:materials/sulfur/packer/block",
  "modern_industrialization:materials/antimony/packer/block",
  "modern_industrialization:materials/bauxite/craft/dust_from_block",
  "modern_industrialization:materials/monazite/craft/dust_from_block",
  "modern_industrialization:materials/iridium/craft/ingot_from_block",
  "modern_industrialization:materials/tungsten/craft/ingot_from_block",
  "modern_industrialization:materials/sulfur/craft/dust_from_block",
  "modern_industrialization:materials/plutonium/packer/block",
  "modern_industrialization:materials/plutonium/craft/block_from_ingot",
  "modern_industrialization:materials/plutonium/craft/ingot_from_block",
  "modern_industrialization:materials/chromium/packer/block",
  "modern_industrialization:materials/steel/packer/block",
  "modern_industrialization:materials/tungsten/craft/ingot_from_nugget",
  "modern_industrialization:materials/plutonium/craft/nugget_from_ingot",
  "modern_industrialization:materials/plutonium/unpacker/nugget",
  "modern_industrialization:materials/plutonium/craft/ingot_from_nugget",
  "modern_industrialization:materials/iridium/craft/ingot_from_nugget",
  "modern_industrialization:materials/iridium/craft/nugget_from_ingot",
  "modern_industrialization:materials/iridium/smelting/tiny_dust_to_nugget_blasting",
  "modern_industrialization:materials/iridium/smelting/tiny_dust_to_nugget_smelting",
  "modern_industrialization:materials/iridium/unpacker/nugget",
  "modern_industrialization:materials/nickel/packer/dust",
  "modern_industrialization:materials/ruby/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/ruby/packer/dust",
  "modern_industrialization:materials/diamond/packer/dust",
  "modern_industrialization:materials/bronze/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/bronze_dust",
  "modern_industrialization:materials/bronze/packer/dust",
  "modern_industrialization:materials/bronze/forge_hammer/ingot_to_dust",
  "modern_industrialization:materials/iridium/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/iridium/packer/dust",
  "modern_industrialization:materials/lead/packer/dust",
  "modern_industrialization:materials/electrum/packer/dust",
  "modern_industrialization:materials/antimony/packer/dust",
  "modern_industrialization:materials/titanium/packer/dust",
  "modern_industrialization:materials/tin/forge_hammer/ingot_to_dust",
  "modern_industrialization:materials/tin/forge_hammer/ore_to_dust_with_tool",
  "modern_industrialization:materials/tin/forge_hammer/raw_metal_to_dust_with_tool",
  "modern_industrialization:materials/emerald/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/emerald/packer/dust",
  "modern_industrialization:materials/monazite/packer/dust",
  "modern_industrialization:materials/monazite/unpacker/dust",
  "modern_industrialization:materials/tungsten/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/tungsten/packer/dust",
  "modern_industrialization:materials/tungsten/unpacker/tiny_dust",
  "modern_industrialization:materials/tungsten/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/lapis/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/lapis/packer/dust",
  "modern_industrialization:materials/iron/forge_hammer/ingot_to_dust",
  "modern_industrialization:materials/iron/forge_hammer/ore_to_dust_with_tool",
  "modern_industrialization:materials/iron/forge_hammer/raw_metal_to_dust_with_tool",
  "modern_industrialization:materials/iron/packer/dust",
  "modern_industrialization:materials/bauxite/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/bauxite/packer/dust",
  "modern_industrialization:materials/bauxite/unpacker/dust",
  "modern_industrialization:materials/gold/forge_hammer/ingot_to_dust",
  "modern_industrialization:materials/gold/forge_hammer/ore_to_dust_with_tool",
  "modern_industrialization:materials/gold/forge_hammer/raw_metal_to_dust_with_tool",
  "modern_industrialization:materials/copper/forge_hammer/ingot_to_dust",
  "modern_industrialization:materials/copper/forge_hammer/raw_metal_to_dust_with_tool",
  "modern_industrialization:materials/forge_hammer/copper_ore_to_dust_with_tool",
  "modern_industrialization:materials/copper/packer/dust",
  "modern_industrialization:materials/sulfur/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/sulfur/packer/dust",
  "modern_industrialization:materials/sulfur/unpacker/dust",
  "modern_industrialization:materials/plutonium/craft/dust_from_tiny_dust",
  "modern_industrialization:materials/plutonium/packer/dust",
  "modern_industrialization:materials/iridium/macerator/ingot",
  "modern_industrialization:materials/iridium/macerator/plate",
  "modern_industrialization:materials/iridium/macerator/raw_metal",
  "modern_industrialization:materials/gold/packer/dust",
  "modern_industrialization:materials/plutonium/macerator/ingot",
  "modern_industrialization:materials/bauxite/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/bauxite/unpacker/tiny_dust",
  "modern_industrialization:materials/salt/packer/dust",
  "modern_industrialization:materials/salt/unpacker/dust",
  "modern_industrialization:compat/mekanism/raw_osmium_to_dust",
  "modern_industrialization:compat/mekanism/osmium_ore_to_raw",
  "modern_industrialization:materials/plutonium/packer/ingot",
  "modern_industrialization:materials/plutonium/unpacker/ingot",
  "modern_industrialization:materials/tungsten/packer/ingot",
  "modern_industrialization:materials/tungsten/unpacker/ingot",
  "modern_industrialization:materials/stainless_steel/craft/ingot_from_block",
  "modern_industrialization:materials/iridium/smelting/ore_deepslate_to_ingot_blasting",
  "modern_industrialization:materials/iridium/smelting/raw_metal_to_ingot_blasting",
  "modern_industrialization:materials/iridium/smelting/dust_to_ingot_blasting",
  "modern_industrialization:materials/iridium/smelting/ore_deepslate_to_ingot_smelting",
  "modern_industrialization:materials/iridium/smelting/dust_to_ingot_smelting",
  "modern_industrialization:materials/iridium/smelting/raw_metal_to_ingot_smelting",
  "modern_industrialization:materials/iridium/packer/ingot",
  "modern_industrialization:materials/iridium/unpacker/ingot",
  "modern_industrialization:materials/stainless_steel/craft/block_from_ingot",
  "modern_industrialization:materials/iron/packer/block",
  "modern_industrialization:materials/coke/craft/gem_from_block",
  "modern_industrialization:materials/ruby/craft/tiny_dust_from_dust",
  "modern_industrialization:materials/tin/forge_hammer/ingot_to_plate",
  "modern_industrialization:materials/tin/forge_hammer/ingot_to_plate_with_tool",
  "modern_industrialization:materials/bronze/forge_hammer/ingot_to_plate",
  "modern_industrialization:materials/bronze/forge_hammer/ingot_to_plate_with_tool",
  "modern_industrialization:materials/copper/forge_hammer/ingot_to_plate",
  "modern_industrialization:materials/copper/forge_hammer/ingot_to_plate_with_tool",
  "modern_industrialization:materials/gold/forge_hammer/ingot_to_plate",
  "modern_industrialization:materials/gold/forge_hammer/ingot_to_plate_with_tool",
  "modern_industrialization:materials/iron/forge_hammer/ingot_to_plate",
  "modern_industrialization:materials/iron/forge_hammer/ingot_to_plate_with_tool",
  "modern_industrialization:materials/iron/smelting/dust_to_ingot_blasting",
  "modern_industrialization:materials/invar/smelting/dust_to_ingot_blasting",
  "modern_industrialization:materials/gold/smelting/dust_to_ingot_blasting",
  "modern_industrialization:materials/copper/smelting/dust_to_ingot_blasting",
  "modern_industrialization:materials/copper/smelting/dust_to_ingot_smelting",
  "modern_industrialization:materials/iron/smelting/dust_to_ingot_smelting",
  "modern_industrialization:materials/gold/smelting/dust_to_ingot_smelting",
  "modern_industrialization:materials/invar/smelting/dust_to_ingot_smelting",
  "modern_industrialization:materials/bauxite/macerator/ore_to_crushed",
  "modern_industrialization:materials/steel/forge_hammer/ingot_to_plate",
  "modern_industrialization:materials/steel/forge_hammer/double_ingot_to_plate",
  "modern_industrialization:materials/steel/forge_hammer/double_ingot_to_plate_with_tool",
  "modern_industrialization:materials/steel/forge_hammer/ingot_to_plate",
  "modern_industrialization:materials/steel/forge_hammer/ingot_to_plate_with_tool",
  "modern_industrialization:materials/iridium/macerator/nugget",
  "modern_industrialization:materials/iridium/unpacker/tiny_dust",
  "modern_industrialization:materials/iridium/craft/tiny_dust_from_dust"
);

removeOre.push(
  "modern_industrialization:tin_ore",
  "modern_industrialization:platinum_ore",
  "modern_industrialization:quartz_ore",
  "modern_industrialization:salt_ore",
  "modern_industrialization:nickel_ore",
  "modern_industrialization:monazite_ore",
  "modern_industrialization:iridium_ore",
  "modern_industrialization:bauxite_ore",
  "modern_industrialization:antimony_ore",
  "modern_industrialization:uranium_ore",
  "modern_industrialization:lead_ore",
  "modern_industrialization:tungsten_ore",
  "modern_industrialization:titanium_ore",
  "modern_industrialization:deepslate_monazite_ore",
  "modern_industrialization:deepslate_uranium_ore",
  "modern_industrialization:deepslate_tungsten_ore",
  "modern_industrialization:deepslate_tin_ore",
  "modern_industrialization:deepslate_salt_ore",
  "modern_industrialization:deepslate_lead_ore",
  "modern_industrialization:deepslate_iridium_ore",
  "modern_industrialization:deepslate_bauxite_ore",
  "modern_industrialization:deepslate_antimony_ore",
  "modern_industrialization:deepslate_nickel_ore"
);

removeItem.push(
  "modern_industrialization:raw_lead_block",
  "modern_industrialization:raw_lead",
  "modern_industrialization:raw_nickel_block",
  "modern_industrialization:raw_nickel",
  "modern_industrialization:raw_platinum_block",
  "modern_industrialization:raw_platinum",
  "modern_industrialization:raw_silver_block",
  "modern_industrialization:raw_silver",
  "modern_industrialization:raw_tin_block",
  "modern_industrialization:raw_tin",
  "modern_industrialization:raw_uranium_block",
  "modern_industrialization:raw_uranium",
  "modern_industrialization:diamond_tiny_dust",
  "modern_industrialization:nickel_tiny_dust",
  "modern_industrialization:uranium_tiny_dust",
  "modern_industrialization:tin_tiny_dust",
  "modern_industrialization:platinum_tiny_dust",
  "modern_industrialization:silver_tiny_dust",
  "modern_industrialization:nickel_tiny_dust",
  "modern_industrialization:lead_tiny_dust",
  "modern_industrialization:iron_tiny_dust",
  "modern_industrialization:copper_tiny_dust",
  "modern_industrialization:gold_tiny_dust",
  "modern_industrialization:silicon_ingot",
  "modern_industrialization:silicon_dust",
  "modern_industrialization:silicon_tiny_dust",
  "modern_industrialization:silicon_nugget",
  "modern_industrialization:silicon_block",
  "modern_industrialization:salt_dust",
  "modern_industrialization:salt_block",
  "modern_industrialization:steel_ingot",
  "modern_industrialization:steel_dust",
  "modern_industrialization:steel_block",
  "modern_industrialization:steel_nugget",
  "modern_industrialization:steel_tiny_dust",
  "modern_industrialization:invar_ingot",
  "modern_industrialization:invar_dust",
  "modern_industrialization:invar_nugget",
  "modern_industrialization:invar_plate",
  "modern_industrialization:invar_rod",
  "modern_industrialization:invar_tiny_dust",
  "modern_industrialization:platinum_plate",
  "modern_industrialization:tin_plate",
  "modern_industrialization:titanium_plate",
  "modern_industrialization:silver_plate",
  "modern_industrialization:iron_plate",
  "modern_industrialization:invar_plate",
  "modern_industrialization:gold_plate",
  "modern_industrialization:emerald_plate",
  "modern_industrialization:electrum_plate",
  "modern_industrialization:diamond_plate",
  "modern_industrialization:copper_plate",
  "modern_industrialization:bronze_plate",
  "modern_industrialization:tungsten_plate",
  "modern_industrialization:nickel_plate",
  "modern_industrialization:lead_plate",
  "modern_industrialization:stainless_steel_plate",
  "modern_industrialization:bronze_rod",
  "modern_industrialization:steel_rod",
  "modern_industrialization:tin_rod",
  "modern_industrialization:titanium_rod",
  "modern_industrialization:uranium_rod",
  "modern_industrialization:iron_rod",
  "modern_industrialization:invar_rod",
  "modern_industrialization:gold_rod",
  "modern_industrialization:copper_rod",
  "modern_industrialization:stainless_steel_block",
  "modern_industrialization:stainless_steel_dust",
  "modern_industrialization:stainless_steel_gear",
  "modern_industrialization:stainless_steel_rod",
  "modern_industrialization:stainless_steel_tiny_dust",
  "modern_industrialization:chromium_nugget",
  "modern_industrialization:chromium_tiny_dust",
  "modern_industrialization:chromium_dust",
  "modern_industrialization:chromium_block",
  "modern_industrialization:chromium_ingot",
  "modern_industrialization:redstone_crushed_dust",
  "modern_industrialization:monazite_crushed_dust",
  "modern_industrialization:quartz_crushed_dust",
  "modern_industrialization:bauxite_crushed_dust",
  "modern_industrialization:emerald_crushed_dust",
  "modern_industrialization:lapis_crushed_dust",
  "modern_industrialization:diamond_crushed_dust",
  "modern_industrialization:coal_crushed_dust",
  "modern_industrialization:lignite_coal_crushed_dust",
  "modern_industrialization:salt_crushed_dust",
  "modern_industrialization:lignite_coal_crushed_dust",
  "modern_industrialization:salt_crushed_dust",
  "modern_industrialization:raw_antimony",
  "modern_industrialization:raw_lead",
  "modern_industrialization:raw_nickel",
  "modern_industrialization:raw_platinum",
  "modern_industrialization:raw_silver",
  "modern_industrialization:raw_tin",
  "modern_industrialization:raw_titanium",
  "modern_industrialization:raw_tungsten",
  "modern_industrialization:raw_antimony_block",
  "modern_industrialization:raw_lead_block",
  "modern_industrialization:raw_nickel_block",
  "modern_industrialization:raw_platinum_block",
  "modern_industrialization:raw_silver_block",
  "modern_industrialization:raw_tin_block",
  "modern_industrialization:raw_titanium_block",
  "modern_industrialization:raw_tungsten_block",
  "modern_industrialization:raw_uranium_block",
  "modern_industrialization:chromium_ingot",
  "modern_industrialization:electrum_ingot",
  "modern_industrialization:nickel_ingot",
  "modern_industrialization:platinum_ingot",
  "modern_industrialization:tin_ingot",
  "modern_industrialization:uranium_ingot",
  "modern_industrialization:titanium_ingot",
  "modern_industrialization:silicon_ingot",
  "modern_industrialization:silver_ingot",
  "modern_industrialization:steel_ingot",
  "modern_industrialization:lead_ingot",
  "modern_industrialization:invar_ingot",
  "modern_industrialization:bronze_ingot",
  "modern_industrialization:antimony_ingot",
  "modern_industrialization:invar_nugget",
  "modern_industrialization:electrum_nugget",
  "modern_industrialization:copper_nugget",
  "modern_industrialization:chromium_nugget",
  "modern_industrialization:antimony_nugget",
  "modern_industrialization:platinum_nugget",
  "modern_industrialization:silicon_nugget",
  "modern_industrialization:silver_nugget",
  "modern_industrialization:steel_nugget",
  "modern_industrialization:tin_nugget",
  "modern_industrialization:titanium_nugget",
  "modern_industrialization:tungsten_nugget",
  "modern_industrialization:uranium_nugget",
  "modern_industrialization:nickel_nugget",
  "modern_industrialization:bronze_nugget",
  "modern_industrialization:lead_nugget",
  "modern_industrialization:salt_tiny_dust",
  "modern_industrialization:electrum_tiny_dust",
  "modern_industrialization:antimony_tiny_dust",
  "modern_industrialization:monazite_tiny_dust",
  "modern_industrialization:titanium_tiny_dust",
  "modern_industrialization:redstone_tiny_dust",
  "modern_industrialization:iron_gear",
  "modern_industrialization:gold_gear",
  "modern_industrialization:bronze_gear",
  "modern_industrialization:copper_gear",
  "modern_industrialization:steel_gear",
  "modern_industrialization:stainless_steel_gear",
  "modern_industrialization:tin_gear",
  "modern_industrialization:titanium_gear",
  "modern_industrialization:emerald_plate",
  "modern_industrialization:iridium_plate",
  "modern_industrialization:steel_plate",
  "modern_industrialization:raw_iridium",
  "modern_industrialization:coal_dust",
  "modern_industrialization:tin_wire",
  "modern_industrialization:silver_wire",
  "modern_industrialization:platinum_wire",
  "modern_industrialization:electrum_wire",
  "modern_industrialization:copper_wire",
  "modern_industrialization:raw_iridium_block",
  "modern_industrialization:uranium_block",
  "modern_industrialization:silver_block",
  "modern_industrialization:nickel_block",
  "modern_industrialization:lead_block",
  "modern_industrialization:electrum_block",
  "modern_industrialization:bronze_block",
  "modern_industrialization:tin_block",
  "modern_industrialization:platinum_block",
  "modern_industrialization:bauxite_block",
  "modern_industrialization:monazite_block",
  "modern_industrialization:invar_block",
  "modern_industrialization:iridium_block",
  "modern_industrialization:tungsten_block",
  "modern_industrialization:titanium_block",
  "modern_industrialization:sulfur_block",
  "modern_industrialization:antimony_block",
  "modern_industrialization:plutonium_block",
  "modern_industrialization:coke_block",
  "modern_industrialization:coke",
  "modern_industrialization:iridium_nugget",
  "modern_industrialization:plutonium_nugget",
  "modern_industrialization:nickel_dust",
  "modern_industrialization:gold_dust",
  "modern_industrialization:lead_dust",
  "modern_industrialization:uranium_dust",
  "modern_industrialization:sulfur_dust",
  "modern_industrialization:copper_dust",
  "modern_industrialization:bronze_dust",
  "modern_industrialization:iron_dust",
  "modern_industrialization:quartz_dust",
  "modern_industrialization:bauxite_dust",
  "modern_industrialization:titanium_dust",
  "modern_industrialization:tungsten_dust",
  "modern_industrialization:lapis_dust",
  "modern_industrialization:plutonium_dust",
  "modern_industrialization:antimony_dust",
  "modern_industrialization:ruby_dust",
  "modern_industrialization:diamond_dust",
  "modern_industrialization:electrum_dust",
  "modern_industrialization:silver_dust",
  "modern_industrialization:iridium_dust",
  "modern_industrialization:tin_dust",
  "modern_industrialization:monazite_dust",
  "modern_industrialization:emerald_dust",
  "modern_industrialization:platinum_dust",
  "modern_industrialization:coke_dust",
  "modern_industrialization:bauxite_tiny_dust",
  "modern_industrialization:iridium_tiny_dust",
  "modern_industrialization:tungsten_tiny_dust",
  "modern_industrialization:plutonium_ingot",
  "modern_industrialization:tungsten_ingot",
  "modern_industrialization:stainless_steel_ingot",
  "modern_industrialization:iridium_ingot",
  "modern_industrialization:crude_oil_bucket",
  "modern_industrialization:diesel_bucket",
  "modern_industrialization:biodiesel_bucket",
  "modern_industrialization:ethanol_bucket",
  "modern_industrialization:creosote_bucket",
  "modern_industrialization:ruby_tiny_dust",
  "modern_industrialization:silicon_plate",
  "modern_industrialization:plutonium_tiny_dust"
);

ServerEvents.recipes((event) => {
  resourceOresIngots.forEach((mod) => {
    mod.materials.forEach((material) => {
      const ingotTag = `${tagPrefix}:ingots/${material}`;
      const nuggetTag = `${tagPrefix}:nuggets/${material}`;
      const tinyDustTag = `${tagPrefix}:tiny_dusts/${material}`;
      const blockTag = `${tagPrefix}:storage_blocks/${material}`;
      const rawMaterialTag = `${tagPrefix}:raw_materials/${material}`;
      const oreTag = `${tagPrefix}:ores/${material}`;
      const rawTag = `${tagPrefix}:raw_materials/${material}`;
      const rawBlockTag = `${tagPrefix}:storage_blocks/raw_${material}`;

      const dust = `ftbmaterials:${material}_dust`;
      const blockID = mod.modID === "minecraft" ? `minecraft:${material}_block` : `ftbmaterials:${material}_block`;
      const ingotID = mod.modID === "minecraft" ? `minecraft:${material}_ingot` : `ftbmaterials:${material}_ingot`;
      const nuggetID =
        material === "copper"
          ? `ftbmaterials:copper_nugget`
          : mod.modID === "minecraft"
          ? `minecraft:${material}_nugget`
          : `ftbmaterials:${material}_nugget`;
      const rawID = mod.modID === "minecraft" ? `minecraft:raw_${material}` : `ftbmaterials:${material}_raw_ore`;
      const rawBlockID =
        mod.modID === "minecraft" ? `minecraft:raw_${material}_block` : `ftbmaterials:${material}_raw_block`;
      const tinyDustID = `ftbmaterials:${material}_tiny_dust`;

      // Raw Ores -> Dust
      if (material == "lead") {
        addRecipeModernIndustrializationMacerator(
          event,
          rawMaterialTag,
          [
            [`ftbmaterials:${material}_dust`, 1],
            ["ftbmaterials:silver_raw_ore", 1, 0.5],
            [`ftbmaterials:${material}_dust`, 1, 0.33],
          ],
          `ftb:modern_industrialization/macerator/raw_materials/${material}`
        );
      } else {
        addRecipeModernIndustrializationMacerator(
          event,
          rawMaterialTag,
          [
            [`ftbmaterials:${material}_dust`, 1],
            [`ftbmaterials:${material}_dust`, 1, 0.33],
          ],
          `ftb:modern_industrialization/macerator/raw_materials/${material}`
        );
      }

      // Ores -> Raw Ores
      addRecipeModernIndustrializationMacerator(
        event,
        oreTag,
        [
          [getRawOreId(material), 2],
          [getRawOreId(material), 1, 0.25],
        ],
        `ftb:modern_industrialization/macerator/ores/${material}`
      );

      // Ingots -> Dusts
      addRecipeModernIndustrializationMacerator(
        event,
        ingotTag,
        [[dust, 1]],
        `ftb:modern_industrialization/macerator/ingots/${material}`
      );

      // Ingots -> Blocks
      addRecipeModernIndustrializationPacker(
        event,
        [
          [ingotTag, 9],
          ["modern_industrialization:block_template", 1],
        ],
        blockID,
        `ftb:modern_industrialization/packer/blocks/${material}`
      );

      // Blocks -> Ingots
      addRecipeModernIndustrializationUnpacker(
        event,
        [blockTag, 1],
        [ingotID, 9],
        `ftb:modern_industrialization/unpacker/blocks/${material}`
      );

      // Ingots -> Nuggets
      addRecipeModernIndustrializationUnpacker(
        event,
        [ingotTag, 1],
        [nuggetID, 9],
        `ftb:modern_industrialization/unpacker/ingot_to_nuggets/${material}`
      );

      // Nuggets -> Ingots
      addRecipeModernIndustrializationPacker(
        event,
        [[nuggetTag, 9]],
        ingotID,
        `ftb:modern_industrialization/packer/nuggets_to_ingot/${material}`
      );

      // Dust -> Tiny Dusts
      addRecipeModernIndustrializationUnpacker(
        event,
        [`${tagPrefix}:dusts/${material}`, 1],
        [tinyDustID, 9],
        `ftb:modern_industrialization/unpacker/dust_to_tiny_dusts/${material}`
      );

      // Tiny Dusts -> Dust
      addRecipeModernIndustrializationPacker(
        event,
        [[tinyDustTag, 9]],
        `ftbmaterials:${material}_dust`,
        `ftb:modern_industrialization/packer/tiny_dusts_to_dust/${material}`
      );

      // Raw Materials → Raw Block
      addRecipeModernIndustrializationPacker(
        event,
        [
          [rawTag, 9],
          ["modern_industrialization:block_template", 1],
        ],
        rawBlockID,
        `ftb:modern_industrialization/packer/raw_block/${material}`
      );

      // Raw Block → Raw Materials
      addRecipeModernIndustrializationUnpacker(
        event,
        [rawBlockTag, 1],
        [rawID, 9],
        `ftb:modern_industrialization/unpacker/raw_block/${material}`
      );
    });
  });

  // Loop For Gem Ores
  resourcesOresGem.forEach((mod) => {
    mod.materials.forEach((material) => {
      const gemType = material[0];
      let oreTag = `${tagPrefix}:ores/${gemType}`;
      if (oreTag === "c:ores/lapis_lazuli") {
        oreTag = "c:ores/lapis";
      }
      const outputId = material[2] ?? `${mod.modID}:${gemType}`;
      const outputAmount = material[1] ?? 1;
      addRecipeModernIndustrializationMacerator(
        event,
        oreTag,
        [
          [outputId, outputAmount],
          [outputId, Math.max(1, Math.floor(outputAmount / 2)), 0.33],
        ],
        `ftb:modern_industrialization/macerator/ore/${gemType}`
      );

      // Gem -> Dust
      if (material[3] !== false) {
        if (Item.exists(`ftbmaterials:${gemType}_dust`)) {
          addRecipeModernIndustrializationMacerator(
            event,
            outputId,
            [[`ftbmaterials:${gemType}_dust`, 1]],
            `ftb:modern_industrialization/macerator/gem/${gemType}`
          );
        } else {
          console.log(`[MI Macerator] Dust not found for ${gemType} Skipping...`);
        }
      }
    });
  });

  enabledAlloys.forEach((material) => {
    const ingotTag = `${tagPrefix}:ingots/${material}`;
    const dust = `ftbmaterials:${material}_dust`;

    // Ingot -> Dusts
    addRecipeModernIndustrializationMacerator(
      event,
      ingotTag,
      [[dust, 1]],
      `ftb:modern_industrialization/macerator/ingots/${material}`
    );
  });

  enabledWires.forEach((entry) => {
    const material = entry[0];
    if (entry[2] === false) {
      return;
    }
    const tag = entry[1] ?? `c:plates/${material}`;

    addRecipeModernIndustrializationWireMill(
      event,
      tag,
      [[`ftbmaterials:${material}_wire`, 2]],
      `ftb:mi/wiremill/wire/${material}`
    );
  });

  // Plates
  enabledPlates.forEach((plate) => {
    // Plates -> Dusts

    const plateTag = `${tagPrefix}:plates/${plate[0]}`;
    const materialTag = plate[1] ?? `c:ingots/${plate[0]}`;
    const plateID = `ftbmaterials:${plate[0]}_plate`;

    if (plate[2] === false) {
      return;
    }

    addRecipeModernIndustrializationMacerator(
      event,
      plateTag,
      [[`ftbmaterials:${plate[0]}_dust`, 1]],
      `ftb:modern_industrialization/macerator/plates/${plate[0]}`
    );

    addRecipeModernIndustrializationForgeHammer(
      event,
      [materialTag, 2],
      [plateID, 1],
      0,
      `ftb:modern_industrialization/forge_hammer/toolless/plates/${plate[0]}`
    );

    addRecipeModernIndustrializationForgeHammer(
      event,
      [materialTag, 1],
      [plateID, 1],
      20,
      `ftb:modern_industrialization/forge_hammer/tools/plates/${plate[0]}`
    );
  });

  // Rods
  enabledRods.forEach((rod) => {
    // Rods -> Tiny Dusts
    if (rod[0] === undefined) {
      return; // ? No idea how undefined is getting here
    }
    addRecipeModernIndustrializationMacerator(
      event,
      `${tagPrefix}:rods/${rod[0]}`,
      [[`ftbmaterials:${rod[0]}_tiny_dust`, 4]],
      `ftb:modern_industrialization/macerator/rods/${rod[0]}`
    );
  });

  // Util Recipes
  addRecipeModernIndustrializationCompressor(
    event,
    ["mekanism:dirty_netherite_scrap", 1],
    ["minecraft:netherite_scrap", 1],
    `ftb:modern_industrialization/compressor/raw_block/netherite`
  );

  addRecipeModernIndustrializationMacerator(
    event,
    "c:gems/coal_coke",
    [["ftbmaterials:coal_coke_dust", 1]],
    `ftb:modern_industrialization/macerator/coke`
  );

  addRecipeModernIndustrializationMacerator(
    event,
    "c:gems/salt",
    [
      ["ftbmaterials:salt_dust", 2],
      ["ftbmaterials:salt_dust", Math.max(1, Math.floor(2 / 2)), 0.33],
    ],
    `ftb:modern_industrialization/macerator/gems/salt`
  );

  addRecipeModernIndustrializationMacerator(
    event,
    "c:obsidians",
    [["ftbmaterials:obsidian_dust", 4]],
    `ftb:modern_industrialization/macerator/obsidian`
  );

  addRecipeModernIndustrializationMacerator(
    event,
    "c:ingots/netherite",
    [["ftbmaterials:netherite_dust", 1]],
    `ftb:modern_industrialization/macerator/netherite`
  );

  addRecipeModernIndustrializationCompressor(
    event,
    ["ae2:ender_dust", 1],
    ["minecraft:ender_pearl", 1],
    `ftb:modern_industrialization/compressor/dusts/ender_pearl`
  );

  //Raw Tungsten Blast Smelting
  event
    .custom({
      type: "modern_industrialization:blast_furnace",
      eu: 128,
      duration: 400,
      item_inputs: {
        tag: "c:raw_materials/tungsten",
        amount: 3,
      },
      fluid_inputs: {
        fluid: "modern_industrialization:manganese_sulfuric_solution",
        amount: 3000,
      },
      item_outputs: {
        item: "ftbmaterials:tungsten_ingot",
        amount: 4,
      },
      fluid_outputs: {
        fluid: "modern_industrialization:manganese_sulfuric_solution",
        amount: 2500,
      },
    })
    .id("ftb:modern_industrialization/blast_furnace/raw_ore/tungsten");

  //Raw Tungsten Macerating Recipe.
  addRecipeModernIndustrializationMacerator(
    event,
    "c:raw_materials/tungsten",
    [
      ["ftbmaterials:tungsten_dust", 1],
      ["ftbmaterials:tungsten_dust", 1, 0.33],
    ],
    `ftb:modern_industrialization/macerator/raw_materials/tungsten`
  );

  //Packing and Unpacking Titanium Dust.
  event
    .custom({
      type: "modern_industrialization:unpacker",
      duration: 100,
      eu: 2,
      item_inputs: [
        {
          amount: 1,
          item: "ftbmaterials:titanium_dust",
        },
      ],
      item_outputs: [
        {
          amount: 9,
          item: "ftbmaterials:titanium_tiny_dust",
        },
      ],
    })
    .id("ftb:modern_industrialization/unpacker/dusts/titanium");

  event
    .custom({
      type: "modern_industrialization:packer",
      duration: 100,
      eu: 2,
      item_inputs: [
        {
          amount: 9,
          item: "ftbmaterials:titanium_tiny_dust",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "ftbmaterials:titanium_dust",
        },
      ],
    })
    .id("ftb:modern_industrialization/packer/dusts/titanium");

  //Packing and Unpacking Tungsten Dust.
  event
    .custom({
      type: "modern_industrialization:unpacker",
      duration: 100,
      eu: 2,
      item_inputs: [
        {
          amount: 1,
          item: "ftbmaterials:tungsten_dust",
        },
      ],
      item_outputs: [
        {
          amount: 9,
          item: "ftbmaterials:tungsten_tiny_dust",
        },
      ],
    })
    .id("ftb:modern_industrialization/unpacker/dusts/tungsten");

  event
    .custom({
      type: "modern_industrialization:packer",
      duration: 100,
      eu: 2,
      item_inputs: [
        {
          amount: 9,
          item: "ftbmaterials:tungsten_tiny_dust",
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "ftbmaterials:tungsten_dust",
        },
      ],
    })
    .id("ftb:modern_industrialization/packer/dusts/tungsten");

  event
    .custom({
      type: "modern_industrialization:packer",
      duration: 400,
      eu: 2,
      item_inputs: [
        {
          amount: 9,
          tag: "c:ingots/stainless_steel",
        },
        {
          amount: 1,
          item: "modern_industrialization:packer_block_template",
          probability: 0.0,
        },
      ],
      item_outputs: [
        {
          amount: 1,
          item: "ftbmaterials:stainless_steel_block",
        },
      ],
    })
    .id("ftb:modern_industrialization/packer/blocks/stainless_steel");

  addRecipeModernIndustrializationCompressor(
    event,
    ["minecraft:netherite_ingot", 1],
    ["ftbmaterials:netherite_plate", 1],
    `ftb:modern_industrialization/compressor/netherite_plate`
  );

  // Add compact for AE2 Add-On Mods
  processorVariants.forEach((ae2Pro) => {
    const mod = ae2Pro[0];
    const printed = ae2Pro[1];
    const processor = ae2Pro[2];
    if (Platform.isLoaded(mod)) {
      addRecipeModernIndustrializationAssembler(
        event,
        [
          [printed, 1],
          ["ae2:printed_silicon", 1],
        ],
        [["modern_industrialization:molten_redstone", 90]],
        [processor, 1],
        `ftb:modern_industrialization/assembler/${mod}/${processor.split(":")[1]}`
      );
    }
  });

  ["titanium", "stainless_steel", "chromium", "plutonium", "iridium"].forEach((item) => {
    addRecipeModernIndustrializationMacerator(
      event,
      `c:ingots/${item}`,
      [[`ftbmaterials:${item}_dust`, 1]],
      `ftb:modern_industrialization/macerator/ingot/${item}`
    );
  });
});

const aluminumItems = [
  ["dusts", "aluminum_dust"],
  ["gears", "aluminum_gear"],
  ["ingots", "aluminum_ingot"],
  ["plates", "aluminum_plate"],
  ["rods", "aluminum_rod"],
  ["nuggets", "aluminum_nugget"],
  ["tiny_dusts", "aluminum_tiny_dust"],
  ["storage_blocks", "aluminum_block", true],
];

ServerEvents.tags("item", (event) => {
  aluminumItems.forEach((entry) => {
    const type = entry[0];
    const item = entry[1];
    event.remove("c:" + type + "/aluminum", "modern_industrialization:" + item);
    event.add("c:" + type + "/industrial_aluminum", "modern_industrialization:" + item);
  });

  event.add("c:rubbers", "modern_industrialization:rubber_sheet");
});

ServerEvents.tags("block", (event) => {
  aluminumItems.forEach((entry) => {
    if (entry[2]) {
      const type = entry[0];
      const item = entry[1];
      event.remove("c:" + type + "/aluminum", "modern_industrialization:" + item);
      event.add("c:" + type + "/industrial_aluminum", "modern_industrialization:" + item);
    }
  });
});
