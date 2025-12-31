const chunkBlacklist = [
	"endermanoverhaul:badlands_enderman",
	"endermanoverhaul:cave_enderman",
	"endermanoverhaul:coral_enderman",
	"endermanoverhaul:crimson_forest_enderman",
	"endermanoverhaul:dark_oak_enderman",
	"endermanoverhaul:desert_enderman",
	"endermanoverhaul:end_enderman",
	"endermanoverhaul:end_islands_enderman",
	"endermanoverhaul:flower_fields_enderman",
	"endermanoverhaul:ice_spikes_enderman",
	"endermanoverhaul:mushroom_fields_enderman",
	"endermanoverhaul:nether_wastes_enderman",
	"endermanoverhaul:savanna_enderman",
	"endermanoverhaul:snowy_enderman",
	"endermanoverhaul:swamp_enderman",
	"endermanoverhaul:soulsand_valley_enderman",
	"endermanoverhaul:warped_forest_enderman",
	"endermanoverhaul:windswept_hills_enderman",
	"ae2:tiny_tnt_primed"
];

const magicMobs = [
	"ars_nouveau:wilden_boss",
	"minecraft:evoker",
	"minecraft:witch",
	"irons_spellbooks:catacombs_zombie",
	"irons_spellbooks:apothecarist",
	"irons_spellbooks:archevoker",
	"irons_spellbooks:citadel_keeper",
	"irons_spellbooks:cryomancer",
	"irons_spellbooks:cultist",
	"irons_spellbooks:dead_king",
	"irons_spellbooks:necromancer",
	"irons_spellbooks:priest",
	"irons_spellbooks:pyromancer"
];

ServerEvents.tags("entity_type", (event) => {
	chunkBlacklist.forEach((chunk) => {
		event.get("ftbchunks:entity_mob_griefing_blacklist").add(chunk);
	});
	event.add("minecraft:breeze", ["minecraft:breeze"]);
	event.add("justdirethings:paradox_deny", /productivebees:/);
	event.add("industrialforegoing:mob_duplicator_blacklist", /productivebees:/);
	magicMobs.forEach((mobs) => {
		event.get("ftb:magicmobs").add(mobs);
	});
	event.add("ftb:magicmobs", "#ars_nouveau:magic_find");
	event.add("c:capturing_not_supported", ["minecraft:allay"])

	//Adding Productive Bees to Apoth's Spawner Blacklist
	event.add("apothic_spawners:blacklisted_from_spawners", /productivebees:/);
	event.add("apothic_spawners:blacklisted_from_spawners", "minecraft:wither");

	//Adding Robbit to the Mob Imprisonment Tool Blacklist.
	event.add("industrialforegoing:mob_imprisonment_tool_blacklist", "mekanism:robit");

});
