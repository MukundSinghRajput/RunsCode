import { Composer } from "grammy";
import run from "../func/run.ts";

const composer = new Composer();

composer.command("run", async (ctx) => {
  if (ctx.match) {
      const text = ctx.update.message?.text;
      const code_text = await text?.split(" ");
      const language = code_text[1];
      const code = code_text?.slice(2).join(" ");
      const result = await run(code as string, language);
      await ctx.reply(result, {parse_mode: "HTML"});
      // await ctx.api.sendMessage(ctx.update.message?.chat.id as number, result, {
      //   parse_mode: "HTML",
      // });
    } else {
      await ctx.reply("Next time define the language you want to use and also write the code further else your name will be on my deathnote buddy")
    }
    });

export default composer;