import { z } from "zod";

/* =========================
   ABOUT PAGE SCHEMAS
========================= */

export const AboutHeroSchema = z.object({
  title: z.string(),
});

export type AboutHero = z.infer<typeof AboutHeroSchema>;

export const AboutContentSchema = z.object({
  paragraphs: z.array(z.string()),
});

export type AboutContent = z.infer<typeof AboutContentSchema>;

export const AboutImagesSchema = z.object({
  images: z.array(
    z.object({
      url: z.string().url(),
      alt: z.string(),
    })
  ),
});

export type AboutImages = z.infer<typeof AboutImagesSchema>;