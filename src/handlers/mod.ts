import { Composer } from "grammy";
import start from "./start.ts";
import runner from "./run.ts";
import langs from "./langs.ts";

const composer = new Composer();

composer.use(start, runner, langs);

export default composer;