import { z } from "zod";
export const FooterSchema = z.object({
    active: z.boolean(),
    logo: z.object({
        url: z.string().min(1),
        alt: z.string().min(1),
    }),
    company: z.object({
        copyrightName: z.string().min(1),
    }),
    customerService: z.object({
        whatsapp: z.string().min(1),
        amazon: z.string().url(),
        email: z.string().email(),
        phone: z.string().min(1),
        addressLine1: z.string().min(1),
        addressLine2: z.string().min(1),
    }),
    social: z.object({
        instagram: z.string().url(),
        facebook: z.string().url(),
        linkedin: z.string().url(),
    }),
});
