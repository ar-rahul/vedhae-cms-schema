import { z } from "zod";
export declare const CardItemSchema: z.ZodObject<{
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
    name: string;
    link: string;
    order: number;
    image: {
        url: string;
        path: string;
        alt: string;
    };
}, {
    name: string;
    link: string;
    order: number;
    image: {
        url: string;
        path: string;
        alt: string;
    };
}>;
export declare const CardSectionSchema: z.ZodObject<{
    page: z.ZodLiteral<"home">;
    section: z.ZodEnum<["one", "two"]>;
    title: z.ZodString;
    order: z.ZodNumber;
    active: z.ZodBoolean;
    items: z.ZodArray<z.ZodObject<{
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
        name: string;
        link: string;
        order: number;
        image: {
            url: string;
            path: string;
            alt: string;
        };
    }, {
        name: string;
        link: string;
        order: number;
        image: {
            url: string;
            path: string;
            alt: string;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    title: string;
    order: number;
    page: "home";
    section: "one" | "two";
    active: boolean;
    items: {
        name: string;
        link: string;
        order: number;
        image: {
            url: string;
            path: string;
            alt: string;
        };
    }[];
}, {
    title: string;
    order: number;
    page: "home";
    section: "one" | "two";
    active: boolean;
    items: {
        name: string;
        link: string;
        order: number;
        image: {
            url: string;
            path: string;
            alt: string;
        };
    }[];
}>;
export type CardSection = z.infer<typeof CardSectionSchema>;
