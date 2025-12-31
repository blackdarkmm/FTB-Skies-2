// priority: 987

ServerEvents.recipes((event) => {
  event.custom({
    type: "enchanted:kettle",
    cook_colour: "B046A5",
    final_colour: "F78FEB",
    ingredients: [
      {
        count: 1,
        id: "minecraft:dragon_egg",
      },
      {
        count: 4,
        id: "productivelib:upgrade_productivity_4",
      },
      {
        count: 1,
        id: "malum:paracausal_flame",
      },
      {
        count: 1,
        id: "reliquary:kraken_shell",
      },
      {
        count: 1,
        id: "minecraft:dragon_breath",
      },
      {
        count: 1,
        id: "enchanted:whiff_of_magic",
      },
    ],
    power: 4000,
    result: {
      count: 1,
      id: "ftb:omega_dragon_egg",
    },
  });
});
