import { z } from "zod";
export declare const ImageAssetSchema: z.ZodObject<{
    url: z.ZodString;
    path: z.ZodString;
    alt: z.ZodString;
}, z.core.$strip>;
export type ImageAsset = z.infer<typeof ImageAssetSchema>;
