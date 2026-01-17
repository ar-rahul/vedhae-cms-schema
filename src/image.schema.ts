import { z } from "zod";

/**
 * Shared image asset definition
 * Used across all CMS sections
 */
export const ImageAssetSchema = z.object({
  url: z.string().url(),
  path: z.string(),
  alt: z.string().min(1),
});

export type ImageAsset = z.infer<typeof ImageAssetSchema>;