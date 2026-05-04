import mainImg from "@/assets/chinotto-main.webp";
import welcomeImg from "@/assets/chinotto-welcome.webp";

/** Shown in the product gallery modal (two-up row on larger screens). */
export const PRODUCT_MODAL_GALLERY = [
  {
    src: welcomeImg,
    alt: "Chinotto — settings and privacy",
  },
  {
    src: mainImg,
    alt: "Chinotto main view — thought capture and entries",
  },
] as const;
