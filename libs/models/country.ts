import { Destination } from "./destination.ts";

interface Country {
  code: string;
  name: string;
  destinations: Destination[];
}

export type { Country };
