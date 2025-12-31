/*
* FTB Event System - Trades Template
* This template defines a set of trades for a custom event system.
* It includes a list of trades, each with a weight and an entry object that specifies the trade details.
* The trades can be used to create custom interactions in the game, such as trading items for actions or other items.
* the `value` property is used to determine the priority of the trade group.
* The trades can include items to buy, items to sell, actions to perform, and messages to display.
*/
const trade_template = {

  value: -1,

  /**
 * An array of trade definitions for a custom event system.
 * Each trade object contains a `weight` (used for selection probability) and an `entry` object.
 * The `entry` object defines the trade details:
 * - `buy` {string}: The item required to initiate the trade.
 * - `sell` {string} [optional]: The item(s) given in exchange.
 * - `action` {string} [optional]: A command or action to execute upon trade.
 * - `spawn_message` {string} [optional]: Message shown when the trade is available.
 * - `success_message` {string} [optional]: Message shown upon successful trade.
 * - `name` {string} [optional]: A display name for the trade.
 * Note: when using buy and sell, the event autogenerates name, spawn_message and success_message
 * these can be overridden by providing them in the entry object.
 *
 * when using action, spawn_message and success_message are advised to be provided.
 *
 * @type {Array<{
 *   weight: number,
 *   entry: {
 *     buy: string,
 *     sell?: string,
 *     action?: string,
 *     spawn_message?: string,
 *     success_message?: string,
 *     name?: string
 *   }
 * }>}
 */
  trades: [
    {
      weight: 1,
      entry: {
        buy: " minecraft:tnt",
        sell: "ars_nouveau:bombegranate_pod",
      },
    },
    {
      weight: 1,
      entry: {
        buy: "minecraft:lapis_lazuli",
        action: "weather thunder",
        spawn_message: "Trade me a lapis for a thunderstorm!",
        success_message: "A thunderstorm has been summoned!",
        name: "Thunderstorm Trade",
      },
    },
    {
      weight: 1,
      entry: {
        buy: "minecraft:sunflower",
        action: "weather clear",
        spawn_message: "Trade me a sunflower for a clear blue sky!",
        success_message: "I wish you a sunny day!",
        name: "Sunny Trade",
      },
    },
  ],
};

