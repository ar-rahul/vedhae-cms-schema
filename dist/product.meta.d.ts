import { z } from "zod";
/**
 * Categories represent *where* a product belongs
 * Example routes:
 *   /products/body
 *   /products/face-lips
 */
export declare const PRODUCT_CATEGORIES: readonly ["face", "lip", "face-lips", "body", "hair"];
export declare const ProductCategorySchema: z.ZodEnum<["face", "lip", "face-lips", "body", "hair"]>;
export type ProductCategory = z.infer<typeof ProductCategorySchema>;
/**
 * Users represent *who* the product is for
 * Example routes:
 *   /products/men
 *   /products/women
 *   /products/kids
 */
export declare const PRODUCT_USERS: readonly ["men", "women", "kids", "adults", "teens"];
export declare const ProductUserSchema: z.ZodEnum<["men", "women", "kids", "adults", "teens"]>;
export type ProductUser = z.infer<typeof ProductUserSchema>;
/**
 * These are the ONLY allowed product listing routes
 * Used by:
 * - Astro getStaticPaths
 * - Admin routing
 * - Worker validation
 */
export declare const PRODUCT_ROUTES: readonly ["face-lips", "body", "hair", "men", "women", "kids"];
export declare const ProductRouteSchema: z.ZodEnum<["face-lips", "body", "hair", "men", "women", "kids"]>;
export type ProductRoute = z.infer<typeof ProductRouteSchema>;
/**
 * Shared route config shape
 * Used by website to map routes → filters
 */
export type RouteConfig = {
    type: "category";
    values: ProductCategory[];
    title: string;
} | {
    type: "user";
    values: ProductUser[];
    title: string;
};
