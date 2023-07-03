import { AnyZodObject, z } from "$fresh_validation";

const AttractionImageSchema: AnyZodObject = z.object({
  url: z.string().trim().url(),
  attractionId: z.number().positive(),
});

const AttractionSchema: AnyZodObject = z.object({
  name: z.string().trim().min(1),
  destinationId: z.number().positive(),
  images: z.array(AttractionImageSchema),
});

type Attraction = z.infer<typeof AttractionSchema>;
type AttractionImage = z.infer<typeof AttractionImageSchema>;

export { AttractionImageSchema, AttractionSchema };
export type { Attraction, AttractionImage };
