import { z } from "zod";
export declare const ShopByCategoryItemSchema: z.ZodObject<{
    name: z.ZodString;
    link: z.ZodString;
    order: z.ZodNumber;
    image: z.ZodObject<{
        url: z.ZodString;
        path: z.ZodString;
        alt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        path: string;
        alt: string;
    }, {
        url: string;
        path: string;
        alt: string;
    }>;
}, "strip", z.ZodTypeAny, {
    image: {
        url: string;
        path: string;
        alt: string;
    };
    name: string;
    link: string;
    order: number;
}, {
    image: {
        url: string;
        path: string;
        alt: string;
    };
    name: string;
    link: string;
    order: number;
}>;
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
        }, "strip", z.ZodTypeAny, {
            url: string;
            path: string;
            alt: string;
        }, {
            url: string;
            path: string;
            alt: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        image: {
            url: string;
            path: string;
            alt: string;
        };
        name: string;
        link: string;
        order: number;
    }, {
        image: {
            url: string;
            path: string;
            alt: string;
        };
        name: string;
        link: string;
        order: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    page: "home";
    section: "shopByCategory";
    active: boolean;
    title: string;
    categories: {
        image: {
            url: string;
            path: string;
            alt: string;
        };
        name: string;
        link: string;
        order: number;
    }[];
}, {
    page: "home";
    section: "shopByCategory";
    active: boolean;
    title: string;
    categories: {
        image: {
            url: string;
            path: string;
            alt: string;
        };
        name: string;
        link: string;
        order: number;
    }[];
}>;
export type ShopByCategorySection = z.infer<typeof ShopByCategorySchema>;
