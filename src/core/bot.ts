import { Bot } from "grammy";
import { autoRetry } from "https://esm.sh/@grammyjs/auto-retry@1.1.1";
import { error } from "../middleware/mod.ts";
import Commands from "../handlers/mod.ts";
import env from "../../env.ts";

const bot = new Bot(env.BOT_TOKEN);

bot.use(Commands);
bot.catch(error);
await bot.api.setMyCommands([
  { command: "start", description: "Start the bot" },
  { command: "run", description: "To run code" },
  { command: "langs", description: "To get the list of supported languages" },
]);
bot.api.config.use(autoRetry());

export default bot;