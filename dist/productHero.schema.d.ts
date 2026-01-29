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
    image: z.ZodObject<{
        url: z.ZodString;
        path: z.ZodString;
        alt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        url: string;
        alt: string;
    }, {
        path: string;
        url: string;
        alt: string;
    }>;
}, "strip", z.ZodTypeAny, {
    image: {
        path: string;
        url: string;
        alt: string;
    };
    page: "products";
    active: boolean;
    content: {
        title?: string | undefined;
        subtitle?: string | undefined;
    };
}, {
    image: {
        path: string;
        url: string;
        alt: string;
    };
    page: "products";
    active: boolean;
    content: {
        title?: string | undefined;
        subtitle?: string | undefined;
    };
}>;
export type ProductHero = z.infer<typeof ProductHeroSchema>;
