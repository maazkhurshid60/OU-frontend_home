"use client";

import { useStickyCardStack } from "@/hooks/useStickyCardStack";
import Container from "@/components/Container";
import MainHeading from "@/components/pages/typography/MainHeading";
import ProductPanel from "./ProductPanel";
import { PRODUCT_PANELS } from "@/constant/productsData";

const Products: React.FC = () => {
  const trackRef = useStickyCardStack<HTMLDivElement>();

  return (
    <section id="products" className="relative bg-white pt-[clamp(64px,8vw,120px)] pb-[clamp(48px,6vw,80px)]">
      <Container className="mb-[clamp(28px,3.5vw,48px)]">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-g200 bg-white px-[18px] py-2 text-[13px] font-medium text-charcoal">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
          Our Products
        </div>
        <MainHeading>
          Two products.
          <br />
          One universe.
        </MainHeading>
      </Container>

      <Container className="relative">
        <div ref={trackRef} className="flex flex-col gap-6">
          {PRODUCT_PANELS.map((product) => (
            <ProductPanel key={product.variant} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
