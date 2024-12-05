type SkeletonLoaderProps = {
  height?: string;
  width?: string;
  radius?: number;
  children?: React.ReactNode;
  className?: string;
};

const SkeletonLoader = ({
  height,
  width,
  radius = 5,
  children,
  className = "",
}: SkeletonLoaderProps) => (
  <div
    style={{
      borderRadius: radius,
      ...(children ? {} : { width: width ?? "100%", height: height ?? "100%" }),
    }}
    className={`${children ? "w-fit h-fit" : ""} ${className} skeletonLoader flex justify-center items-center overflow-hidden`}
  >
    {children && <div className="opacity-0">{children}</div>}
  </div>
);

export default SkeletonLoader;
