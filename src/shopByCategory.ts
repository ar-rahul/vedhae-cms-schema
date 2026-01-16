
import type { ImageAsset } from "./media";


export interface ShopByCategoryItem {
  name: string;
  link: string;
  order: number;
  image: ImageAsset;
}

export interface ShopByCategorySection {
  page: "home";
  section: "shopByCategory";
  title: string;
  categories: ShopByCategoryItem[];
  order: number;
  active: boolean;
}