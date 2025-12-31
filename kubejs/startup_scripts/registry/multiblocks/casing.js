MIMachineEvents.registerCasings(event => {
    event.registerBlockImitation("bricks_casing", "immersiveengineering:cokebrick");
    event.registerBlockImitation("soul_bricks_casing", "advancedperipherals:peripheral_casing");
});

// MIRegistrationEvents.registerCableTiers(event => {
//     event.register(
//         'bricked',
//         'Bricked',
//         'Bricked',
//         262144,
//         'bricks_casing',
//     );
// })

MIMachineEvents.registerHatches(event => {
    // event.energy('bricked')

    event.fluid(
        'Bricked',
        'bricked',
        'bricks_casing',
        4096
    )

    event.item(
        'Bricked',
        'bricked',
        'soul_bricks_casing',
        3, 5,
        8, 17
    )

    event.fluid(
        'Soul Bricked',
        'soul_bricked',
        'soul_bricks_casing',
        4096
    )

    event.item(
        'Soul Bricked',
        'soul_bricked',
        'bricks_casing',
        3, 5,
        8, 17
    )

});