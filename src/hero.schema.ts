import { z } from "zod";
import { ImageAssetSchema } from "./image.schema.js";

export const HeroSectionSchema = z.object({
  page: z.literal("home"),
  section: z.literal("hero"),
  active: z.boolean(),

  tagline: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),

  ctaText: z.string().min(1),
  ctaLink: z.string().min(1),

  image: ImageAssetSchema.optional(),
});

export type HeroSection = z.infer<typeof HeroSectionSchema>;