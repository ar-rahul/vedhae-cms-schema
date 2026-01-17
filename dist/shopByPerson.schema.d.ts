import { z } from "zod";
export declare const ShopByPersonItemSchema: z.ZodObject<{
    label: z.ZodString;
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
    link: string;
    order: number;
    label: string;
}, {
    image: {
        url: string;
        path: string;
        alt: string;
    };
    link: string;
    order: number;
    label: string;
}>;
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
        link: string;
        order: number;
        label: string;
    }, {
        image: {
            url: string;
            path: string;
            alt: string;
        };
        link: string;
        order: number;
        label: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    page: "home";
    section: "shopByPerson";
    active: boolean;
    title: string;
    cards: {
        image: {
            url: string;
            path: string;
            alt: string;
        };
        link: string;
        order: number;
        label: string;
    }[];
}, {
    page: "home";
    section: "shopByPerson";
    active: boolean;
    title: string;
    cards: {
        image: {
            url: string;
            path: string;
            alt: string;
        };
        link: string;
        order: number;
        label: string;
    }[];
}>;
export type ShopByPersonSection = z.infer<typeof ShopByPersonSchema>;
