// priority: 100002

/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {string} inputItemTag - item tag (e.g., "c:crushed_ores/copper")
 * @param {string | [string, number]} fluidResult - fluid ID or [fluid ID, amount] defaults to 90
 * @param {string} id - recipe ID
 */
function addRecipeProductiveMetalworksItemMeltingRecipe(
	event,
	inputItemTag,
	fluidResult,
	id
) {
	checkRecipeID(id);
	let fluidID;
	let fluidAmount;

	if (typeof fluidResult === "string") {
		fluidID = fluidResult;
		fluidAmount = 90;
	} else {
		fluidID = fluidResult[0];
		fluidAmount = fluidResult[1];
	}

	event
		.custom({
			type: "productivemetalworks:item_melting",
			ingredient: {
				tag: inputItemTag
			},
			minimum_temperature: 1000,
			maximum_temperature: 0,
			result: [
				{
					id: fluidID,
					amount: fluidAmount
				}
			]
		})
		.id(id);
}
