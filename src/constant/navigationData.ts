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
  "Purpose-built software for service industries. One universe, two engines of growth.";

export const FOOTER_COLUMNS: FooterColumnData[] = [
  {
    title: "Products",
    links: [
      { label: "Owners Pulse", href: "https://ownerspulse.com", external: true },
      { label: "Owners Inventory", href: "https://ownersinventory.com", external: true },
      { label: "What is next", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Why two", href: "#about" },
      { label: "Get started", href: LOGIN_URL, external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Early access", href: REGISTER_URL, external: true },
      { label: "Contact", href: "#contact" },
    ],
  },
];
