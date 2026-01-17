import { z } from "zod";
import { ImageAssetSchema } from "./image.schema.js";
export const CardItemSchema = z.object({
    name: z.string(),
    link: z.string(),
    order: z.number(),
    image: ImageAssetSchema,
});
export const CardSectionSchema = z.object({
    page: z.literal("home"),
    section: z.enum(["one", "two"]),
    title: z.string(),
    order: z.number(),
    active: z.boolean(),
    items: z.array(CardItemSchema),
});
