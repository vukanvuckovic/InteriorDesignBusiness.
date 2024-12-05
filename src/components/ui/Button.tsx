import { ArrowRight } from "iconsax-react";
import Link from "next/link";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type AsLink = { href: string; type?: never; onClick?: never };
type AsButton = {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

type PrimaryButtonProps = BaseProps & (AsLink | AsButton);
type GhostArrowButtonProps = BaseProps & (AsLink | AsButton);

const primaryCls =
  "h-10 md:h-[45px] px-8 md:px-12 hover:px-10 md:hover:px-14 transition-all duration-300 text-sm md:text-lg rounded-full text-white bg-gradient-to-b from-accent to-accent-dark flex items-center justify-center whitespace-nowrap";

export const PrimaryButton = ({
  children,
  href,
  type = "button",
  onClick,
  className = "",
}: PrimaryButtonProps) => {
  const cls = `${primaryCls} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
};

const ghostPill =
  "bg-gradient-to-b from-white/[0.15] to-white/[0.07] backdrop-blur-sm border border-white/10";

export const GhostArrowButton = ({
  children,
  href,
  onClick,
  className = "",
}: GhostArrowButtonProps) => {
  const outerCls = `flex gap-0 hover:gap-2 transition-all duration-300 w-fit ${className}`;

  const inner = (
    <>
      <div
        className={`h-10 md:h-[45px] px-8 md:px-12 text-sm md:text-base rounded-full flex items-center justify-center whitespace-nowrap ${ghostPill}`}
      >
        {children}
      </div>
      <div
        className={`h-10 md:h-[45px] aspect-square rounded-full flex items-center justify-center ml-[-5px] ${ghostPill}`}
      >
        <ArrowRight size={18} color="white" className="-rotate-45" />
      </div>
    </>
  );

  if (href) return <Link href={href} className={outerCls}>{inner}</Link>;
  return (
    <button onClick={onClick} className={outerCls}>
      {inner}
    </button>
  );
};
