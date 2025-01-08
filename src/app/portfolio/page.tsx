import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { portfolioProjects } from "@/constants/db";
import Link from "next/link";

type PortfolioCardProps = {
  name: string;
  date: string;
  description: string;
  image: string;
  link: string;
};

const PortfolioCard = ({
  name,
  date,
  description,
  image,
  link,
}: PortfolioCardProps) => (
  <div className="flex flex-col lg:flex-row lg:items-center gap-6 md:gap-8 pl-5 md:pl-8 border-l-2 border-white/30 group hover:border-accent transition-colors duration-500">
    <div className="flex flex-col gap-4 flex-1">
      <h2 className="font-semibold leading-none">{name}</h2>
      <span className="leading-relaxed">{description}</span>
      <div className="flex justify-between items-end">
        <Link href={link}>
          <button className="text-accent text-sm md:text-base hover:text-accent-dark transition-colors duration-200 font-medium">
            Learn More →
          </button>
        </Link>
        <span className="!text-white/25">{date}</span>
      </div>
    </div>
    <div className="w-full max-md:aspect-video lg:w-[280px] aspect-square flex-shrink-0 rounded-xl overflow-hidden shadow-lg relative">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
      />
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <div className="min-h-[100dvh]">
      <Header />
      <div
        className="w-full h-[380px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/projects/staircase.jpg')" }}
      >
        <div className="flex h-full w-full flex-col justify-center items-center leading-none gap-3 backdrop-blur-[8px] bg-black/40">
          <h1 className="fade-in font-semibold">Portfolio</h1>
          <span className="fade-in text-center max-w-[400px]">
            Our latest and most advanced projects
          </span>
        </div>
      </div>
      <div className="contentWrapper flex flex-col w-full max-w-[640px] lg:max-w-[900px] mx-auto max-md:px-4 px-6 max-md:pt-10 pt-20 max-md:pb-20 pb-40">
        <div className="projectsWrapper flex flex-col items-stretch max-md:gap-10 gap-24">
          {portfolioProjects.map((item, index) => (
            <PortfolioCard
              key={index}
              name={item.projectName}
              description={item.projectDescription}
              date={item.projectDate}
              image={item.projectImage}
              link={item.projectLink}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
