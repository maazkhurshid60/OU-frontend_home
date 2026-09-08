export interface NavLink {
  label: string;
  hash: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Products", hash: "#products" },
  { label: "About", hash: "#about" },
  { label: "Contact", hash: "#contact" },
];

export const LOGIN_URL = "https://app.ownersuniverse.com";
export const REGISTER_URL = "https://app.ownersuniverse.com/register";

export interface FooterColumnData {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}

export const FOOTER_TAGLINE =
  "Helping service businesses grow with integrated software — CRM, POS, marketing, and operations in one ecosystem.";

export const FOOTER_COLUMNS: FooterColumnData[] = [
  {
    title: "Products",
    links: [
      { label: "Owners Pulse", href: "https://ownerspulse.com", external: true },
      { label: "Owners Inventory", href: "https://ownersinventory.com", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/#contact" },
      { label: "Dashboard", href: "https://app.ownersuniverse.com", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];
