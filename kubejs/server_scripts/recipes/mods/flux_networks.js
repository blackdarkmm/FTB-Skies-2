ServerEvents.recipes(event => {

    //Flux Controller
    event.shaped(Item.of("fluxnetworks:flux_controller", 1),
        ["BCB", "DSD", "BBB"],
        {
            S: "#c:nether_stars",
            C: "fluxnetworks:flux_core",
            D: "fluxnetworks:flux_dust",
            B: "fluxnetworks:flux_block",
        }
    ).id("ftb:minecraft/shaped/flux_controller");

});

