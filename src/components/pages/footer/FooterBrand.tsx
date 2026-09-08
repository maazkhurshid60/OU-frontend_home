import Logo from "@/components/pages/navbar/Logo";
import { FOOTER_TAGLINE } from "@/constant/navigationData";

const FooterBrand: React.FC = () => (
  <div>
    <Logo imgHeight={26} className="mb-3 justify-center min-[481px]:justify-start" />
    <p className="mx-auto max-w-[320px] text-[13px] leading-[1.55] text-g400 min-[481px]:mx-0">{FOOTER_TAGLINE}</p>
  </div>
);

export default FooterBrand;
