import { z } from "zod";
export const HomeDividerSchema = z.object({
    active: z.boolean(),
    line1: z.string(),
    line2: z.string(),
    line3: z.string(),
});
