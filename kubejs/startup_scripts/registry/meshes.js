StartupEvents.registry('item', event => {
  const meshTypes = [
    { id: 'cloth', name: Text.translate('item.ftb.cloth_mesh') },
    { id: 'iron', name: Text.translate('item.ftb.iron_mesh') },
    { id: 'gold', name: Text.translate('item.ftb.gold_mesh') },
    { id: 'diamond', name: Text.translate('item.ftb.diamond_mesh') },
    { id: 'blazing', name: Text.translate('item.ftb.blazing_mesh') }
  ];

  for (const mesh of meshTypes) {
    event.create(`ftb:${mesh.id}_mesh`, 'createsifter:mesh')
      .displayName(mesh.name)
      .parentModel('createsifter:block/meshes/mesh')
      .texture('mesh', `ftb:item/${mesh.id}_mesh`)
      .maxDamage(1000);
  }
});
