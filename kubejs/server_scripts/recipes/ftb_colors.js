// priority: 958
// TO-DO ======
//
// 1 - Maybe Figure a way to make Supplementaries's Buntings Work Again.
// 2 - Adjust the Cleaning Recipes to maybe use Tags, decreasing the JEI Pollution.
//

/* Disabled pending rewrite

const isMekanismLoaded = Platform.isLoaded("mekanism");
const isConnectedGlassLoaded = Platform.isLoaded("connectedglass");
const isAE2Loaded = Platform.isLoaded("ae2");
const isFarmersDelightLoaded = Platform.isLoaded("farmersdelight");
const isBibliocraftLoaded = Platform.isLoaded("bibliocraft");
const isCookingForBlockheadsLoaded = Platform.isLoaded("cookingforblockheads");
const isSupplementariesLoaded = Platform.isLoaded("supplementaries");
const isActuallyAdditionsLoaded = Platform.isLoaded("actuallyadditions");
const isImmersiveEngineeringLoaded = Platform.isLoaded("immersiveengineering");
const isPneumaticCraftLoaded = Platform.isLoaded("pneumaticcraft");
const isUtilitarianLoaded = Platform.isLoaded("utilitarian");
const isProductiveMetalworksLoaded = Platform.isLoaded("productivemetalworks");
const isIntegratedDynamicsLoaded = Platform.isLoaded("integrateddynamics");
const isMoreRedLoaded = Platform.isLoaded("morered");
const isElevatorModLoaded = Platform.isLoaded("elevatorid");
const isGlassentialLoaded = Platform.isLoaded("glassential");
const isPickleTweaksLoaded = Platform.isLoaded("pickletweaks");
const isOccultismLoaded = Platform.isLoaded("occultism");
const isCreateLoaded = Platform.isLoaded("create");
const isBumblezoneLoaded = Platform.isLoaded("the_bumblezone");
const isIndustrialForegoingLoaded = Platform.isLoaded("industrialforegoing");
const isEternalStarlightLoaded = Platform.isLoaded("eternal_starlight");
const isComfortsLoaded = Platform.isLoaded("comforts");
const isChalksLoaded = Platform.isLoaded("chalk");
let isEnderIOLoaded = Platform.isLoaded("enderio");
const isForbiddenArcanusLoaded = Platform.isLoaded("forbidden_arcanus");
const isModernIndustrializationLoaded = Platform.isLoaded(
	"modern_industrialization"
);
const isProductiveBeesLoaded = Platform.isLoaded("productivebees");
const isRefinedStorageLoaded = Platform.isLoaded("refinedstorage");

let ftb_colors = [
	"white",
	"light_gray",
	"gray",
	"black",
	"lime",
	"yellow",
	"orange",
	"brown",
	"red",
	"pink",
	"magenta",
	"purple",
	"blue",
	"light_blue",
	"cyan",
	"green"
];

let input_name = "";
let output_name = "";
let dye = "";
let water_bottle = `minecraft:potion[potion_contents={potion:"minecraft:water"}]`;
let redyeable_vanilla_blocks = [
	"terracotta",
	"concrete",
	"concrete_powder",
	"stained_glass",
	"stained_glass_pane",
	"candle"
];

ServerEvents.tags("item", function (event) {
	let generateItems = function (prefix, suffix, includeBase) {
		var items = ftb_colors.map(function (c) {
			return prefix + c + (suffix || "");
		});
		if (includeBase) {
			items.unshift(prefix.replace(/_$/, "") + (suffix || ""));
		}
		return items;
	};

	// === Vanilla Tags ===
	event.add("minecraft:concrete", generateItems("minecraft:", "_concrete"));
	event.add(
		"minecraft:concrete_powder",
		generateItems("minecraft:", "_concrete_powder")
	);
	event.add(
		"minecraft:stained_glass",
		["minecraft:glass"].concat(generateItems("minecraft:", "_stained_glass"))
	);
	event.add(
		"minecraft:stained_glass_pane",
		["minecraft:glass_pane"].concat(
			generateItems("minecraft:", "_stained_glass_pane")
		)
	);
	event.add("minecraft:candle", generateItems("minecraft:", "_candle", true));

	// === Conditional Mod Tags ===
	var modTags = [
		{
			loaded: isUtilitarianLoaded,
			tag: "c:utilitarian_trading_carpet",
			prefix: "utilitarian:",
			suffix: "_soliciting_carpet"
		},
		{
			loaded: isUtilitarianLoaded,
			tag: "c:utilitarian_trapped_trading_carpet",
			prefix: "utilitarian:",
			suffix: "_trapped_soliciting_carpet"
		},
		{
			loaded: isCookingForBlockheadsLoaded,
			tag: "cookingforblockheads:kitchen_floors",
			prefix: "cookingforblockheads:",
			suffix: "_kitchen_floor",
			includeBase: true
		},
		{
			loaded: isIndustrialForegoingLoaded,
			tag: "industrialforegoing:laser_lens",
			prefix: "industrialforegoing:",
			suffix: "_laser_lens"
		},
		{
			loaded: isForbiddenArcanusLoaded,
			tag: "forbidden_arcanus:quantum_catchers",
			prefix: "forbidden_arcanus:",
			suffix: "_quantum_catcher",
			includeBase: true
		},
		{
			loaded: isProductiveBeesLoaded,
			tag: "productivebees:petrified_honeys",
			prefix: "productivebees:",
			suffix: "_petrified_honey",
			includeBase: true
		},
		{
			loaded: isGlassentialLoaded,
			tag: "glassential:glass_doors",
			prefix: "glassential:",
			suffix: "_glass_door",
			includeBase: true
		},
		{
			loaded: isGlassentialLoaded,
			tag: "glassential:glass_trapdoors",
			prefix: "glassential:",
			suffix: "_glass_trapdoor",
			includeBase: true
		},
		{
			loaded: isAE2Loaded,
			tag: "ae2:matter_balls",
			items: ["ae2:matter_ball"].concat(generateItems("ae2:", "_paint_ball"))
		}
	];

	for (var i = 0; i < modTags.length; i++) {
		var tagDef = modTags[i];
		if (tagDef.loaded) {
			var items =
				tagDef.items ||
				generateItems(tagDef.prefix, tagDef.suffix, tagDef.includeBase);
			event.add(tagDef.tag, items);
		}
	}

	// === Immersive Engineering ===
	if (isImmersiveEngineeringLoaded) {
		var chuteBase = [
			"immersiveengineering:chute_copper",
			"immersiveengineering:chute_aluminum",
			"immersiveengineering:chute_steel",
			"immersiveengineering:chute_iron"
		];
		event.add(
			"c:chutes",
			chuteBase.concat(generateItems("immersiveengineering:chute_colored_"))
		);
		event.add(
			"c:colored_chutes",
			generateItems("immersiveengineering:chute_colored_")
		);
		event.add(
			"c:colored_sheetmetals",
			generateItems("immersiveengineering:sheetmetal_colored_")
		);
		event.add(
			"c:colored_sheetmetal_slabs",
			generateItems("immersiveengineering:slab_sheetmetal_colored_")
		);
	}

	// === Connected Glass ===
	if (isConnectedGlassLoaded) {
		var styles = ["clear", "borderless", "scratched"];
		for (var j = 0; j < styles.length; j++) {
			var style = styles[j];
			event.add(
				"connectedglass:colored_" + style + "_glass",
				generateItems("connectedglass:" + style + "_glass_")
			);
			event.add(
				"connectedglass:colored_" + style + "_glass_panes",
				generateItems("connectedglass:" + style + "_glass_", "_pane")
			);
		}
	}
});

let soap = "minecraft:wet_sponge";
if (isSupplementariesLoaded) {
	soap = "supplementaries:soap";
}

ServerEvents.recipes((event) => {
	//Also Adding More ways to make a Sponge Wet.
	event
		.shapeless("minecraft:wet_sponge", ["minecraft:sponge", water_bottle])
		.replaceIngredient(water_bottle, "minecraft:glass_bottle")
		.id(`ftb_colors:sponge_filling`);

	event
		.shapeless("8x minecraft:wet_sponge", [
			"minecraft:sponge",
			"minecraft:sponge",
			"minecraft:sponge",
			"minecraft:sponge",
			"minecraft:sponge",
			"minecraft:sponge",
			"minecraft:sponge",
			"minecraft:sponge",
			"#c:buckets/water"
		])
		.id(`ftb_colors:sponge_filling_1`);
});

ServerEvents.recipes((event) => {
	// Universal Cleaning Function
	function shapeless_cleaning(input, output, modid) {
		input_name = input.split(":")[1];
		if (!isSupplementariesLoaded) {
			event
				.shapeless(output, [input, soap])
				.replaceIngredient(soap, "minecraft:sponge")
				.id(`ftb:cleaning/${modid}/${input_name}`);
		} else {
			event
				.shapeless(output, [input, soap])
				.id(`ftb:cleaning/${modid}/${input_name}`);
		}
	}

	// Universal Dyeing Function
	function shapeless_dyeing(input, output, dye, modid) {
		input_name = input.split(":")[1];
		output_name = output.split(":")[1];
		event
			.shapeless(Item.of(output, 1), [dye, input])
			.id(`ftb:shapeless/dyeing/${modid}/${input_name}/${output_name}`);
	}

	// Universal 8-Dyeing Function
	function shaped_circular_dyeing(input, output, dye, modid) {
		input_name = input.split(":")[1];
		output_name = output.split(":")[1];
		event
			.shaped(Item.of(output, 8), ["III", "IDI", "III"], {
				I: input,
				D: dye
			})
			.id(`ftb:shaped/dyeing/${modid}/${input_name}/${output_name}`);
	}

	function handleUtilitarianCompat(event) {
		ftb_colors.forEach((color) => {
			// Remove overlapping vanilla recipes
			["terracotta", "candle", "stained_glass"].forEach((suffix) => {
				event.remove({ id: `minecraft:${color}_${suffix}` });
			});
			event.remove({
				id: `minecraft:${color}_stained_glass_pane_from_glass_pane`
			});

			if (isUtilitarianLoaded) {
				// Replace candle input to fix tag conflicts
				event.replaceInput(
					{ id: `utilitarian:utility/redying/${color}_candle` },
					"#minecraft:candles",
					"#minecraft:candle"
				);
			} else {
				const dye = `minecraft:${color}_dye`;
				redyeable_vanilla_blocks.forEach((block_type) => {
					const target = `minecraft:${color}_${block_type}`;
					const inputTag = `#minecraft:${block_type}`;
					shapeless_dyeing(inputTag, target, dye, "minecraft");
					shaped_circular_dyeing(inputTag, target, dye, "minecraft");
				});
			}
		});
	}

	function handleConnectedGlassCompat(event) {
		if (!isConnectedGlassLoaded) return;
		const glassTypes = ["scratched", "clear", "borderless"];

		glassTypes.forEach((type) => {
			ftb_colors.forEach((color) => {
				event.remove({ id: `connectedglass:${type}_glass_${color}2` });
				event.remove({ id: `connectedglass:${type}_glass_${color}_pane2` });

				if (isMekanismLoaded) {
					addRecipeMekanismPainting(
						event,
						`connectedglass:${type}_glass`,
						`connectedglass:${type}_glass_${color}`,
						32,
						color,
						"connectedglass"
					);
					addRecipeMekanismPainting(
						event,
						`connectedglass:${type}_glass_pane`,
						`connectedglass:${type}_glass_${color}_pane`,
						32,
						color,
						"connectedglass"
					);
				}
			});

			shapeless_cleaning(
				`#connectedglass:colored_${type}_glass_panes`,
				`connectedglass:${type}_glass_pane`,
				"connectedglass"
			);

			if (!isSupplementariesLoaded) {
				shapeless_cleaning(
					`#connectedglass:colored_${type}_glass`,
					`connectedglass:${type}_glass`,
					"connectedglass"
				);
				shapeless_cleaning(
					`#connectedglass:colored_${type}_glass_panes`,
					`connectedglass:${type}_glass_pane`,
					"connectedglass"
				);
			}
		});
	}

	function handleAE2Compat(event) {
		if (!isAE2Loaded) return;

		ftb_colors.forEach((color) => {
			const dye = `minecraft:${color}_dye`;
			const cables = [
				["fluix_glass_cable", `${color}_glass_cable`],
				["fluix_covered_cable", `${color}_covered_cable`],
				["fluix_covered_dense_cable", `${color}_covered_dense_cable`],
				["fluix_smart_cable", `${color}_smart_cable`],
				["fluix_smart_dense_cable", `${color}_smart_dense_cable`]
			];

			cables.forEach(([base, colored]) => {
				if (isMekanismLoaded) {
					addRecipeMekanismPainting(
						event,
						`ae2:${base}`,
						`ae2:${colored}`,
						32,
						color,
						"ae2"
					);
				}
			});

			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					"#ae2:matter_balls",
					`ae2:${color}_paint_ball`,
					32,
					color,
					"ae2"
				);
				addRecipeMekanismPainting(
					event,
					"#ae2:lumen_paint_balls",
					`ae2:${color}_lumen_paint_ball`,
					32,
					color,
					"ae2"
				);
			}
		});

		shapeless_cleaning(
			"#ae2:lumen_paint_balls",
			"ae2:white_lumen_paint_ball",
			"ae2"
		);
		shapeless_cleaning("#ae2:matter_balls", "ae2:matter_ball", "ae2");
	}

	function handleFarmersDelightCompat(event) {
		if (!isFarmersDelightLoaded) return;

		const canvas = "#farmersdelight:canvas_signs";
		const hanging = "#farmersdelight:hanging_canvas_signs";

		ftb_colors.forEach((color) => {
			const sign = `farmersdelight:${color}_canvas_sign`;
			const hangingSign = `farmersdelight:${color}_hanging_canvas_sign`;

			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					canvas,
					sign,
					32,
					color,
					"farmersdelight"
				);
				addRecipeMekanismPainting(
					event,
					hanging,
					hangingSign,
					32,
					color,
					"farmersdelight"
				);
			}
		});

		if (!isSupplementariesLoaded) {
			shapeless_cleaning(
				canvas,
				"farmersdelight:canvas_sign",
				"farmersdelight"
			);
			shapeless_cleaning(
				hanging,
				"farmersdelight:hanging_canvas_sign",
				"farmersdelight"
			);
		}
	}

	function handleBibliocraftCompat(event) {
		if (!isBibliocraftLoaded) return;

		const woods = [
			"oak",
			"spruce",
			"birch",
			"jungle",
			"acacia",
			"dark_oak",
			"crimson",
			"warped",
			"mangrove",
			"bamboo",
			"cherry"
		];
		const blocks = [
			"display_case",
			"seat",
			"small_seat_back",
			"raised_seat_back",
			"flat_seat_back",
			"tall_seat_back",
			"fancy_seat_back",
			"fancy_gold_lamp",
			"fancy_iron_lamp",
			"fancy_gold_lantern",
			"fancy_iron_lantern"
		];

		ftb_colors.forEach((color) => {
			if (color === "white") return;

			blocks.forEach((type) => {
				if (type.includes("lamp") || type.includes("lantern")) {
					const base = `bibliocraft:white_${type}`;
					const dyed = `bibliocraft:${color}_${type}`;
					if (isMekanismLoaded)
						addRecipeMekanismPainting(
							event,
							base,
							dyed,
							32,
							color,
							"bibliocraft"
						);
					if (!isSupplementariesLoaded)
						shapeless_cleaning(dyed, base, "bibliocraft");
				} else {
					woods.forEach((wood) => {
						const base = `bibliocraft:white_${wood}_${type}`;
						const dyed = `bibliocraft:${color}_${wood}_${type}`;
						if (isMekanismLoaded)
							addRecipeMekanismPainting(
								event,
								base,
								dyed,
								32,
								color,
								"bibliocraft"
							);
						if (!isSupplementariesLoaded)
							shapeless_cleaning(dyed, base, "bibliocraft");
					});
				}
			});
		});
	}

	function handleCookingForBlockheadsCompat(event) {
		if (!isCookingForBlockheadsLoaded) return;

		const types = [
			["oven", "cookingforblockheads:white_oven"],
			["fridge", "cookingforblockheads:white_fridge"],
			["connector", "cookingforblockheads:connector"],
			["cooking_table", "cookingforblockheads:cooking_table"],
			["counter", "cookingforblockheads:counter"],
			["cabinet", "cookingforblockheads:cabinet"],
			["sink", "cookingforblockheads:sink"],
			["kitchen_floor", "cookingforblockheads:white_kitchen_floor"]
		];

		types.forEach(([id, base]) => {
			const tag = `#cookingforblockheads:${id}s`;
			ftb_colors.forEach((color) => {
				const dyed = `cookingforblockheads:${color}_${id}`;
				if (isMekanismLoaded)
					addRecipeMekanismPainting(
						event,
						tag,
						dyed,
						32,
						color,
						"cookingforblockheads"
					);
			});
			if (!isSupplementariesLoaded)
				shapeless_cleaning(tag, base, "cookingforblockheads");
		});
	}

	function handleSupplementariesCompat(event) {
		if (!isSupplementariesLoaded) return;

		const types = ["presents", "candle_holders", "awnings"];

		ftb_colors.forEach((color) => {
			const dye = `minecraft:${color}_dye`;

			types.forEach((type) => {
				const baseTag = `#supplementaries:${type}`;
				const baseId = type.slice(0, -1);
				const output = `supplementaries:${baseId}_${color}`;

				event.remove({ id: `supplementaries:${type}/${baseId}_${color}_dye` });
				shapeless_dyeing(baseTag, output, dye, "supplementaries");
				shaped_circular_dyeing(baseTag, output, dye, "supplementaries");

				if (isMekanismLoaded) {
					if (color !== "white") {
						addRecipeMekanismPainting(
							event,
							"supplementaries:flag_white",
							`supplementaries:flag_${color}`,
							32,
							color,
							`supplementaries/${type}`
						);
					} else {
						addRecipeMekanismPainting(
							event,
							baseTag,
							output,
							32,
							color,
							`supplementaries/${type}`
						);
					}
				}
			});
		});
	}

	function handleActuallyAdditionsCompat(event) {
		if (!isActuallyAdditionsLoaded) return;

		ftb_colors.forEach((color) => {
			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					"#actuallyadditions:drills",
					`actuallyadditions:drill_${color}`,
					32,
					color,
					"actuallyadditions"
				);
				addRecipeMekanismPainting(
					event,
					"#actuallyadditions:lamps",
					`actuallyadditions:lamp_${color}`,
					32,
					color,
					"actuallyadditions"
				);
			}
		});

		shapeless_cleaning(
			"#actuallyadditions:drills",
			"actuallyadditions:drill_light_blue",
			"actuallyadditions"
		);

		if (!isSupplementariesLoaded) {
			shapeless_cleaning(
				"#actuallyadditions:lamps",
				"actuallyadditions:lamp_white",
				"actuallyadditions"
			);
		}
	}

	function handleImmersiveEngineeringCompat(event) {
		if (!isImmersiveEngineeringLoaded) return;

		ftb_colors.forEach((color) => {
			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					"#c:sheetmetals",
					`immersiveengineering:sheetmetal_colored_${color}`,
					32,
					color,
					"immersiveengineering"
				);
				addRecipeMekanismPainting(
					event,
					"#c:sheetmetal_slabs",
					`immersiveengineering:slab_sheetmetal_colored_${color}`,
					32,
					color,
					"immersiveengineering"
				);
				addRecipeMekanismPainting(
					event,
					"#c:chutes",
					`immersiveengineering:chute_colored_${color}`,
					32,
					color,
					"immersiveengineering"
				);
			}
		});

		if (!isSupplementariesLoaded) {
			shapeless_cleaning(
				"#c:colored_sheetmetals",
				"immersiveengineering:sheetmetal_colored_white",
				"immersiveengineering"
			);
			shapeless_cleaning(
				"#c:colored_sheetmetal_slabs",
				"immersiveengineering:slab_sheetmetal_colored_white",
				"immersiveengineering"
			);
			shapeless_cleaning(
				"#c:colored_chutes",
				"immersiveengineering:chute_colored_white",
				"immersiveengineering"
			);
		}
	}

	function handlePneumaticCraftCompat(event) {
		if (!isPneumaticCraftLoaded) return;

		ftb_colors.forEach((color) => {
			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					"#pneumaticcraft:plastic_bricks",
					`pneumaticcraft:plastic_brick_${color}`,
					32,
					color,
					"pneumaticcraft"
				);
				addRecipeMekanismPainting(
					event,
					"#pneumaticcraft:smooth_plastic_bricks",
					`pneumaticcraft:smooth_plastic_brick_${color}`,
					32,
					color,
					"pneumaticcraft"
				);
				addRecipeMekanismPainting(
					event,
					"#pneumaticcraft:wall_lamps",
					`pneumaticcraft:wall_lamp_${color}`,
					32,
					color,
					"pneumaticcraft"
				);
				addRecipeMekanismPainting(
					event,
					"#pneumaticcraft:wall_lamps_inverted",
					`pneumaticcraft:wall_lamp_inverted_${color}`,
					32,
					color,
					"pneumaticcraft"
				);
			}
		});

		if (!isSupplementariesLoaded) {
			shapeless_cleaning(
				"#pneumaticcraft:plastic_bricks",
				"pneumaticcraft:plastic_brick_white",
				"pneumaticcraft"
			);
			shapeless_cleaning(
				"#pneumaticcraft:smooth_plastic_bricks",
				"pneumaticcraft:smooth_plastic_brick_white",
				"pneumaticcraft"
			);
			shapeless_cleaning(
				"#pneumaticcraft:wall_lamps",
				"pneumaticcraft:wall_lamp_white",
				"pneumaticcraft"
			);
			shapeless_cleaning(
				"#pneumaticcraft:wall_lamps_inverted",
				"pneumaticcraft:wall_lamp_inverted_white",
				"pneumaticcraft"
			);
		}
	}

	function handleUtilitarianCompatCarpets(event) {
		if (!isUtilitarianLoaded) return;

		const soliciting = "#c:utilitarian_trading_carpet";
		const trapped = "#c:utilitarian_trapped_trading_carpet";

		ftb_colors.forEach((color) => {
			const dye = `minecraft:${color}_dye`;

			event
				.shapeless(`utilitarian:${color}_soliciting_carpet`, [dye, soliciting])
				.id(`ftb:shapeless/utilitarian/painting/${color}_soliciting_carpet`);

			event
				.shapeless(`utilitarian:${color}_trapped_soliciting_carpet`, [
					dye,
					trapped
				])
				.id(
					`ftb:shapeless/utilitarian/painting/${color}_trapped_soliciting_carpet`
				);

			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					soliciting,
					`utilitarian:${color}_soliciting_carpet`,
					32,
					color,
					"utilitarian"
				);
				addRecipeMekanismPainting(
					event,
					trapped,
					`utilitarian:${color}_trapped_soliciting_carpet`,
					32,
					color,
					"utilitarian"
				);
			}
		});

		if (!isSupplementariesLoaded) {
			shapeless_cleaning(
				soliciting,
				"utilitarian:white_soliciting_carpet",
				"utilitarian"
			);
			shapeless_cleaning(
				trapped,
				"utilitarian:white_trapped_soliciting_carpet",
				"utilitarian"
			);
		}
	}

	function handleProductiveMetalworksCompat(event) {
		if (!isProductiveMetalworksLoaded) return;

		const cleanTargets = [
			[
				"#productivemetalworks:foundry_controllers",
				"productivemetalworks:black_foundry_controller"
			],
			[
				"#productivemetalworks:foundry_drains",
				"productivemetalworks:black_foundry_drain"
			],
			[
				"#productivemetalworks:foundry_tanks",
				"productivemetalworks:black_foundry_tank"
			],
			[
				"#productivemetalworks:foundry_windows",
				"productivemetalworks:black_foundry_window"
			],
			[
				"#productivemetalworks:fire_bricks",
				"productivemetalworks:black_fire_bricks"
			]
		];

		cleanTargets.forEach(([tag, base]) => {
			shapeless_cleaning(tag, base, "productivemetalworks");
		});

		if (isMekanismLoaded) {
			ftb_colors.forEach((color) => {
				if (color === "black") return;
				const variants = [
					["foundry_controller", "foundry_controller"],
					["foundry_drain", "foundry_drain"],
					["foundry_tank", "foundry_tank"],
					["foundry_window", "foundry_window"],
					["fire_bricks", "fire_bricks"]
				];

				variants.forEach(([base, suffix]) => {
					addRecipeMekanismPainting(
						event,
						`productivemetalworks:black_${base}`,
						`productivemetalworks:${color}_${suffix}`,
						32,
						color,
						"productivemetalworks"
					);
				});
			});
		}
	}

	function handleIntegratedDynamicsCompat(event) {
		if (!isIntegratedDynamicsLoaded) return;

		shapeless_cleaning(
			"integrateddynamics:variable_transformer_input",
			"integrateddynamics:variable_transformer_output",
			"integrated_dynamics"
		);

		const baseInput = "integrateddynamics:variable_transformer_input";
		const baseOutput = "integrateddynamics:variable_transformer_output";
		const soapInput = isSupplementariesLoaded
			? "supplementaries:soap"
			: "minecraft:wet_sponge";

		const transformerRecipe = event.shapeless(`4x ${baseOutput}`, [
			soapInput,
			baseInput,
			baseInput,
			baseInput,
			baseInput
		]);

		if (!isSupplementariesLoaded) {
			transformerRecipe
				.replaceIngredient("minecraft:wet_sponge", "minecraft:sponge")
				.id("ftb:cleaning/integrated_dynamics/variable_transformer_input_2a");
		} else {
			transformerRecipe.id(
				"ftb:cleaning/integrated_dynamics/variable_transformer_input_2"
			);
		}

		event
			.shapeless(`1x ${baseInput}`, ["#c:slime_balls", baseOutput])
			.id("ftb:integrated_dynamics/input_variable_qol");

		event
			.shapeless(`4x ${baseInput}`, [
				"#c:slime_balls",
				baseOutput,
				baseOutput,
				baseOutput,
				baseOutput
			])
			.id("ftb_colors:integrated_dynamics/input_variable_qol_2");
	}

	function handleMoreRedCompat(event) {
		if (!isMoreRedLoaded) return;

		const whiteCable = "morered:white_network_cable";
		shapeless_cleaning(
			"#morered:colored_network_cables",
			whiteCable,
			"morered"
		);

		if (isMekanismLoaded) {
			ftb_colors.forEach((color) => {
				const paintedCable = `morered:${color}_network_cable`;
				addRecipeMekanismPainting(
					event,
					"#morered:colored_network_cables",
					paintedCable,
					32,
					color,
					"morered"
				);
			});
		}
	}

	function handleElevatorCompat(event) {
		if (!isElevatorModLoaded) return;

		const base = "#elevatorid:elevators";

		ftb_colors.forEach((color) => {
			const painted = `elevatorid:elevator_${color}`;
			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					base,
					painted,
					32,
					color,
					"elevatorid"
				);
			}
		});

		if (!isSupplementariesLoaded) {
			shapeless_cleaning(base, "elevatorid:elevator_white", "elevatorid");
		}
	}

	function handleGlassentialCompat(event) {
		if (!isGlassentialLoaded) return;

		const doorTag = "#glassential:glass_doors";
		const trapdoorTag = "#glassential:glass_trapdoors";

		ftb_colors.forEach((color) => {
			const dye = `minecraft:${color}_dye`;
			const door = `glassential:${color}_glass_door`;
			const trapdoor = `glassential:${color}_glass_trapdoor`;

			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					doorTag,
					door,
					32,
					color,
					"glassential"
				);
				addRecipeMekanismPainting(
					event,
					trapdoorTag,
					trapdoor,
					32,
					color,
					"glassential"
				);
			}

			shapeless_dyeing(doorTag, door, dye, "glassential");
			shaped_circular_dyeing(doorTag, door, dye, "glassential");
			shapeless_dyeing(trapdoorTag, trapdoor, dye, "glassential");
			shaped_circular_dyeing(trapdoorTag, trapdoor, dye, "glassential");
		});

		if (!isSupplementariesLoaded) {
			shapeless_cleaning(doorTag, "glassential:glass_door", "glassential");
			shapeless_cleaning(
				trapdoorTag,
				"glassential:glass_trapdoor",
				"glassential"
			);
		}
	}

	function handlePickleTweaksCompat(event) {
		if (!isPickleTweaksLoaded) return;

		const cobbleTag = "#c:cobblestones";
		const coloredTag = "#pickletweaks:colored_cobblestone";

		ftb_colors.forEach((color) => {
			const dye = `minecraft:${color}_dye`;
			const painted = `pickletweaks:${color}_cobblestone`;

			shapeless_dyeing(cobbleTag, painted, dye, "pickletweaks");

			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					cobbleTag,
					painted,
					32,
					color,
					"pickletweaks"
				);
			}
		});

		if (!isSupplementariesLoaded) {
			shapeless_cleaning(coloredTag, "minecraft:cobblestone", "pickletweaks");
		}
	}

	function handleOccultismCompat(event) {
		if (!isOccultismLoaded) return;

		const candleTag = "#occultism:candles";

		ftb_colors.forEach((color) => {
			const dye = `minecraft:${color}_dye`;
			const painted = `occultism:large_candle_${color}`;

			event.remove({ id: `occultism:crafting/large_candle_${color}` });

			shapeless_dyeing(candleTag, painted, dye, "occultism");
			shaped_circular_dyeing(candleTag, painted, dye, "occultism");

			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					candleTag,
					painted,
					32,
					color,
					"occultism"
				);
			}
		});

		if (!isSupplementariesLoaded) {
			shapeless_cleaning(candleTag, "occultism:large_candle", "occultism");
		}
	}

	function handleBumblezoneCompat(event) {
		if (!isBumblezoneLoaded) return;

		const curtains = "#the_bumblezone:string_curtains";
		const candles = "#the_bumblezone:super_candles";

		ftb_colors.forEach((color) => {
			const curtain = `the_bumblezone:string_curtain_${color}`;
			const candle = `the_bumblezone:super_candle_${color}`;

			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					curtains,
					curtain,
					32,
					color,
					"the_bumblezone"
				);
				addRecipeMekanismPainting(
					event,
					candles,
					candle,
					32,
					color,
					"the_bumblezone"
				);
			}
		});

		shapeless_cleaning(
			candles,
			"the_bumblezone:super_candle",
			"the_bumblezone"
		);

		if (!isSupplementariesLoaded) {
			shapeless_cleaning(
				curtains,
				"the_bumblezone:string_curtain_white",
				"the_bumblezone"
			);
		}
	}

	function handleCreateCompat(event) {
		if (!isCreateLoaded) return;

		const types = [
			["valve_handles", "valve_handle"],
			["postboxes", "postbox"],
			["table_cloths", "table_cloth"],
			["toolboxes", "toolbox"],
			["seats", "seat"]
		];

		ftb_colors.forEach((color) => {
			const dye = `minecraft:${color}_dye`;

			types.forEach(([tag, base]) => {
				const input = `#create:${tag}`;
				const output = `create:${color}_${base}`;

				shaped_circular_dyeing(input, output, dye, "create");

				if (isMekanismLoaded) {
					addRecipeMekanismPainting(event, input, output, 32, color, "create");
				}
			});
		});

		if (!isSupplementariesLoaded) {
			shapeless_cleaning(
				"#create:valve_handles",
				"create:white_valve_handle",
				"create"
			);
			shapeless_cleaning("#create:postboxes", "create:white_postbox", "create");
			shapeless_cleaning(
				"#create:table_cloths",
				"create:white_table_cloth",
				"create"
			);
			shapeless_cleaning("#create:toolboxes", "create:white_toolbox", "create");
			shapeless_cleaning("#create:seats", "create:white_seat", "create");
		}
	}

	function handleIndustrialForegoingCompat(event) {
		if (!isIndustrialForegoingLoaded) return;

		const base = "#industrialforegoing:laser_lens";
		shapeless_cleaning(
			base,
			"industrialforegoing:white_laser_lens",
			"industrialforegoing"
		);

		if (isMekanismLoaded) {
			ftb_colors.forEach((color) => {
				const output = `industrialforegoing:${color}_laser_lens`;
				addRecipeMekanismPainting(
					event,
					base,
					output,
					32,
					color,
					"industrialforegoing"
				);
			});
		}
	}

	function handleEternalStarlightCompat(event) {
		if (!isEternalStarlightLoaded) return;

		const fur = "#eternal_starlight:yeti_fur";
		const carpet = "#eternal_starlight:yeti_fur_carpets";

		ftb_colors.forEach((color) => {
			const outFur = `eternal_starlight:${color}_yeti_fur`;
			const outCarpet = `eternal_starlight:${color}_yeti_fur_carpet`;

			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					fur,
					outFur,
					32,
					color,
					"eternal_starlight"
				);
				addRecipeMekanismPainting(
					event,
					carpet,
					outCarpet,
					32,
					color,
					"eternal_starlight"
				);
			}
		});

		if (!isSupplementariesLoaded) {
			shapeless_cleaning(
				fur,
				"eternal_starlight:white_yeti_fur",
				"eternal_starlight"
			);
			shapeless_cleaning(
				carpet,
				"eternal_starlight:white_yeti_fur_carpet",
				"eternal_starlight"
			);
		}
	}

	function handleComfortsCompat(event) {
		if (!isComfortsLoaded) return;

		const sleeping = "#comforts:sleeping_bags";
		const hammocks = "#comforts:hammocks";

		ftb_colors.forEach((color) => {
			const sleepingOut = `comforts:sleeping_bag_${color}`;
			const hammockOut = `comforts:hammock_${color}`;

			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					sleeping,
					sleepingOut,
					32,
					color,
					"comforts"
				);
				addRecipeMekanismPainting(
					event,
					hammocks,
					hammockOut,
					32,
					color,
					"comforts"
				);
			}
		});

		if (!isSupplementariesLoaded) {
			shapeless_cleaning(sleeping, "comforts:sleeping_bag_white", "comforts");
			shapeless_cleaning(hammocks, "comforts:hammock_white", "comforts");
		}
	}

	function handleChalksCompat(event) {
		if (!isChalksLoaded) return;

		const chalks = "#chalk:chalks";
		shapeless_cleaning(chalks, "chalk:white_chalk", "chalk");

		ftb_colors.forEach((color) => {
			const chalkOut = `chalk:${color}_chalk`;
			const dye = `minecraft:${color}_dye`;

			if (isMekanismLoaded) {
				addRecipeMekanismPainting(event, chalks, chalkOut, 32, color, "chalk");
			}

			shapeless_dyeing(chalks, chalkOut, dye, "chalk");
		});
	}

	function handleEnderIOCompat(event) {
		if (!isEnderIOLoaded) return;

		const glassTypes = [
			"clear_glass",
			"clear_glass_p",
			"clear_glass_np",
			"clear_glass_m",
			"clear_glass_nm",
			"clear_glass_a",
			"clear_glass_na",
			"clear_glass_d",
			"clear_glass_dp",
			"clear_glass_dnp",
			"clear_glass_dm",
			"clear_glass_dnm",
			"clear_glass_da",
			"clear_glass_dna",
			"clear_glass_e",
			"clear_glass_ep",
			"clear_glass_enp",
			"clear_glass_em",
			"clear_glass_enm",
			"clear_glass_ea",
			"clear_glass_ena"
		];

		glassTypes.forEach((type) => {
			const tag = `#enderio:${type}`;
			const base = `enderio:${type}`;

			ftb_colors.forEach((color) => {
				const dyed = `enderio:${type}_${color}`;
				const dye = `minecraft:${color}_dye`;

				if (isMekanismLoaded) {
					addRecipeMekanismPainting(event, tag, dyed, 32, color, "enderio");
				}

				shapeless_dyeing(tag, dyed, dye, "enderio");
			});

			if (!isSupplementariesLoaded) {
				shapeless_cleaning(tag, base, "enderio");
			}
		});
	}

	function handleForbiddenArcanusCompat(event) {
		if (!isForbiddenArcanusLoaded) return;

		const catcher = "#forbidden_arcanus:quantum_catchers";
		shapeless_cleaning(
			catcher,
			"forbidden_arcanus:quantum_catcher",
			"forbidden_arcanus"
		);

		ftb_colors.forEach((color) => {
			const out = `forbidden_arcanus:${color}_quantum_catcher`;
			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					catcher,
					out,
					32,
					color,
					"forbidden_arcanus"
				);
			}
		});
	}

	function handleModernIndustrializationCompat(event) {
		if (!isModernIndustrializationLoaded) return;

		["fluid_pipe", "item_pipe", "me_wire"].forEach((type) => {
			const tag = `#modern_industrialization:${type}s`;
			const base = `modern_industrialization:${type}`;
			shapeless_cleaning(tag, base, "modern_industrialization");

			ftb_colors.forEach((color) => {
				const out = `modern_industrialization:${color}_${type}`;
				if (isMekanismLoaded) {
					addRecipeMekanismPainting(
						event,
						tag,
						out,
						32,
						color,
						"modern_industrialization"
					);
				}
			});
		});
	}

	function handleProductiveBeesCompat(event) {
		if (!isProductiveBeesLoaded) return;

		const tag = "#productivebees:petrified_honeys";
		shapeless_cleaning(tag, "productivebees:petrified_honey", "productivebees");

		ftb_colors.forEach((color) => {
			const dyed = `productivebees:${color}_petrified_honey`;
			const dye = `minecraft:${color}_dye`;

			if (isMekanismLoaded) {
				addRecipeMekanismPainting(
					event,
					tag,
					dyed,
					32,
					color,
					"productivebees"
				);
			}

			shaped_circular_dyeing(tag, dyed, dye, color, "productivebees");
		});
	}

	function handleRefinedStorageCompat(event) {
		if (!isRefinedStorageLoaded) return;

		const tags = [
			//["controllers", "controller"],
			["cables", "cable"],
			["importers", "importer"],
			["exporters", "exporter"],
			["external_storages", "external_storage"],
			["constructors", "constructor"],
			["destructors", "destructor"],
			["wireless_transmitters", "wireless_transmitter"],
			["autocrafters", "autocrafter"],
			["autocrafter_managers", "autocrafter_manager"],
			["autocrafting_monitors", "autocrafting_monitor"],
			["grids", "grid"],
			["crafting_grids", "crafting_grid"],
			["pattern_grids", "pattern_grid"],
			["detectors", "detector"],
			["network_transmitters", "network_transmitter"],
			["network_receivers", "network_receiver"],
			["security_managers", "security_manager"],
			["relays", "relay"],
			["disk_interfaces", "disk_interface"]
		];

		ftb_colors.forEach((color) => {
			if (color === "light_blue") return;
			const dye = `minecraft:${color}_dye`;

			tags.forEach(([tag, base]) => {
				const tagName = `#refinedstorage:${tag}`;
				const painted = `refinedstorage:${color}_${base}`;

				if (isMekanismLoaded && !(base === "cable" && color === "gray")) {
					addRecipeMekanismPainting(
						event,
						tagName,
						`refinedstorage:${base}`,
						32,
						color,
						"refinedstorage"
					);
				}

				if (!(base === "controller" || base === "creative_controller")) {
					if (color !== "gray") {
						shaped_circular_dyeing(
							tagName,
							painted,
							dye,
							color,
							"refinedstorage"
						);
					}
				} else {
					shaped_circular_dyeing(
						tagName,
						painted,
						dye,
						color,
						"refinedstorage"
					);
				}
			});
		});

		if (!isSupplementariesLoaded) {
			tags.forEach(([tag, base]) => {
				shapeless_cleaning(
					`#refinedstorage:${tag}`,
					`refinedstorage:${base}`,
					"refinedstorage"
				);
			});
		}
	}

	function runAllCompat(event) {
		handleCreateCompat(event);
		handleRefinedStorageCompat(event);
		handleIndustrialForegoingCompat(event);
		handleEternalStarlightCompat(event);
		handleComfortsCompat(event);
		handleChalksCompat(event);
		handleEnderIOCompat(event);
		handleForbiddenArcanusCompat(event);
		handleModernIndustrializationCompat(event);
		handleProductiveBeesCompat(event);
		handleUtilitarianCompat(event);
		handleConnectedGlassCompat(event);
		handleAE2Compat(event);
		handleFarmersDelightCompat(event);
		handleBibliocraftCompat(event);
		handleCookingForBlockheadsCompat(event);
		handleSupplementariesCompat(event);
		handleActuallyAdditionsCompat(event);
		handleImmersiveEngineeringCompat(event);
		handlePneumaticCraftCompat(event);
		handleUtilitarianCompatCarpets(event);
		handleProductiveMetalworksCompat(event);
		handleIntegratedDynamicsCompat(event);
		handleMoreRedCompat(event);
		handleElevatorCompat(event);
		handleGlassentialCompat(event);
		handlePickleTweaksCompat(event);
		handleOccultismCompat(event);
		handleBumblezoneCompat(event);
	}

	runAllCompat(event);
});
*/