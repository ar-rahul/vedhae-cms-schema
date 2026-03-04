import { z } from "zod";
export declare const ImageAssetSchema: z.ZodObject<{
    url: z.ZodString;
    path: z.ZodString;
    alt: z.ZodString;
    desc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    url: string;
    path: string;
    alt: string;
    desc?: string | undefined;
}, {
    url: string;
    path: string;
    alt: string;
    desc?: string | undefined;
}>;
export type ImageAsset = z.infer<typeof ImageAssetSchema>;
