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
];
export const ProductCategorySchema = z.enum(PRODUCT_CATEGORIES);
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
];
export const ProductUserSchema = z.enum(PRODUCT_USERS);
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
];
export const ProductRouteSchema = z.enum(PRODUCT_ROUTES);
