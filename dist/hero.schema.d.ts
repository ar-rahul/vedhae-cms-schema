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
        path: string;
        url: string;
        alt: string;
    }, {
        path: string;
        url: string;
        alt: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    page: "home";
    section: "hero";
    active: boolean;
    tagline: string;
    ctaText: string;
    ctaLink: string;
    image?: {
        path: string;
        url: string;
        alt: string;
    } | undefined;
    description?: string | undefined;
}, {
    title: string;
    page: "home";
    section: "hero";
    active: boolean;
    tagline: string;
    ctaText: string;
    ctaLink: string;
    image?: {
        path: string;
        url: string;
        alt: string;
    } | undefined;
    description?: string | undefined;
}>;
export type HeroSection = z.infer<typeof HeroSectionSchema>;
