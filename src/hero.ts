import type { ImageAsset } from "./media";


export interface HeroContent {
  image: ImageAsset;
  tagline: string;
  title: string;
  description?: string;
  ctaText: string;
  ctaLink: string;
}
