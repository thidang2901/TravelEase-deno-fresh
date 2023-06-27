/**
 * Run at root to create seed data
 *
 * `deno run -A prisma/scripts/seed.ts`
 */

import "$std/dotenv/load.ts";

import configuration from "@/config/configuration.ts";
import { Prisma, PrismaClient } from "@/prisma/client/deno/edge.ts";
import locationSeeds from "@/prisma/seed-data/location.json" assert {
  type: "json",
};

console.log({ configuration });

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
    "data": locationSeeds as Prisma.LocationCreateInput[],
    "model": prismaClient.location,
  }];
  // const locationData: Prisma.LocationCreateInput[] = locationSeeds;

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
