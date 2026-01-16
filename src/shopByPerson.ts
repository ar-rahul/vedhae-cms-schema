import type { ImageAsset } from "./media";


export interface ShopByPersonItem {
  label: string;
  link: string;
  order: number;
  image: ImageAsset;
}

export interface ShopByPersonSection {
  page: "home";
  section: "shopByPerson";
  title: string;
  cards: ShopByPersonItem[];
  order: number;
  active: boolean;
}