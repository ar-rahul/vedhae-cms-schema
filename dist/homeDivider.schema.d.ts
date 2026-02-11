import { z } from "zod";
export declare const HomeDividerSchema: z.ZodObject<{
    active: z.ZodBoolean;
    line1: z.ZodString;
    line2: z.ZodString;
    line3: z.ZodString;
}, "strip", z.ZodTypeAny, {
    active: boolean;
    line1: string;
    line2: string;
    line3: string;
}, {
    active: boolean;
    line1: string;
    line2: string;
    line3: string;
}>;
export type HomeDivider = z.infer<typeof HomeDividerSchema>;
