"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { portfolioProjects } from "@/constants/db";
import { Facebook, Instagram, Youtube } from "iconsax-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import SkeletonLoader from "@/components/SkeletonLoader";
import { PrimaryButton, GhostArrowButton } from "@/components/ui/Button";

type StatElementProps = {
  title: string;
  percentage: number;
};

const StatsElement = ({ title, percentage }: StatElementProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex justify-between items-end gap-6">
      <span className="font-medium !text-white/90 !text-sm">{title}</span>
      <span className="!text-white/50 !text-xs">{percentage}%</span>
    </div>
    <div className="h-[3px] rounded-full bg-white/15">
      <div
        className="h-[3px] rounded-full bg-accent transition-all duration-700"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const TechnicalTeamMember = ({
  name,
  position,
}: {
  name: string;
  position: string;
}) => (
  <div className="flex w-fit items-center p-[6px] border border-white/15 rounded-xl hover:border-white/25 transition-colors duration-200">
    <div className="h-10 md:h-12 aspect-square rounded-lg overflow-hidden relative flex-shrink-0">
      <Image
        src="/profilePics/profilePic3.jpeg"
        alt={name}
        fill
        className="object-cover"
      />
    </div>
    <div className="flex flex-col leading-none gap-1 px-3 md:px-4">
      <span className="font-medium !text-white/90">{name}</span>
      <span className="!text-white/50 !text-xs">{position}</span>
    </div>
  </div>
);

const PortfolioProject = () => {
  const { portfolioProject } = useParams();
  const project = portfolioProjects.find(
    (p) => p.projectLink === `/portfolio/${portfolioProject}`
  );

  return (
    <div className="min-h-[100dvh]">
      <Header />
      <div className="contentWrapper w-full max-w-[1140px] 2xl:max-w-[1440px] mx-auto flex flex-col max-md:p-3 p-6 pb-[150px] gap-10">
        <Slider image={project?.projectImage} />
        <div className="flex flex-col md:flex-row gap-10 md:gap-12">
          <div className="flex-1 flex flex-col max-md:gap-6 gap-10">
            <div className="flex flex-col leading-none gap-2">
              {project ? (
                <>
                  <h1 className="font-semibold">{project.projectName}</h1>
                  <span className="!text-white/40">
                    From {project.projectDate}
                  </span>
                </>
              ) : (
                <>
                  <SkeletonLoader height="52px" width="280px" />
                  <SkeletonLoader height="20px" width="160px" />
                </>
              )}
            </div>

            <div className="flex flex-col gap-10">
              <span className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                quas obcaecati quos recusandae natus ullam saepe perferendis
                quibusdam ea animi? Placeat, consectetur dolore. Provident
                accusantium soluta animi cum autem vel placeat?
                <br />
                <br />
                Maxime quas libero aliquam suscipit tenetur cum, illum
                voluptatum fugiat debitis? Consequatur illo, rerum accusantium
                voluptatem ducimus, explicabo, perspiciatis assumenda eaque alias
                officiis quasi corporis sed.
                <br />
                <br />
                Dolorum provident quisquam vel quo, accusamus explicabo ratione
                tempore? Reiciendis sequi quod corporis iste ut similique
                pariatur in nisi. Eos vitae enim tenetur iste delectus veritatis
                dicta a repudiandae fuga!
              </span>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:flex-1 h-[220px] relative rounded-xl overflow-hidden">
                  {project?.projectImage ? (
                    <Image
                      src={project.projectImage}
                      alt={project.projectName}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <SkeletonLoader height="220px" width="100%" radius={12} />
                  )}
                </div>
              </div>

              <span className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                quas obcaecati quos recusandae natus ullam saepe perferendis
                quibusdam ea animi? Placeat, consectetur dolore. Provident
                accusantium soluta animi cum autem vel placeat?
                <br />
                <br />
                Maxime quas libero aliquam suscipit tenetur cum, illum
                voluptatum fugiat debitis? Consequatur illo, rerum accusantium
                voluptatem ducimus, explicabo, perspiciatis assumenda eaque alias
                officiis quasi corporis sed.
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <PrimaryButton href="/contact">
                I want this project at my home
              </PrimaryButton>
              <GhostArrowButton href="/portfolio">
                Check out other projects
              </GhostArrowButton>
            </div>

            <div className="flex flex-col gap-6 max-md:mt-8 mt-16">
              <h2 className="font-semibold">Credits</h2>
              <div className="flex flex-col lg:flex-row gap-5 max-w-[900px]">
                <div className="w-full aspect-square lg:aspect-auto lg:w-[200px] lg:h-full lg:min-h-[240px] lg:max-h-[300px] flex-shrink-0 rounded-xl overflow-hidden relative">
                  <Image
                    src="/profilePics/profilePic4.jpeg"
                    alt="Main designer"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col leading-none gap-1">
                    <h3>John Doe</h3>
                    <span className="!text-accent !text-sm">Main Designer</span>
                  </div>
                  <span className="leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore quisquam totam corporis! Quaerat ad exercitationem
                    blanditiis molestias? A quisquam molestiae reprehenderit
                    doloremque minima, ab voluptates, quaerat quo fuga.
                  </span>
                  <div className="flex gap-4 mt-2">
                    <Instagram size={22} color="#CC8347" />
                    <Facebook size={22} color="#CC8347" />
                    <Youtube size={22} color="#CC8347" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col max-md:gap-3 gap-5 max-md:mt-6 mt-10">
              <h3 className="font-semibold">Technical Team</h3>
              <div className="flex flex-wrap max-md:gap-2 gap-3">
                {(project?.teamMembers ?? []).map((member, i) => (
                  <TechnicalTeamMember
                    key={i}
                    name={member.name}
                    position={member.position}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col min-w-[280px] rounded-2xl p-5 gap-5 border border-white/15 self-start sticky top-[90px] mt-20 backdrop-blur-[80px] bg-white/[2%]">
            <h2 className="font-semibold !text-2xl">Stats</h2>
            <StatsElement title="Creativity" percentage={80} />
            <StatsElement title="Attention to detail" percentage={93} />
            <StatsElement title="Efficiency" percentage={97} />
            <StatsElement title="Delivery time" percentage={92} />
            <StatsElement title="End Result" percentage={98} />
            <span className="!text-white/30 self-center !text-xs">
              {project?.projectName ?? "Loading..."}
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioProject;
