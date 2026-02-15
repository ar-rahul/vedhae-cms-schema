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
    }, "strip", z.ZodTypeAny, {
        url: string;
        path: string;
        alt: string;
    }, {
        url: string;
        path: string;
        alt: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    page: "products";
    active: boolean;
    imageLinks: {
        url: string;
        path: string;
        alt: string;
    }[];
    content: {
        title?: string | undefined;
        subtitle?: string | undefined;
    };
}, {
    page: "products";
    active: boolean;
    content: {
        title?: string | undefined;
        subtitle?: string | undefined;
    };
    imageLinks?: {
        url: string;
        path: string;
        alt: string;
    }[] | undefined;
}>;
export type ProductHero = z.infer<typeof ProductHeroSchema>;
