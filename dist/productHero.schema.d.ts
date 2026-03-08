import { z } from "zod";
export declare const ProductHeroSchema: z.ZodObject<{
    page: z.ZodLiteral<"products">;
    active: z.ZodBoolean;
    content: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        subtitle: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        subtitle?: string | undefined;
    }, {
        title?: string | undefined;
        subtitle?: string | undefined;
    }>;
    imageLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        path: z.ZodString;
        alt: z.ZodString;
        desc: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        path: string;
        alt: string;
        desc?: string | undefined;
    }, {
        url: string;
        path: string;
        alt: string;
        desc?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    active: boolean;
    page: "products";
    imageLinks: {
        url: string;
        path: string;
        alt: string;
        desc?: string | undefined;
    }[];
    content: {
        title?: string | undefined;
        subtitle?: string | undefined;
    };
}, {
    active: boolean;
    page: "products";
    content: {
        title?: string | undefined;
        subtitle?: string | undefined;
    };
    imageLinks?: {
        url: string;
        path: string;
        alt: string;
        desc?: string | undefined;
    }[] | undefined;
}>;
export type ProductHero = z.infer<typeof ProductHeroSchema>;
