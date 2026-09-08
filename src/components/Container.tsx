import clsx from "clsx";

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={clsx("mx-auto max-w-[1200px] px-20 max-[1024px]:px-10 max-[640px]:px-5", className)}>{children}</div>
);

export default Container;
