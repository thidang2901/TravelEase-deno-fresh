/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

import configuration from "./config/configuration.ts";
import logger from "./config/logger.ts";

logger.info("Sever is running...");

await start(manifest, {
  plugins: [twindPlugin(twindConfig)],
  port: configuration.app.port,
});
