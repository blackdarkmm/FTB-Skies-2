// priority: 992

const tooltipPairs = [
  {
    items: ["ae2:cable_anchor"],
    lines: [
      "ftb.tooltip.ae2.cable_anchor.1",
      "ftb.tooltip.ae2.cable_anchor.2",
      "ftb.tooltip.ae2.cable_anchor.3",
      "ftb.tooltip.ae2.cable_anchor.4",
    ],
  },
  {
    items: ["justdirethings:experienceholder"],
    lines: ["ftb.tooltip.justdirethings.experienceholder"],
  },
  {
    items: ["toolbelt:belt"],
    lines: ["ftb.tooltip.toolbelt.belt.1", "ftb.tooltip.toolbelt.belt.2"],
  },
  {
    items: ["compactmachines:new_machine"],
    lines: ["ftb.tooltip.compactmachines.new_machine"],
  },
  {
    items: ["ae2:not_so_mysterious_cube"],
    lines: ["ftb.tooltip.ae2.not_so_mysterious_cube"],
  },

  {
    items: [
      "easy_villagers:trader[]",
      "easy_villagers:auto_trader[]",
      "easy_villagers:farmer[]",
      "easy_villagers:breeder[]",
      "easy_villagers:converter[]",
      "easy_villagers:iron_farm[]",
      "easy_villagers:incubator[]",
      "easy_villagers:inventory_viewer[]",
    ],
    lines: [
      "ftb.tooltip.easy_villagers.disabled_render",
      "ftb.tooltip.easy_villagers.config_warning",
    ],
  },
  {
    items: ["minecraft:netherite_scrap"],
    lines: ["ftb.tooltip.minecraft.netherite_scrap"],
  },
  {
    items: ["minecraft:sculk_shrieker"],
    lines: ["ftb.tooltip.minecraft.sculk_shrieker"],
  },
  {
    items: ["industrialforegoing:dryrubber"],
    lines: ["ftb.tooltip.industrialforegoing.dryrubber"],
  },
  {
    items: ["enderio:grains_of_infinity"],
    lines: ["ftb.tooltip.enderio.grains_of_infinity"],
  },
  {
    items: ["ftbstuff:stone_cobblestone_generator"],
    lines: ["ftb.tooltip.ftbstuff.stone_cobblestone_generator"],
  },
  {
    items: ["ftbstuff:iron_cobblestone_generator"],
    lines: ["ftb.tooltip.ftbstuff.iron_cobblestone_generator"],
  },
  {
    items: ["ftbstuff:gold_cobblestone_generator"],
    lines: ["ftb.tooltip.ftbstuff.gold_cobblestone_generator"],
  },
  {
    items: ["ftbstuff:diamond_cobblestone_generator"],
    lines: ["ftb.tooltip.ftbstuff.diamond_cobblestone_generator"],
  },
  {
    items: ["ftbstuff:netherite_cobblestone_generator"],
    lines: ["ftb.tooltip.ftbstuff.netherite_cobblestone_generator"],
  },
  {
    items: ["ftbstuff:stone_basalt_generator"],
    lines: ["ftb.tooltip.ftbstuff.stone_basalt_generator"],
  },
  {
    items: ["ftbstuff:iron_basalt_generator"],
    lines: ["ftb.tooltip.ftbstuff.iron_basalt_generator"],
  },
  {
    items: ["ftbstuff:gold_basalt_generator"],
    lines: ["ftb.tooltip.ftbstuff.gold_basalt_generator"],
  },
  {
    items: ["ftbstuff:diamond_basalt_generator"],
    lines: ["ftb.tooltip.ftbstuff.diamond_basalt_generator"],
  },
  {
    items: ["ftbstuff:netherite_basalt_generator"],
    lines: ["ftb.tooltip.ftbstuff.netherite_basalt_generator"],
  },
  {
    items: ["supplementaries:ash"],
    lines: ["ftb.tooltip.supplementaries.ash"],
  },
  {
    items: ["ae2:meteorite_compass"],
    lines: ["ftb.tooltip.ae2.meteorite_compass"],
  },
  {
    items: ["hangglider:hang_glider"],
    lines: ["ftb.tooltip.hangglider.hang_glider"],
  },
  {
    items: ["irons_spellbooks:netherward_tincture"],
    lines: ["ftb.tooltip.irons_spellbooks.netherward_tincture"],
  },
  {
    items: ["malum:natural_quartz"],
    lines: ["ftb.tooltip.malum.natural_quartz"],
  },
  {
    items: ["minecraft:snowball"],
    lines: ["ftb.tooltip.minecraft.snowball"],
  },
  {
    items: ["ftb:realized_transcendence"],
    lines: ["ftb.tooltip.realized_transcendence.1", "ftb.tooltip.realized_transcendence.2"],
  },
  {
    items: ["modern_industrialization:advanced_coke_oven"],
    lines: ["ftb.tooltip.modern_industrialization.advanced_coke_oven"],
  },
  {
    items: ["modern_industrialization:deep_mob_binder"],
    lines: ["ftb.tooltip.modern_industrialization.deep_mob_binder"],
  },
  {
    items: ["enchanted:mutandis", "enchanted:mutandis_extremis"],
    lines: ["ftb.tooltip.enchanted.mutandis_warning"],
  },
  {
    items: [
      'sophisticatedstorage:barrel',
      'sophisticatedstorage:limited_barrel_1',
      'sophisticatedstorage:limited_barrel_2',
      'sophisticatedstorage:limited_barrel_3',
      'sophisticatedstorage:limited_barrel_4',
      'sophisticatedstorage:chest',

      'sophisticatedstorage:copper_barrel',
      'sophisticatedstorage:limited_copper_barrel_1',
      'sophisticatedstorage:limited_copper_barrel_2',
      'sophisticatedstorage:limited_copper_barrel_3',
      'sophisticatedstorage:limited_copper_barrel_4',
      'sophisticatedstorage:copper_chest',

      'sophisticatedstorage:iron_barrel',
      'sophisticatedstorage:limited_iron_barrel_1',
      'sophisticatedstorage:limited_iron_barrel_2',
      'sophisticatedstorage:limited_iron_barrel_3',
      'sophisticatedstorage:limited_iron_barrel_4',
      'sophisticatedstorage:iron_chest',

      'sophisticatedstorage:gold_barrel',
      'sophisticatedstorage:limited_gold_barrel_1',
      'sophisticatedstorage:limited_gold_barrel_2',
      'sophisticatedstorage:limited_gold_barrel_3',
      'sophisticatedstorage:limited_gold_barrel_4',
      'sophisticatedstorage:gold_chest',

      'sophisticatedstorage:diamond_barrel',
      'sophisticatedstorage:limited_diamond_barrel_1',
      'sophisticatedstorage:limited_diamond_barrel_2',
      'sophisticatedstorage:limited_diamond_barrel_3',
      'sophisticatedstorage:limited_diamond_barrel_4',
      'sophisticatedstorage:diamond_chest',

      'sophisticatedstorage:netherite_barrel',
      'sophisticatedstorage:limited_netherite_barrel_1',
      'sophisticatedstorage:limited_netherite_barrel_2',
      'sophisticatedstorage:limited_netherite_barrel_3',
      'sophisticatedstorage:limited_netherite_barrel_4',
      'sophisticatedstorage:netherite_chest'
    ],
    lines: [
      "ftb.tooltip.sophisticatedstorage.upgrade_requirement",
      "ftb.tooltip.sophisticatedstorage.cardboard_box_blacklist"
    ],
  },
  {
    items: ["geore:budding_uraninite"],
    lines: ["ftb.tooltip.geore.budding_uraninite"],
  },
  {
    items: ["pipez:infinity_upgrade"],
    lines: ["ftb.tooltip.pipez.infinity_upgrade"],
  },
  {
    items: ["minecraft:pointed_dripstone"],
    lines: ["ftb.tooltip.xycraft_extractor.pointed_dripstone"],
  },
  {
    items: ["mysticalagriculture:cognizant_dust"],
    lines: ["ftb.tooltip.mysticalgriculture.mystical_enlightment"]
  }
];

ItemEvents.modifyTooltips((event) => {
  for (const { items, lines } of tooltipPairs) {
    for (const item of items) {
      event.add(
        item,
        lines.map((key) => Text.translate(key))
      );
    }
  }

  // Special case: modifying existing tooltip lines
  event.modify("fargostalismans:abominable_energy", (tooltip) => {
    tooltip.removeLine(1);
    tooltip.insert(
      1,
      Text.translate("ftb.tooltip.fargostalismans.abominable_energy.1")
    );
    tooltip.insert(
      2,
      Text.translate("ftb.tooltip.fargostalismans.abominable_energy.2")
    );
  });
});
