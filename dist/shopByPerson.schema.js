import { z } from "zod";
import { ImageAssetSchema } from "./image.schema";
export const ShopByPersonItemSchema = z.object({
    label: z.string().min(1),
    link: z.string().min(1),
    order: z.number().int(),
    image: ImageAssetSchema,
});
export const ShopByPersonSchema = z.object({
    page: z.literal("home"),
    section: z.literal("shopByPerson"),
    active: z.boolean(),
    title: z.string().min(1),
    cards: z.array(ShopByPersonItemSchema),
});
