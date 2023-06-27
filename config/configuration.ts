export default {
  app: {
    env: Deno.env.get("DENO_ENV"),
    port: Number(Deno.env.get("PORT")),
  },
  database: {
    uri: Deno.env.get("DATABASE_URL"),
  },
};
