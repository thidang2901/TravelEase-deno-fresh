# Travel Ease

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/thidang2901/TravelEase-deno-fresh">
    <img src="https://raw.githubusercontent.com/thidang2901/TravelEase-deno-fresh/master/static/logo.svg" alt="Logo" width="120" height="120">
  </a>
  <h3 align="center">Travel Ease</h3>
  <p align="center">
    An application for self-travel planning
    <br />
    <a href="thidang2901-travel-app.deno.dev/"><strong>View Demo</strong></a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Technical Stacks</a></li>
    <li><a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#development"> Development</a>
        </li>
      </ul>
    </li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About the project

This is portfolio project using [Fresh Deno](https://fresh.deno.dev) - The
next-gen web framework.

## Technical Stacks

| <!-- -->       | <!-- -->                                        |
| -------------- | ----------------------------------------------- |
| **Language**   | TypeScript                                      |
| **Runtime**    | [Deno](https://deno.com/runtime)                |
| **Framework**  | [Fresh Deno](https://fresh.deno.dev)            |
| **Database**   | PostgreSQL on [Supabase](https://supabase.com/) |
| **ORM**        | [Prisma.io](https://www.prisma.io/)             |
| **Deployment** | [Deno Deploy](https://deno.com/deploy)          |

## Getting Started (TBU)

### Prerequisites

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

### Development

#### Fresh

#### Prisma

_Deno's with Prisma example:
https://github.com/denoland/examples/tree/main/with-prisma_

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

or

Pull current database's schema

```
deno run -A npm:prisma@^4.5 db pull
```

Generate Prisma client for Data Proxy

```
deno run -A --unstable npm:prisma@^4.5 generate --data-proxy
```

Create new seed as example Run `prisma/seed.ts`

```
deno run -A prisma/seed.ts
```

## Contact

Thi Dang (Ms.) - [LinkedIn](https://www.linkedin.com/in/thidang2901/)

Project Link:
[https://github.com/thidang2901/TravelEase-deno-fresh](https://github.com/thidang2901/TravelEase-deno-fresh)
