import joi from "npm:joi";

const envVarsSchema = joi
  .object()
  .keys({
    DENO_ENV: joi
      .string()
      .valid("production", "development", "test")
      .required(),
    PORT: joi.number().positive().default(8000),
    DATABASE_URL: joi.string().required().description(
      "Database's Connection string",
    ),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(Deno.env.toObject());

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  app: {
    env: envVars.DENO_ENV,
    port: envVars.PORT,
  },
  database: {
    uri: envVars.DATABASE_URL,
  },
};
