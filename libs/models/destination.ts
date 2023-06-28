import { Attraction } from "./attraction.ts";

interface Destination {
  countryId: number;
  name: string;
  region: string;
  images: DestinationImage[];
  attractions: Attraction[];
}

interface DestinationImage {
  url: string;
  destinationId: number;
}

export type { Destination, DestinationImage };
