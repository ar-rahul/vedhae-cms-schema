import { z } from "zod";
export declare const ImageAssetSchema: z.ZodObject<{
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
}>;
export type ImageAsset = z.infer<typeof ImageAssetSchema>;
