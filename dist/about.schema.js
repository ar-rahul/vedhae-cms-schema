import { z } from "zod";
import { ImageAssetSchema } from "./image.schema.js";
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
    images: z.array(ImageAssetSchema),
});
