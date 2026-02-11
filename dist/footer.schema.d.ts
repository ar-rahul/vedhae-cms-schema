import { z } from "zod";
export declare const FooterSchema: z.ZodObject<{
    active: z.ZodBoolean;
    logo: z.ZodObject<{
        url: z.ZodString;
        alt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        alt: string;
    }, {
        url: string;
        alt: string;
    }>;
    company: z.ZodObject<{
        copyrightName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        copyrightName: string;
    }, {
        copyrightName: string;
    }>;
    customerService: z.ZodObject<{
        whatsapp: z.ZodString;
        amazon: z.ZodString;
        email: z.ZodString;
        phone: z.ZodString;
        addressLine1: z.ZodString;
        addressLine2: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        whatsapp: string;
        amazon: string;
        email: string;
        phone: string;
        addressLine1: string;
        addressLine2: string;
    }, {
        whatsapp: string;
        amazon: string;
        email: string;
        phone: string;
        addressLine1: string;
        addressLine2: string;
    }>;
    social: z.ZodObject<{
        instagram: z.ZodString;
        facebook: z.ZodString;
        linkedin: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        instagram: string;
        facebook: string;
        linkedin: string;
    }, {
        instagram: string;
        facebook: string;
        linkedin: string;
    }>;
}, "strip", z.ZodTypeAny, {
    active: boolean;
    logo: {
        url: string;
        alt: string;
    };
    company: {
        copyrightName: string;
    };
    customerService: {
        whatsapp: string;
        amazon: string;
        email: string;
        phone: string;
        addressLine1: string;
        addressLine2: string;
    };
    social: {
        instagram: string;
        facebook: string;
        linkedin: string;
    };
}, {
    active: boolean;
    logo: {
        url: string;
        alt: string;
    };
    company: {
        copyrightName: string;
    };
    customerService: {
        whatsapp: string;
        amazon: string;
        email: string;
        phone: string;
        addressLine1: string;
        addressLine2: string;
    };
    social: {
        instagram: string;
        facebook: string;
        linkedin: string;
    };
}>;
export type FooterSection = z.infer<typeof FooterSchema>;
