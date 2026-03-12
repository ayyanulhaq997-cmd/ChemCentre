import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn
 * Utility to merge Tailwind classes efficiently.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
