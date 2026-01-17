import { z } from "zod";
export declare const HeroSectionSchema: z.ZodObject<{
    page: z.ZodLiteral<"home">;
    section: z.ZodLiteral<"hero">;
    active: z.ZodBoolean;
    tagline: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    ctaText: z.ZodString;
    ctaLink: z.ZodString;
    image: z.ZodOptional<z.ZodObject<{
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
    }>>;
}, "strip", z.ZodTypeAny, {
    page: "home";
    section: "hero";
    title: string;
    active: boolean;
    tagline: string;
    ctaText: string;
    ctaLink: string;
    image?: {
        url: string;
        path: string;
        alt: string;
    } | undefined;
    description?: string | undefined;
}, {
    page: "home";
    section: "hero";
    title: string;
    active: boolean;
    tagline: string;
    ctaText: string;
    ctaLink: string;
    image?: {
        url: string;
        path: string;
        alt: string;
    } | undefined;
    description?: string | undefined;
}>;
export type HeroSection = z.infer<typeof HeroSectionSchema>;
