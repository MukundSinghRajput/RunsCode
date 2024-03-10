import { Composer } from "grammy";
import axiod from "https://deno.land/x/axiod@0.26.2/mod.ts";
import { Language } from "../types/lang.ts";

const composer = new Composer();

composer.command("langs", async (ctx) => {
  const res = await axiod.get("https://emkc.org/api/v2/piston/runtimes");
  const langs = res.data.map((langs: Language) => langs.language).join("\n");
  await ctx.reply(`Supported languages: \n${langs}`);
});

export default composer;