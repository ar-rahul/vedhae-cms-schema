import { z } from "zod";
/**
 * Canonical Hero CMS shape
 * This is what admin, worker, frontend agree on
 */
export declare const HeroSchema: z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type HeroSection = z.infer<typeof HeroSchema>;
