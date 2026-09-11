import { forwardRef } from "react";
import clsx from "clsx";

interface MainHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

const MainHeading = forwardRef<HTMLHeadingElement, MainHeadingProps>(
  ({ children, className, style, as: Component = "h2", ...props }, ref) => (
    <Component
      ref={ref}
      style={style}
      className={clsx(
        "font-bold font-heading text-charcoal tracking-[-0.5px] leading-[1.3]",
        "text-[32px] md:text-4xl lg:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
);

MainHeading.displayName = "MainHeading";

export default MainHeading;
