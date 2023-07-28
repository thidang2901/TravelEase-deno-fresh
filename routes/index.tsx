import { Handlers, PageProps } from "$fresh/server.ts";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import { Container } from "@/components/Container.tsx";
import { HeadElement } from "@/components/HeadElement.tsx";
import DestinationCard from "@/islands/DestinationCard.tsx";
import SearchInput from "@/islands/SearchInput.tsx";
import { Destination } from "@/libs/schemas/destination.schema.ts";
import { Carousel } from "../components/Carousel.tsx";

export const handler: Handlers<Destination[]> = {
  // async GET(_req, ctx) {
  //   const data = await prismaClient.destination.findMany({
  //     //FIXME: user can select country
  //     where: { countryId: 1 },
  //     include: {
  //       images: {
  //         take: 1,
  //       },
  //     },
  //   });
  //   return ctx.render(data);
  // },
};

export default function Home(ctx: PageProps<Destination[]>) {
  // const { data: destinations, url } = ctx;
  const destinations: Destination[] = [
    {
      id: 1,
      "name": "Tokyo",
      "image": ["https://source.unsplash.com/LoZQWWzXJBw"],
    },
    {
      id: 2,
      "name": "Osaka",
      "image": ["https://source.unsplash.com/9zYjlA4LqTU"],
    },
    {
      id: 3,
      "name": "Kyoto",
      "image": ["https://source.unsplash.com/joT0LcIUU8U"],
    },
  ];

  return (
    <>
      <HeadElement
        description="Home"
        title="Home | Travel Ease"
        // url={url}
      />
      <Container>
        <SearchInput
          id="home-search"
          name="search"
          placeholder="Go to your destination"
          autoComplete="off"
        />

        <Carousel items={destinations} />

        {/* <div className="flex flex-row w-full h-full items-center justify-center gap-10">
          <MdArrowBackIos size={30} className="cursor-pointer text-red-500" />
          <div className="flex items-center justify-center border-2 border-green-500 gap-10">
            {destinations.map((item) => (
              <DestinationCard
                id={item.id}
                {...item}
              />
            ))}
          </div>
          <MdArrowForwardIos
            size={30}
            className="cursor-pointer text-red-500"
          />
        </div> */}
      </Container>
    </>
  );
}
