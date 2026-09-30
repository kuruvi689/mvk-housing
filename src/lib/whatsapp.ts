import { whatsappNumber } from "@/data/projects";

export function whatsappHref(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
