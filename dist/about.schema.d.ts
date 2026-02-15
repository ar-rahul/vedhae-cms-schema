import { z } from "zod";
export declare const AboutHeroSchema: z.ZodObject<{
    title: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
}, {
    title: string;
}>;
export type AboutHero = z.infer<typeof AboutHeroSchema>;
export declare const AboutContentSchema: z.ZodObject<{
    paragraphs: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    paragraphs: string[];
}, {
    paragraphs: string[];
}>;
export type AboutContent = z.infer<typeof AboutContentSchema>;
export declare const AboutImagesSchema: z.ZodObject<{
    images: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    images: {
        url: string;
        path: string;
        alt: string;
    }[];
}, {
    images: {
        url: string;
        path: string;
        alt: string;
    }[];
}>;
export type AboutImages = z.infer<typeof AboutImagesSchema>;
