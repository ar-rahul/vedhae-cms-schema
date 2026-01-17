import { z } from "zod";

export const ImageAssetSchema = z.object({
  url: z.string().url(),
  path: z.string(),
  alt: z.string(),
});

export type ImageAsset = z.infer<typeof ImageAssetSchema>;