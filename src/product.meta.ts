import { z } from "zod";

/* =========================================================
   PRODUCT CATEGORIES
   (used for category pages, filtering, hero selection)
========================================================= */

/**
 * Categories represent *where* a product belongs
 * Example routes:
 *   /products/body
 *   /products/face-lips
 */
export const PRODUCT_CATEGORIES = [
  "face",
  "lip",
  "face-lips",
  "body",
  "hair",
] as const;

export const ProductCategorySchema = z.enum(PRODUCT_CATEGORIES);
export type ProductCategory = z.infer<typeof ProductCategorySchema>;


/* =========================================================
   PRODUCT USERS / AUDIENCE
   (used for "Shop by Person" pages)
========================================================= */

/**
 * Users represent *who* the product is for
 * Example routes:
 *   /products/men
 *   /products/women
 *   /products/kids
 */
export const PRODUCT_USERS = [
  "men",
  "women",
  "kids",
  "adults",
  "teens",
] as const;

export const ProductUserSchema = z.enum(PRODUCT_USERS);
export type ProductUser = z.infer<typeof ProductUserSchema>;


/* =========================================================
   PRODUCT ROUTES
   (all valid /products/:route pages)
========================================================= */

/**
 * These are the ONLY allowed product listing routes
 * Used by:
 * - Astro getStaticPaths
 * - Admin routing
 * - Worker validation
 */
export const PRODUCT_ROUTES = [
  "face-lips",
  "body",
  "hair",
  "men",
  "women",
  "kids",
] as const;

export const ProductRouteSchema = z.enum(PRODUCT_ROUTES);
export type ProductRoute = z.infer<typeof ProductRouteSchema>;


/* =========================================================
   ROUTE CONFIG TYPE
   (used by frontend filtering logic)
========================================================= */

/**
 * Shared route config shape
 * Used by website to map routes → filters
 */
export type RouteConfig =
  | {
      type: "category";
      values: ProductCategory[];
      title: string;
    }
  | {
      type: "user";
      values: ProductUser[];
      title: string;
    };