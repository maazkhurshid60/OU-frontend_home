import clsx from "clsx";
import { NAV_LINKS } from "@/constant/navigationData";

interface NavLinksProps {
  hashPrefix: string;
  linkClassName: string;
  onLinkClick?: () => void;
  containerClassName?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ hashPrefix, linkClassName, onLinkClick, containerClassName }) => (
  <div className={clsx(containerClassName)}>
    {NAV_LINKS.map((link) => (
      <a key={link.hash} href={`${hashPrefix}${link.hash}`} className={linkClassName} onClick={onLinkClick}>
        {link.label}
      </a>
    ))}
  </div>
);

export default NavLinks;
