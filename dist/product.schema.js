import { z } from "zod";
import { ImageAssetSchema } from "./image.schema.js";
import { ProductCategorySchema, ProductUserSchema, } from "./product.meta.js";
/**
 * Product schema
 */
export const ProductSchema = z
    .object({
    /* =========================
       Core identity
    ========================= */
    id: z.string(),
    title: z.string().min(1),
    titleDescription: z.string().min(1),
    size: z.string().min(1),
    /* =========================
       Audience & classification
    ========================= */
    users: z.array(ProductUserSchema).min(1),
    categories: z.array(ProductCategorySchema).min(1),
    /* =========================
       Navigation
    ========================= */
    internalLink: z.string().startsWith("/"),
    externalLink: z.string().url().optional(),
    /* =========================
       Pricing & availability
    ========================= */
    price: z.number().nonnegative(),
    priceSubText: z.string().optional(),
    stockStatus: z.boolean(),
    stockVolume: z.number().int().nonnegative(),
    /* =========================
       Media
    ========================= */
    imageLinks: z.array(ImageAssetSchema).min(1),
    /* =========================
       Content sections
    ========================= */
    aboutTitle: z.string().min(1),
    aboutDescription: z.string().min(1),
    howToUseTitle: z.string().min(1),
    howToUseDescription: z.string().min(1),
    ingredientsTitle: z.string().min(1),
    ingredients: z.array(z.tuple([z.string(), z.string()])).min(1),
    /* =========================
       System fields
    ========================= */
    active: z.boolean(),
    order: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
})
    .superRefine((data, ctx) => {
    if (data.stockStatus === false && data.stockVolume !== 0) {
        ctx.addIssue({
            path: ["stockVolume"],
            message: "stockVolume must be 0 when stockStatus is false",
            code: z.ZodIssueCode.custom,
        });
    }
});
