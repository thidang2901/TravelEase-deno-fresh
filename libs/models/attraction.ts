interface Attraction {
  name: string;
  images: AttractionImage[];
  destinationId: number;
}

interface AttractionImage {
  url: string;
  attractionId: number;
}

export type { Attraction, AttractionImage };
