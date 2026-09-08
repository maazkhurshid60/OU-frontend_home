import FooterBrand from "./FooterBrand";
import FooterColumn from "./FooterColumn";
import FooterSocial from "./FooterSocial";
import { FOOTER_COLUMNS } from "@/constant/navigationData";

const Footer: React.FC = () => (
  <footer className="bg-surface px-5 pb-8 sm:px-6 md:px-12">
    <div className="mx-auto max-w-[1200px] border-t border-g200 py-10 sm:py-12 md:py-14">
      <div className="mb-10 grid grid-cols-1 gap-6 text-center min-[481px]:grid-cols-2 min-[481px]:text-left md:grid-cols-[1.8fr_1fr_1fr_1fr] md:gap-10">
        <FooterBrand />
        {FOOTER_COLUMNS.map((column) => (
          <FooterColumn key={column.title} column={column} />
        ))}
      </div>

      <div className="flex flex-col items-center gap-2.5 border-t border-g200 pt-5 text-xs text-g300 sm:flex-row sm:justify-between sm:text-left">
        <span>&copy; 2026 Owners Universe. All rights reserved.</span>
        <FooterSocial />
      </div>
    </div>
  </footer>
);

export default Footer;
