/* ======================================================
   SCHEMAS
====================================================== */

// Core
export { ImageAssetSchema } from "./image.schema.js";
export { HeroSectionSchema } from "./hero.schema.js";
export { CardSectionSchema } from "./cardSection.schema.js";

// Products
export { ProductSchema } from "./product.schema.js";
export { ProductHeroSchema } from "./productHero.schema.js";

// Product meta (ROUTES / CATEGORIES / USERS)
export {
  ProductCategorySchema,
  ProductUserSchema,
  ProductRouteSchema,
} from "./product.meta.js";

// About
export {
  AboutHeroSchema,
  AboutContentSchema,
  AboutImagesSchema,
} from "./about.schema.js";


/* ======================================================
   TYPES
====================================================== */

// Core
export type { ImageAsset } from "./image.schema.js";
export type { HeroSection } from "./hero.schema.js";
export type { CardSection } from "./cardSection.schema.js";

// Products
export type { Product } from "./product.schema.js";
export type { ProductHero } from "./productHero.schema.js";

// Product meta types
export type {
  ProductCategory,
  ProductUser,
  ProductRoute,
  RouteConfig,
} from "./product.meta.js";

// About
export type {
  AboutHero,
  AboutContent,
  AboutImages,
} from "./about.schema.js";