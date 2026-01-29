import { z } from "zod";
export declare const ImageAssetSchema: z.ZodObject<{
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
}>;
export type ImageAsset = z.infer<typeof ImageAssetSchema>;
