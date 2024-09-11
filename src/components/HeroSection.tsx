import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import photo from "../../public/images/profile.gif";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Bio } from "@/data/constants";

const HeroSection = () => {
    return (
        <div className="h-full w-full rounded-md flex flex-col-reverse md:flex-row items-center justify-around relative overflow-hidden mx-auto py-10 md:py-0 px-10">
            {/* Left Content */}
            <div className="text-center md:text-left">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="gray"
                />
                <div className="p-4 md:pt-48 relative z-10 w-full">
                    <h1 className="mt-10 md:mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Hi, I am <br /> {Bio.name}
                    </h1>
                    <div className=" flex mt-4 text-sm sm:text-base md:text-2xl lg:text-3xl text-neutral-300 max-w-lg">
                        <span>I am a</span>
                        <span className="ml-2 font-semibold bg-clip-text text-transparent bg-gradient-to-b from-pink-400 to-blue-900">
                            <Typewriter 
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>

                    <p className="mt-4 text-s sm:text-sm md:text-base lg:text-xl text-neutral-300 max-w-lg">
                        {Bio.description}
                    </p>

                    <div className="mt-6">
                        <Link href={"#"}>
                            <button className="relative inline-flex h-14  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    Check Resume
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="mb-8 mt-28 md:mb-0">
                <div className="w-40 h-40 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden">
                    <Image
                        src={photo}
                        width={350}
                        height={350}
                        alt="photo"
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
