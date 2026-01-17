import { z } from "zod";
export declare const ShopByCategoryItemSchema: z.ZodObject<{
    name: z.ZodString;
    link: z.ZodString;
    order: z.ZodNumber;
    image: z.ZodObject<{
        url: z.ZodString;
        path: z.ZodString;
        alt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ShopByCategorySchema: z.ZodObject<{
    page: z.ZodLiteral<"home">;
    section: z.ZodLiteral<"shopByCategory">;
    active: z.ZodBoolean;
    title: z.ZodString;
    categories: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        link: z.ZodString;
        order: z.ZodNumber;
        image: z.ZodObject<{
            url: z.ZodString;
            path: z.ZodString;
            alt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ShopByCategorySection = z.infer<typeof ShopByCategorySchema>;
