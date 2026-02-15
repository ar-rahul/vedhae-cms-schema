import { z } from "zod";
/**
 * Product schema
 */
export declare const ProductSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    titleDescription: z.ZodString;
    size: z.ZodString;
    users: z.ZodArray<z.ZodString, "many">;
    categories: z.ZodArray<z.ZodString, "many">;
    internalLink: z.ZodString;
    externalLink: z.ZodOptional<z.ZodString>;
    price: z.ZodNumber;
    discountPercent: z.ZodOptional<z.ZodNumber>;
    priceSubText: z.ZodOptional<z.ZodString>;
    stockStatus: z.ZodBoolean;
    stockVolume: z.ZodNumber;
    imageLinks: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    aboutTitle: z.ZodString;
    aboutDescription: z.ZodString;
    howToUseTitle: z.ZodString;
    howToUseDescription: z.ZodString;
    ingredientsTitle: z.ZodString;
    ingredients: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodString], null>, "many">;
    active: z.ZodBoolean;
    order: z.ZodNumber;
    createdAt: z.ZodNumber;
    updatedAt: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    order: number;
    active: boolean;
    imageLinks: {
        url: string;
        path: string;
        alt: string;
    }[];
    id: string;
    titleDescription: string;
    size: string;
    users: string[];
    categories: string[];
    internalLink: string;
    price: number;
    stockStatus: boolean;
    stockVolume: number;
    aboutTitle: string;
    aboutDescription: string;
    howToUseTitle: string;
    howToUseDescription: string;
    ingredientsTitle: string;
    ingredients: [string, string][];
    createdAt: number;
    updatedAt: number;
    externalLink?: string | undefined;
    discountPercent?: number | undefined;
    priceSubText?: string | undefined;
}, {
    title: string;
    order: number;
    active: boolean;
    imageLinks: {
        url: string;
        path: string;
        alt: string;
    }[];
    id: string;
    titleDescription: string;
    size: string;
    users: string[];
    categories: string[];
    internalLink: string;
    price: number;
    stockStatus: boolean;
    stockVolume: number;
    aboutTitle: string;
    aboutDescription: string;
    howToUseTitle: string;
    howToUseDescription: string;
    ingredientsTitle: string;
    ingredients: [string, string][];
    createdAt: number;
    updatedAt: number;
    externalLink?: string | undefined;
    discountPercent?: number | undefined;
    priceSubText?: string | undefined;
}>, {
    title: string;
    order: number;
    active: boolean;
    imageLinks: {
        url: string;
        path: string;
        alt: string;
    }[];
    id: string;
    titleDescription: string;
    size: string;
    users: string[];
    categories: string[];
    internalLink: string;
    price: number;
    stockStatus: boolean;
    stockVolume: number;
    aboutTitle: string;
    aboutDescription: string;
    howToUseTitle: string;
    howToUseDescription: string;
    ingredientsTitle: string;
    ingredients: [string, string][];
    createdAt: number;
    updatedAt: number;
    externalLink?: string | undefined;
    discountPercent?: number | undefined;
    priceSubText?: string | undefined;
}, {
    title: string;
    order: number;
    active: boolean;
    imageLinks: {
        url: string;
        path: string;
        alt: string;
    }[];
    id: string;
    titleDescription: string;
    size: string;
    users: string[];
    categories: string[];
    internalLink: string;
    price: number;
    stockStatus: boolean;
    stockVolume: number;
    aboutTitle: string;
    aboutDescription: string;
    howToUseTitle: string;
    howToUseDescription: string;
    ingredientsTitle: string;
    ingredients: [string, string][];
    createdAt: number;
    updatedAt: number;
    externalLink?: string | undefined;
    discountPercent?: number | undefined;
    priceSubText?: string | undefined;
}>;
export type Product = z.infer<typeof ProductSchema>;
