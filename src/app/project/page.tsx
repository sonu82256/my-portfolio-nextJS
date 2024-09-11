// HeroScrollDemo.tsx
"use client";
import React from "react";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import Image from "next/image";

export default function page() {
    return (
        <>
            <div className="flex flex-col overflow-hidden mt-28">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    Movix Website
                                </span>
                            </h1>
                        </>
                    }
                    descriptionComponent={
                        <div className="w-2/3 flex justify-center lg:mx-48 md:mx-32 mx-24">
                            <div>
                                <h1 className="text-3xl font-bold text-black dark:text-white mt-8">
                                    Movix
                                </h1>
                                <div className="mt-2 text-gray-300">
                                    May 2023 - June 2023
                                </div>
                                <div className="mt-2">
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        ReactJs
                                    </button>
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        React Router DOM
                                    </button>
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        Redux Toolkit
                                    </button>
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        CSS
                                    </button>
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        TMDB API
                                    </button>
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        Versel
                                    </button>
                                </div>
                                <p className="text-gray-300 mt-4">
                                    Movix is a movie discovery platform,
                                    empowering users to explore top trending
                                    movies, search, and filter films based on
                                    their interests for an enhanced
                                    entertainment experience.
                                </p>
                                <div className="flex mt-4">
                                    <button className="p-[3px] relative w-full mr-2">
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                            View Code
                                        </div>
                                    </button>
                                    <button className="p-[3px] relative w-full">
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                            View Live App
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    } // Pass descriptionComponent here
                >
                    {/* Main Image */}
                    <Image
                        src={`https://github.com/sonu82256/Github-pics/blob/main/Movix-cover-page.png?raw=true`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    sonuEstate
                                </span>
                            </h1>
                        </>
                    }
                    descriptionComponent={
                        <div className="w-2/3 flex justify-center lg:mx-48 md:mx-32 mx-24">
                            <div>
                                <h1 className="text-3xl font-bold text-black dark:text-white mt-8">
                                    sonuEstate
                                </h1>
                                <div className="mt-2 text-gray-300">
                                    June 2024 - Aug 2024
                                </div>
                                <div className="mt-2">
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        ReactJs
                                    </button>
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        React Router DOM
                                    </button>
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        Redux Toolkit
                                    </button>
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        Tailwind CSS
                                    </button>
                                   
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        Firebase Store
                                    </button>
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        NodeJs
                                    </button>
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        ExpressJs
                                    </button>
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        MongoDb
                                    </button>
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        BcryptJs
                                    </button>
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        JSON Web Token
                                    </button>
                                    <button className="mx-1 mt-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        Firebase Authenticatoin
                                    </button>
                                </div>
                                <p className="mt-4 text-gray-300">
                                    Sonu Estate is a leading real estate agency
                                    that specializes in helping clients buy,
                                    sell, and rent properties in the most
                                    desirable neighborhoods. Our team of
                                    experienced agents is dedicated to providing
                                    exceptional service and making the buying
                                    and selling process as smooth as possible.
                                </p>
                                <div className="flex mt-4">
                                    <button className="p-[3px] relative w-full mr-2">
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                            View Code
                                        </div>
                                    </button>
                                    <button className="p-[3px] relative w-full">
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                            View Live App
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    } // Pass descriptionComponent here
                >
                    {/* Main Image */}
                    <Image
                        src={`https://github.com/sonu82256/Github-pics/blob/main/sonuEstate/Home%20page.png?raw=true`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>
        </>
    );
}
