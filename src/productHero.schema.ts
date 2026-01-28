import { z } from "zod";
import { ImageAssetSchema } from "./image.schema.js";

export const ProductHeroSchema = z.object({
  page: z.literal("products"),
  active: z.boolean(),

  content: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
  }),

  image: ImageAssetSchema,
});

export type ProductHero = z.infer<typeof ProductHeroSchema>;