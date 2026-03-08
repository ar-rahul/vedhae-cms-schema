import { z } from "zod";
export declare const AnnouncementSchema: z.ZodObject<{
    active: z.ZodBoolean;
    text: z.ZodString;
    speed: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    active: boolean;
    text: string;
    speed: number;
}, {
    active: boolean;
    text: string;
    speed?: number | undefined;
}>;
export type Announcement = z.infer<typeof AnnouncementSchema>;
