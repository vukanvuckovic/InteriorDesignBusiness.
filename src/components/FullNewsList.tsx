import Image from "next/image";
import { news } from "@/constants/db";
import SkeletonLoader from "./SkeletonLoader";

type NewsCardProps = {
  title: string;
  desc: string;
  img: string;
};

const NewsCard = ({ title, desc, img }: NewsCardProps) => (
  <div className="flex flex-col h-[320px] w-full border border-white/20 rounded-xl overflow-hidden hover:border-white/30 transition-colors duration-300 group">
    <div className="flex-1 w-full relative overflow-hidden">
      <Image
        src={img}
        alt={title}
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        fill
      />
    </div>
    <div className="flex flex-col items-start gap-2 max-md:p-3 p-4">
      <h3 className="font-semibold leading-tight">{title}</h3>
      <span className="text-white/60 line-clamp-2">{desc}</span>
      <button className="leading-none text-accent mt-1 text-xs md:text-sm hover:text-accent-dark transition-colors duration-200">
        Read More
      </button>
    </div>
  </div>
);

const FullNewsList = ({ query = "" }: { query?: string }) => {
  const filtered = query.trim()
    ? news.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
    : news;

  if (!filtered.length) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-3">
        <span className="!text-white/30 !text-lg">No results found</span>
        <span className="!text-white/20">Try a different search term</span>
      </div>
    );
  }

  return (
    <div className="cardsWrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filtered.map((item, index) => (
        <NewsCard key={index} title={item.title} img={item.image} desc={item.description} />
      ))}
    </div>
  );
};

export const NewsListSkeleton = () => (
  <div className="cardsWrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {Array.from({ length: 12 }).map((_, index) => (
      <SkeletonLoader key={index} height="320px" radius={12} />
    ))}
  </div>
);

export default FullNewsList;
