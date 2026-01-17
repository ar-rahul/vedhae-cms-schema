import { z } from "zod";
import { ImageAssetSchema } from "./image.schema.js";

export const SectionItemSchema = z.object({
  id: z.string().optional(), // useful later
  title: z.string(),
  link: z.string(),
  order: z.number().int().min(1),
  image: ImageAssetSchema,
});

export const CardSectionSchema = z.object({
  page: z.literal("home"),
  section: z.string(), // shopByCategory / shopByPerson
  title: z.string(),
  order: z.number().int().min(1),
  active: z.boolean(),
  items: z.array(SectionItemSchema),
});

export type CardSection = z.infer<typeof CardSectionSchema>;