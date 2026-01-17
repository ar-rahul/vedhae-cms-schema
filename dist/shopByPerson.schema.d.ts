import { z } from "zod";
export declare const ShopByPersonItemSchema: z.ZodObject<{
    label: z.ZodString;
    link: z.ZodString;
    order: z.ZodNumber;
    image: z.ZodObject<{
        url: z.ZodString;
        path: z.ZodString;
        alt: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ShopByPersonSchema: z.ZodObject<{
    page: z.ZodLiteral<"home">;
    section: z.ZodLiteral<"shopByPerson">;
    active: z.ZodBoolean;
    title: z.ZodString;
    cards: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        link: z.ZodString;
        order: z.ZodNumber;
        image: z.ZodObject<{
            url: z.ZodString;
            path: z.ZodString;
            alt: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ShopByPersonSection = z.infer<typeof ShopByPersonSchema>;
