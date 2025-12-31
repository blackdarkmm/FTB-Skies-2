// priority: 990

ServerEvents.recipes((event) => {
  event
    .shaped("16x pipez:item_pipe", ["SSS", "RDR", "SSS"], {
      S: "#c:ingots/steel",
      R: "#c:dusts/redstone",
      D: "minecraft:dispenser",
    })
    .id("ftb:item_pipe");
});
