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
    active: boolean;
    tagline: string;
    title: string;
    ctaText: string;
    ctaLink: string;
    description?: string | undefined;
    image?: {
        url: string;
        path: string;
        alt: string;
    } | undefined;
}, {
    page: "home";
    section: "hero";
    active: boolean;
    tagline: string;
    title: string;
    ctaText: string;
    ctaLink: string;
    description?: string | undefined;
    image?: {
        url: string;
        path: string;
        alt: string;
    } | undefined;
}>;
export type HeroSection = z.infer<typeof HeroSectionSchema>;
