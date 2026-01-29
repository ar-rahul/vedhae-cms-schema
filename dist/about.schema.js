import { z } from "zod";
/* =========================
   ABOUT PAGE
========================= */
export const AboutHeroSchema = z.object({
    title: z.string(),
});
export const AboutContentSchema = z.object({
    paragraphs: z.array(z.string()),
});
export const AboutImagesSchema = z.object({
    images: z.array(z.object({
        url: z.string().url(),
        alt: z.string(),
    })),
});
