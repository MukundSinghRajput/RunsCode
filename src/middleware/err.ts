import { ErrorHandler } from "grammy";
import env from "../../env.ts";

export const error: ErrorHandler = (error) => {
  error.ctx.api.sendMessage(
    env.OWNER_ID,
    `${JSON.stringify({ context: error.ctx, error })}`,
  );
  console.error(JSON.stringify({
    context: error.ctx,
    error,
  }));
};