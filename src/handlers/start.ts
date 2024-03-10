import { Composer, InlineKeyboard } from "grammy";

const composer = new Composer();

composer.command("start", (ctx) => {
  const keyboard = new InlineKeyboard();
  ctx.reply(
    "*Welcome to RunsCodeBot\n\nI can run your code use `/run {lang} {code}`\n\nTo Check the supported languages hit /langs*",
    {
      reply_markup: keyboard.url("Update", "t.me/ItzMukunD"),
      parse_mode: "MarkdownV2",
    },
  );
});

composer.command("help", (ctx) => {
  const keyboard = new InlineKeyboard();
  ctx.reply(
    "*Welcome to RunsCodeBot\n\nI can run your code use `/run {lang} {code}`\n\nTo Check the supported languages hit /langs*",
    {
      reply_markup: keyboard.url("Update", "t.me/ItzMukunD"),
      parse_mode: "MarkdownV2",
    },
  );
});

export default composer;