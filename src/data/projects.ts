export type ProjectStatus = "completed" | "enquire";

export interface Project {
  slug: string;
  name: string;
  location: string;
  bhk: "2BHK" | "3BHK" | "4BHK";
  units: number;
  areaSqft: number;
  price: string;
  status: ProjectStatus;
  statusLabel: string;
  image: string;
  description: string;
  /** Short, honest fact shown as a chip on the card — never an approval/compliance claim. */
  highlight: string;
}

/**
 * Real project data from the client discovery form (handoff.md §4).
 * Approval type (RERA/CMDA/Panchayat) is intentionally NOT rendered anywhere
 * in the UI — client instruction: no approval badges until documents are
 * signed off for public use. Do not add an "approval" field to the display.
 */
export const projects: Project[] = [
  {
    slug: "subam-house",
    name: "Subam House",
    location: "BV Nagar 3rd Main Rd, Moovarasampet",
    bhk: "3BHK",
    units: 6,
    areaSqft: 3300,
    price: "₹96 Lakhs",
    status: "completed",
    statusLabel: "Completed Project — Showcase",
    image: "/images/projects/subam-house.webp",
    description:
      "A 6-unit residential development near Gangai Amman Koil, Moovarasampet — completed and handed over in October 2023.",
    highlight: "Handed over Oct 2023",
  },
  {
    slug: "vk-maruthi",
    name: "VK Maruthi",
    location: "Neru High Rd, Moovarasampet",
    bhk: "2BHK",
    units: 5,
    areaSqft: 2400,
    price: "₹88 Lakhs",
    status: "completed",
    statusLabel: "Completed Project — Showcase",
    image: "/images/projects/vk-maruthi.webp",
    description:
      "A 5-unit residential development near the bus stop on Neru High Road, Moovarasampet.",
    highlight: "5 units delivered",
  },
  {
    slug: "kundrathur-villa",
    name: "Kundrathur Villa",
    location: "Priya Nagar, Kundrathur",
    bhk: "4BHK",
    units: 1,
    areaSqft: 1400,
    price: "₹1.32 Crore",
    status: "enquire",
    statusLabel: "Enquire for Availability",
    image: "/images/projects/kundrathur-villa.jpg",
    description:
      "A G+2 luxury villa in Priya Nagar, Kundrathur — 4 BHK across 1,400 sq.ft.",
    highlight: "G+2 luxury villa",
  },
];

export const whatsappNumber = "919840055269";
