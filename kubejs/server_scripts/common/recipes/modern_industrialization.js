/**
 * Adds a Modern Industrialization macerator recipe with a tag or item input and multiple item outputs.
 *
 * @param {ServerEvents.Recipes} event - recipe event
 * @param {string} input - tag (e.g. "c:ingots/invar") or item ID (e.g. "minecraft:iron_ingot")
 * @param {Array<[string, number?]>} outputItems - array of [item ID, count] pairs
 * @param {string} id - the recipe ID
 */
function addRecipeModernIndustrializationMacerator(
	event,
	input,
	outputItems,
	id
) {
	checkRecipeID(id);

	const outputs = outputItems.map(([item, count]) => ({
		item: item,
		amount: count ?? 1
	}));

	const inputObject = {
		amount: 1
	};

	if (isTag(input)) {
		inputObject.tag = input;
	} else {
		inputObject.item = input;
	}

	event
		.custom({
			type: "modern_industrialization:macerator",
			duration: 200,
			eu: 2,
			item_inputs: [inputObject],
			item_outputs: outputs
		})
		.id(id);
}

/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {string} itemInputTag - input tag (e.g. "c:plates/cupronickel")
 * @param {Array<[string, number]>} outputItems - array of [itemID, count]
 * @param {string} id - recipe ID
 */
function addRecipeModernIndustrializationWireMill(
	event,
	itemInputTag,
	outputItems,
	id
) {
	checkRecipeID(id);
	event
		.custom({
			type: "modern_industrialization:wiremill",
			duration: 100,
			eu: 2,
			item_inputs: [
				{
					tag: itemInputTag,
					amount: 1
				}
			],
			item_outputs: outputItems.map(([itemID, amount]) => ({
				item: itemID,
				amount: amount
			}))
		})
		.id(id);
}

/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {Array<[string, number]>} itemInputs - array of [tag, amount]
 * @param {string} outputItem - output item ID
 * @param {string} id - recipe ID
 */
function addRecipeModernIndustrializationPacker(
	event,
	itemInputs,
	outputItem,
	id
) {
	checkRecipeID(id);

	const inputs = itemInputs.map(function ([tag, amount], index) {
		var input = {
			tag: tag,
			amount: amount
		};

		if (index === 1) {
			input.probability = 0.0;
		}

		return input;
	});

	event
		.custom({
			type: "modern_industrialization:packer",
			duration: 100,
			eu: 2,
			item_inputs: inputs,
			item_outputs: [
				{
					item: outputItem,
					amount: 1
				}
			]
		})
		.id(id);
}

/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {[string, number]} itemInput - [tag, amount]
 * @param {[string, number]} itemOutput - [itemID, amount]
 * @param {string} id - recipe ID
 */
function addRecipeModernIndustrializationUnpacker(
	event,
	itemInput,
	itemOutput,
	id
) {
	checkRecipeID(id);

	const [inputTag, inputAmount] = itemInput;
	const [outputItem, outputAmount] = itemOutput;

	event
		.custom({
			type: "modern_industrialization:unpacker",
			duration: 100,
			eu: 2,
			item_inputs: [
				{
					tag: inputTag,
					amount: inputAmount
				}
			],
			item_outputs: [
				{
					item: outputItem,
					amount: outputAmount
				}
			]
		})
		.id(id);
}

/**
 * Adds a compressor recipe for Modern Industrialization.
 *
 * @param {RecipesEventJS} event - The recipe event.
 * @param {[string, number]} input - Input as [item ID, amount].
 * @param {[string, number]} output - Output as [item ID, amount].
 * @param {string} id - The recipe ID.
 */
function addRecipeModernIndustrializationCompressor(event, input, output, id) {
	checkRecipeID(id);

	const [inputItem, inputAmount] = input;
	const [outputItem, outputAmount] = output;

	event
		.custom({
			type: "modern_industrialization:compressor",
			duration: 200,
			eu: 2,
			item_inputs: [
				{
					item: inputItem,
					amount: inputAmount
				}
			],
			item_outputs: [
				{
					item: outputItem,
					amount: outputAmount
				}
			]
		})
		.id(id);
}

/**
 * Adds an assembler recipe for Modern Industrialization.
 *
 * @param {RecipesEventJS} event - The recipe event.
 * @param {Array<[string, number]>} itemInputs - List of item inputs [item ID, amount].
 * @param {Array<[string, number]>} fluidInputs - List of fluid inputs [fluid ID, amount].
 * @param {[string, number]} output - Output as [item ID, amount].
 * @param {string} id - The recipe ID.
 */
function addRecipeModernIndustrializationAssembler(
	event,
	itemInputs,
	fluidInputs,
	output,
	id
) {
	checkRecipeID(id);

	var itemInputsFormatted = itemInputs.map(function (entry) {
		var item = entry[0];
		var amount = entry[1];
		return {
			item: item,
			amount: amount
		};
	});

	var fluidInputsFormatted = fluidInputs.map(function (entry) {
		var fluid = entry[0];
		var amount = entry[1];
		return {
			fluid: fluid,
			amount: amount
		};
	});

	event
		.custom({
			type: "modern_industrialization:assembler",
			duration: 200,
			eu: 8,
			item_inputs: itemInputsFormatted,
			fluid_inputs: fluidInputsFormatted,
			item_outputs: [
				{
					item: output[0],
					amount: output[1]
				}
			]
		})
		.id(id);
}

/**
 * Create a Modern Industrialization Forge Hammer recipe
 * @param {RecipesEventJS} event
 * @param {[string, number]} input - [itemTagOrID, count]
 * @param {[string, number]} output - [itemID, count]
 * @param {number} damage - damage
 * @param {string} id - recipe ID
 */
function addRecipeModernIndustrializationForgeHammer(
	event,
	input,
	output,
	damage,
	id
) {
	checkRecipeID(id);

	const ingredient = isTag(input[0]) ? { tag: input[0] } : { item: input[0] };

	const recipe = {
		type: "modern_industrialization:forge_hammer",
		ingredient: ingredient,
		result: {
			id: output[0],
			count: output[1]
		}
	};

	if (damage > 0) {
		recipe.damage = damage;
	}

	event.custom(recipe).id(id);
}
