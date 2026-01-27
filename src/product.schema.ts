import { z } from "zod";
import { ImageAssetSchema } from "./image.schema.js";

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
       Audience & navigation
    ========================= */
    users: z.array(z.string()).min(1),

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

    /**
     * Each ingredient item:
     * [ingredientName, ingredientDescription]
     */
    ingredients: z.array(
      z.tuple([z.string(), z.string()])
    ).min(1),

    /* =========================
       System fields
    ========================= */
    active: z.boolean(),
    order: z.number(),

    createdAt: z.number(),
    updatedAt: z.number(),
  })
  .superRefine((data, ctx) => {
    /**
     * Enforce stock logic:
     * If stockStatus is false, stockVolume must be 0
     */
    if (data.stockStatus === false && data.stockVolume !== 0) {
      ctx.addIssue({
        path: ["stockVolume"],
        message: "stockVolume must be 0 when stockStatus is false",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type Product = z.infer<typeof ProductSchema>;