import { config } from "dotenv";
import { cleanEnv, str, num } from "envalid";

await config({ export: true });

export default cleanEnv(Deno.env.toObject(), {
  BOT_TOKEN: str(),
  MODE: str(),
  OWNER_ID: num()
});