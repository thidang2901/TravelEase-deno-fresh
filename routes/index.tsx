import { Handlers, PageProps } from "$fresh/server.ts";

import { HeadElement } from "@/components/HeadElement.tsx";
import SearchInput from "@/islands/SearchInput.tsx";
import { prismaClient } from "@/libs/database/prisma.ts";
import { Destination } from "@/libs/schemas/destination.schema.ts";

export const handler: Handlers<Destination[]> = {
  async GET(_req, ctx) {
    const data = await prismaClient.destination.findMany();
    return ctx.render(data);
  },
};

export default function Home(ctx: PageProps<Destination[]>) {
  const { data: destinations, url } = ctx;

  return (
    <>
      <HeadElement
        description="Home"
        title="Home | Travel Ease"
      />

      <SearchInput
        id="home-search"
        name="search"
        placeholder="Go to your destination"
        autoComplete="off"
      />

      <div className="flex flex-col items-center justify-center bg-gray-300 flex-grow-1">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          quam dicta cum, commodi odit eum quos. Illo, ipsum facilis praesentium
          nesciunt a quis neque, voluptate non, adipisci quia consequuntur
          harum!
        </div>
        {
          /* <div
        className="w-11/12 max-w-5xl mx-auto mt-28"
        aria-labelledby="information-heading"
      >
        <h2 id="information-heading" className="sr-only">
          Product List
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:!gap-x-10 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-x-12 lg:!gap-y-10">
          {products.map((product) => <ProductCard product={product} />)}
        </div>
      </div> */
        }
      </div>
    </>
  );
}
