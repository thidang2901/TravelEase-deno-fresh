# TravelEase

_This is portfolio project using [Fresh Deno](https://fresh.deno.dev) - The
next-gen web framework._

- [TravelEase](#travelease)
  - [Technical Stacks](#technical-stacks)
  - [QuickStart](#quickstart)
  - [Development (TBU)](#development-tbu)
    - [Fresh](#fresh)
    - [Prisma](#prisma)
    - [Environment](#environment)

## Technical Stacks

| <!-- -->   | <!-- -->                                        |
| ---------- | ----------------------------------------------- |
| Language   | TypeScript                                      |
| Runtime    | [Deno](https://deno.com/runtime)                |
| Framework  | [Fresh Deno](https://fresh.deno.dev)            |
| Database   | PostgreSQL on [Supabase](https://supabase.com/) |
| ORM        | [Prisma.io](https://www.prisma.io/)             |
| Deployment | [Deno Deploy](https://deno.com/deploy)          |

## QuickStart

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

## Development (TBU)

### Fresh

### Prisma

[Following Deno's guide:](https://deno.com/manual@v1.34.3/node/how_to_with_npm/prisma)

Clone the project

```
git clone https://github.com/thidang2901/TravelEase-deno-fresh.git
```

or using SSH

```
git clone git@github.com:thidang2901/TravelEase-deno-fresh.git
```

Run `prisma init` with Deno

```
deno run --allow-read --allow-env --allow-write npm:prisma@^4.5 init
```

Create new database

```
deno run -A npm:prisma@^4.5 db push
```

Sync current database

```
deno run -A npm:prisma@^4.5 db pull
```

Generate Prisma client for Data Proxy

```
deno run -A --unstable npm:prisma@^4.5 generate --data-proxy
```

Create new seed as example Run `prisma/seed.ts`

### Environment

Success built on environment `deno --version`:

```
deno 1.34.3 (release, x86_64-unknown-linux-gnu)
v8 11.5.150.2
typescript 5.0.4
```
