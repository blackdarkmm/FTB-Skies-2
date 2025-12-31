BlockEvents.modification(e => {
  e.modify('minecraft:end_portal_frame', block => {
    block.destroySpeed = 0.5
	block.requiresTool = true
  })
})

ItemEvents.modification(event => {
  event.modify('oritech:super_ai_chip', item => {
    item.maxStackSize = 16;
  })

})