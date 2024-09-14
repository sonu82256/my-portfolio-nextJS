"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";

// Define the props interface for ProjectCard
interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  sourceLink: string;
  liveLink: string;
}

// ProjectCard Component in TypeScript
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  technologies,
  sourceLink,
  liveLink,
}) => {
  return (
    <CardContainer className="inter-var h-full"> {/* Full height for the card container */}
      <CardBody className="bg-gray-50  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-full rounded-xl p-6 border flex flex-col justify-between"> {/* Flex column layout */}
        <div>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={imageSrc}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </div>
        <div className="mt-2 flex-grow">
          {technologies.map((tech, index) => (
            <button
              key={index}
              className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-2 py-1 bg-transparent border border-black dark:border-blue-700 dark:text-white text-black rounded-lg font-semibold text-xs transform hover:-translate-y-1 transition duration-400"
            >
              {tech}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as={Link}
            href={sourceLink}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            View Source Code
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={liveLink}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            View Live App →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

// Interface for Project object
interface Project {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  sourceLink: string;
  liveLink: string;
}

// Edu component in TypeScript
export default function Edu() {
  // Array of projects data
  const projects: Project[] = [
    {
      title: "Movix Website",
      description:
        "Movix is a movie discovery platform, empowering users to explore top trending movies, search, and filter films based on their interests for an enhanced entertainment experience.",
      imageSrc:
        "https://github.com/sonu82256/Github-pics/blob/main/Movix-cover-page.png?raw=true",
      technologies: [
        "ReactJs",
        "React Router DOM",
        "Redux Toolkit",
        "CSS",
        "TMDB API",
        "Vercel",
      ],
      sourceLink: "https://twitter.com/mannupaaji",
      liveLink: "https://twitter.com/mannupaaji",
    },
    {
      title: "Another Project",
      description: "Movix is a movie discovery platform, empowering users to explore top trending movies, search, and filter films based on their interests for an enhanced entertainment experience.",
      imageSrc:
        "https://github.com/sonu82256/Github-pics/blob/main/Movix-cover-page.png?raw=true",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      sourceLink: "https://github.com",
      liveLink: "https://live-example.com",
    },
    {
      title: "Another Project",
      description: "Movix is a movie discovery platform, empowering users to explore top trending movies, search, and filter films based on their interests for an enhanced entertainment experience.",
      imageSrc:
        "https://github.com/sonu82256/Github-pics/blob/main/Movix-cover-page.png?raw=true",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      sourceLink: "https://github.com",
      liveLink: "https://live-example.com",
    },
    
  ];
  // grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:px-24 px-4 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:px-24 px-4 ">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageSrc={project.imageSrc}
          technologies={project.technologies}
          sourceLink={project.sourceLink}
          liveLink={project.liveLink}
        />
      ))}
    </div>
  );
}