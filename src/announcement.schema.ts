import { z } from "zod";

export const AnnouncementSchema = z.object({
  active: z.boolean(),
  text: z.string().min(1),
  speed: z.number().min(5).max(120).default(30),
});

export type Announcement = z.infer<typeof AnnouncementSchema>;