import { z } from "zod";
/**
 * Product schema
 */
export declare const ProductSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    titleDescription: z.ZodString;
    size: z.ZodString;
    users: z.ZodArray<z.ZodEnum<["men", "women", "kids", "adults", "teens"]>, "many">;
    categories: z.ZodArray<z.ZodEnum<["face", "lip", "face-lips", "body", "hair"]>, "many">;
    internalLink: z.ZodString;
    externalLink: z.ZodOptional<z.ZodString>;
    price: z.ZodNumber;
    priceSubText: z.ZodOptional<z.ZodString>;
    stockStatus: z.ZodBoolean;
    stockVolume: z.ZodNumber;
    imageLinks: z.ZodArray<z.ZodObject<{
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
    id: string;
    titleDescription: string;
    size: string;
    users: ("men" | "women" | "kids" | "adults" | "teens")[];
    categories: ("face" | "lip" | "face-lips" | "body" | "hair")[];
    internalLink: string;
    price: number;
    stockStatus: boolean;
    stockVolume: number;
    imageLinks: {
        path: string;
        url: string;
        alt: string;
    }[];
    aboutTitle: string;
    aboutDescription: string;
    howToUseTitle: string;
    howToUseDescription: string;
    ingredientsTitle: string;
    ingredients: [string, string][];
    createdAt: number;
    updatedAt: number;
    externalLink?: string | undefined;
    priceSubText?: string | undefined;
}, {
    title: string;
    order: number;
    active: boolean;
    id: string;
    titleDescription: string;
    size: string;
    users: ("men" | "women" | "kids" | "adults" | "teens")[];
    categories: ("face" | "lip" | "face-lips" | "body" | "hair")[];
    internalLink: string;
    price: number;
    stockStatus: boolean;
    stockVolume: number;
    imageLinks: {
        path: string;
        url: string;
        alt: string;
    }[];
    aboutTitle: string;
    aboutDescription: string;
    howToUseTitle: string;
    howToUseDescription: string;
    ingredientsTitle: string;
    ingredients: [string, string][];
    createdAt: number;
    updatedAt: number;
    externalLink?: string | undefined;
    priceSubText?: string | undefined;
}>, {
    title: string;
    order: number;
    active: boolean;
    id: string;
    titleDescription: string;
    size: string;
    users: ("men" | "women" | "kids" | "adults" | "teens")[];
    categories: ("face" | "lip" | "face-lips" | "body" | "hair")[];
    internalLink: string;
    price: number;
    stockStatus: boolean;
    stockVolume: number;
    imageLinks: {
        path: string;
        url: string;
        alt: string;
    }[];
    aboutTitle: string;
    aboutDescription: string;
    howToUseTitle: string;
    howToUseDescription: string;
    ingredientsTitle: string;
    ingredients: [string, string][];
    createdAt: number;
    updatedAt: number;
    externalLink?: string | undefined;
    priceSubText?: string | undefined;
}, {
    title: string;
    order: number;
    active: boolean;
    id: string;
    titleDescription: string;
    size: string;
    users: ("men" | "women" | "kids" | "adults" | "teens")[];
    categories: ("face" | "lip" | "face-lips" | "body" | "hair")[];
    internalLink: string;
    price: number;
    stockStatus: boolean;
    stockVolume: number;
    imageLinks: {
        path: string;
        url: string;
        alt: string;
    }[];
    aboutTitle: string;
    aboutDescription: string;
    howToUseTitle: string;
    howToUseDescription: string;
    ingredientsTitle: string;
    ingredients: [string, string][];
    createdAt: number;
    updatedAt: number;
    externalLink?: string | undefined;
    priceSubText?: string | undefined;
}>;
export type Product = z.infer<typeof ProductSchema>;
