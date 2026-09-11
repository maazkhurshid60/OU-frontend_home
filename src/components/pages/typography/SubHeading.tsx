import { forwardRef } from "react";
import clsx from "clsx";

interface SubHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const SubHeading = forwardRef<HTMLHeadingElement, SubHeadingProps>(
  ({ children, className, as: Component = "h2", ...props }, ref) => (
    <Component
      ref={ref}
      className={clsx(
        "font-bold font-heading text-charcoal tracking-[-0.5px] leading-[1.3]",
        "text-[26px] md:text-[32px] lg:text-[40px]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
);

SubHeading.displayName = "SubHeading";

export default SubHeading;
