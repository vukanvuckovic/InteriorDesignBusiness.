import Image from "next/image";
import { news } from "@/constants/db";
import Link from "next/link";

const NewsCard = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) => (
  <div className="flex max-sm:flex-col sm:h-[180px] w-full border border-white/15 rounded-xl p-2 gap-2 hover:border-white/25 transition-colors duration-300">
    <div className="relative max-sm:aspect-video h-full aspect-square rounded-lg overflow-hidden flex-shrink-0">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
    <div className="flex flex-col gap-2 p-2">
      <h3 className="font-semibold leading-tight">{title}</h3>
      <span className="flex-1 leading-relaxed">{desc}</span>
      <Link
        href="/news"
        className="text-accent text-xs md:text-sm self-end leading-none hover:text-accent-dark transition-colors duration-200"
      >
        Read More
      </Link>
    </div>
  </div>
);

const NewsList = () => (
  <div className="flex flex-col max-md:gap-2 gap-3">
    {news.slice(0, 3).map((item, index) => (
      <NewsCard key={index} title={item.title} image={item.image} desc={item.description} />
    ))}
  </div>
);

export default NewsList;
