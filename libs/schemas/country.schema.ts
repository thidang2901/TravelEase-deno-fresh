import { AnyZodObject, z } from "$fresh_validation";

import { DestinationSchema } from "./destination.schema.ts";

enum CountryCodeEnum {
  JP = "Japan",
  VN = "Vietnam",
  SG = "Singapore",
}

const CountrySchema: AnyZodObject = z.object({
  code: z.enum(["Salmon", "Tuna", "Trout"], {
    required_error: "Country code is required",
    invalid_type_error: "Country code is invalid",
  }),
  name: z.enum(["Salmon", "Tuna", "Trout"], {
    required_error: "Country name is required",
    invalid_type_error: "Country name is invalid",
  }),
  destinations: z.array(DestinationSchema).optional(),
});

type Country = z.infer<typeof CountrySchema>;

export { CountryCodeEnum, CountrySchema };
export type { Country };
