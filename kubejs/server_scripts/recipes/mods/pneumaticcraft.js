ServerEvents.recipes(event => {

    event.custom({
        "type": "pneumaticcraft:amadron",
        "output": {
            "resource": {
            "amount": 1000,
            "id": "modern_industrialization:helium"
            }
        },
        "level": 0,
        "offer_id": "pneumaticcraft:amadron/emerald_to_helium",
        "input": {
            "resource": {
            "count": 5,
            "id": "minecraft:emerald"
            }
        }
    })
})