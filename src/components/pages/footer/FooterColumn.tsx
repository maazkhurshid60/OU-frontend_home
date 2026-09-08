import Link from "next/link";
import type { FooterColumnData } from "@/constant/navigationData";

const FooterColumn: React.FC<{ column: FooterColumnData }> = ({ column }) => (
  <div>
    <div className="mb-3.5 text-[10px] font-medium tracking-[0.1em] text-g300 uppercase">{column.title}</div>
    {column.links.map((link) =>
      link.external ? (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block py-1 text-sm text-g500 transition-colors duration-200 hover:text-charcoal"
        >
          {link.label}
        </a>
      ) : (
        <Link
          key={link.label}
          href={link.href}
          className="block py-1 text-sm text-g500 transition-colors duration-200 hover:text-charcoal"
        >
          {link.label}
        </Link>
      )
    )}
  </div>
);

export default FooterColumn;
