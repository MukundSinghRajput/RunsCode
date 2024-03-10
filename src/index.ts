import env from "../env.ts";
import bot from "./core/bot.ts";
import { run } from "runner";
import { webhookCallback } from "grammy";

switch (env.MODE) {
  case "worker":
    await bot.api.deleteWebhook(); // if any was used it past
    run(bot);
    console.log("Bot Started");
    break;
  // deno-lint-ignore no-case-declarations
  case "web":
    const handleUpdate = webhookCallback(bot, "std/http");
    Deno.serve(async (req) => {
      if (req.method == "POST") {
        const url = new URL(req.url);
        if (url.pathname.slice(1) == bot.token) {
          try {
            return await handleUpdate(req);
          } catch (err) {
            console.error(err);
          }
        }
      }
      return new Response();
    });
    console.log("Bot started");
    break;
  default:
    console.log(
      "The MODE can be only web or worker choose anyone you choosed something different or didn't choose anything",
    );
    break;
}