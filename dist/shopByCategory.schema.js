import { z } from "zod";
import { ImageAssetSchema } from "./image.schema";
export const ShopByCategoryItemSchema = z.object({
    name: z.string().min(1),
    link: z.string().min(1),
    order: z.number().int(),
    image: ImageAssetSchema,
});
export const ShopByCategorySchema = z.object({
    page: z.literal("home"),
    section: z.literal("shopByCategory"),
    active: z.boolean(),
    title: z.string().min(1),
    categories: z.array(ShopByCategoryItemSchema),
});
