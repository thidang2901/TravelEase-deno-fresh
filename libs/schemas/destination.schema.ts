import { AnyZodObject, z } from "$fresh_validation";

import { AttractionSchema } from "./attraction.schema.ts";

const DestinationImageSchema: AnyZodObject = z.object({
  url: z.string().trim().url({ message: "Must be a URL"}),
  destinationId: z.number().positive(),
});

const DestinationSchema: AnyZodObject = z.object({
  name: z.string().trim(),
  region: z.string().trim().nullable(),
  countryId: z.number().positive(),
  attractions: z.array(AttractionSchema),
  images: z.array(DestinationImageSchema),
});

type Destination = z.infer<typeof DestinationSchema>;
type DestinationImage = z.infer<typeof DestinationImageSchema>;

export { DestinationImageSchema, DestinationSchema };
export type { Destination, DestinationImage };
