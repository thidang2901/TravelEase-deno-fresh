/**
 * Run at root to create seed data
 *
 * `deno run -A prisma/scripts/seed.ts`
 */

import "$std/dotenv/load.ts";

import configuration from "@/config/configuration.ts";
import { Prisma, PrismaClient } from "@/prisma/client/deno/edge.ts";

import countriesData from "@/data/seeds/countries.ts"

const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: configuration.database.proxy_uri,
    },
  },
});

async function generateSeeds() {
  const seeds = [{
    "type": "location",
    "data": countriesData as Prisma.DestinationCreateInput[],
    "model": prismaClient.destination,
  }];

  for (const seed of seeds) {
    for (const data of seed.data) {
      const record = await seed.model.create({ data: data });
      console.log(`Created record with id: ${record.id}`);
    }
  }

  console.log(`Seeding finished.`);
}

/**
 * Seed the database.
 */
generateSeeds();
