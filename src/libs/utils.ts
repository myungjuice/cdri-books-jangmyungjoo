import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isWishlist() {
  return typeof window !== "undefined" && window.location.pathname.includes("wishlist");
}
