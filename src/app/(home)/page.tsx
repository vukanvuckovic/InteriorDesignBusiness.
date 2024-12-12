import Link from "next/link";
import CaseStudySlider from "@/components/CaseStudySlider";
import SmallHeader from "@/components/SmallHeader";
import NewsList from "@/components/NewsList";
import { PrimaryButton, GhostArrowButton } from "@/components/ui/Button";

const Home = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col xl:flex-row">
      <div className="homeLeft h-[100dvh] flex-1 flex flex-col items-center xl:items-end xl:sticky top-0 border-r border-white/10">
        <div className="homeLeftMain w-full max-w-[720px] min-w-[200px] flex-1 flex flex-col justify-center items-start gap-6 max-md:px-6 max-md:py-8 px-10 py-12 xl:py-3">
          <h1 className="leading-none tracking-tight">
            Transform<br />your space
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-[380px] leading-relaxed">
            Transforming spaces with timeless style and modern comfort. Discover
            interior design at its finest.
          </p>
          <PrimaryButton href="/portfolio">Explore our Work</PrimaryButton>
        </div>
        <div className="h-px w-full bg-white/10" />
        <div className="homeLeftBottom w-full max-w-[720px] min-w-[200px] max-md:h-[120px] h-[180px] flex justify-start items-center max-md:px-4 px-10">
          <span className="slide-up-fade text-start !text-white/40 leading-relaxed max-w-[400px]">
            Elevate every room with artful design, personalized aesthetics, and
            functional elegance.
          </span>
        </div>
      </div>

      <div className="homeRight flex-1 flex flex-col">
        <div className="homeRightContent flex-1 xl:max-w-[720px] flex flex-col items-center">
          <CaseStudySlider />
          <div className="flex flex-col gap-20 max-md:px-4 max-md:py-8 px-6 py-12 max-w-[800px] w-full">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold leading-none">About Us</h2>
              <span className="leading-relaxed">
                Our team specializes in creating bespoke interiors that blend
                style and functionality. From concept to completion, we focus on
                every detail to ensure spaces reflect your personality and needs.
              </span>
              <GhostArrowButton href="/about-us">Learn More</GhostArrowButton>
            </div>

            <div className="flex flex-col max-md:gap-5 gap-7">
              <div className="flex flex-col gap-1 leading-none">
                <h2 className="font-semibold">News</h2>
                <span>Check out what&apos;s happening right now</span>
              </div>
              <NewsList />
              <Link
                href="/news"
                className="self-end text-sm text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                View all news →
              </Link>
            </div>
          </div>
        </div>
        <SmallHeader />
      </div>
    </div>
  );
};

export default Home;
