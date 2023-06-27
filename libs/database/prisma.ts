import configuration from "@/config/configuration.ts";
import { Prisma, PrismaClient } from "@/prisma/client/deno/edge.ts";

const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: configuration.database.uri,
    },
  },
});

export { Prisma, prismaClient };
