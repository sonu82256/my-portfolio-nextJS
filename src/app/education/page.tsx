"use client";
import React from "react";
// import { motion } from "framer-motion";
// import { LampContainer } from "../../components/ui/lamp";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
// import photo from "../../../public/images/sonuPhoto.png";
// import { Bio } from "@/data/constants";
import { Spotlight } from "@/components/ui/Spotlight";

const page = () => {
    const data = [
        {
            title: "MCA",
            content: (
                <div>
                    <div className="lg:flex">
                        <Image
                            className="w-150 h-150"
                            src="https://upload.wikimedia.org/wikipedia/en/4/4f/Maulana_Azad_National_Institute_of_Technology_Logo.png"
                            alt="startup template"
                            width={160}
                            height={10}
                        />
                        <div className="lg:mx-8 lg:mt-5 mt-8">
                            <div className="text-neutral-200 text-2xl lg:text-3xl font-semibold">
                                Nit Bhopal
                            </div>
                            <div className="text-neutral-300 text-1xl lg:text-lg mt-2 font-semibold">
                                {" "}
                                Master of Computer Applications{" "}
                            </div>
                            <div className="text-neutral-300 lg:text-md">
                                {" "}
                                August 2021 - July 2024
                            </div>
                            <div className="text-neutral-300 lg:text-md">
                                {" "}
                                Grade: 8.12 CGPA{" "}
                            </div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-300 mt-10">
                        I have completed my Master of Computer Application (MCA)
                        from NIT Bhopal with a CGPA of 8.12. Throughout my
                        academic journey, I have gained extensive knowledge and
                        practical experience in various domains including web
                        development, Android development, and machine learning.
                        My coursework covered core subjects such as Database
                        Management Systems (DBMS), Computer Networking,
                        Object-Oriented Programming (OOP), Java, Python, and
                        Software Engineering.
                    </div>
                </div>
            ),
        },
        {
            title: "BCA",
            content: (
                <div>
                    <div className="lg:flex">
                        <Image
                            className="w-150 h-150 bf-transparent"
                            src="https://www.sxcran.org/sxcappportal/Pictures/sxc_logo.png"
                            alt="startup template"
                            width={160}
                            height={10}
                        />
                        <div className="lg:mx-8 lg:mt-5 mt-8">
                            <div className="text-neutral-200 text-2xl lg:text-3xl font-semibold">
                                St. Xavier&apos;s College, Ranchi
                            </div>
                            <div className="text-neutral-300 text-1xl lg:text-lg mt-2 font-semibold">
                                {" "}
                                B.Sc Computer Application{" "}
                            </div>
                            <div className="text-neutral-300 lg:text-md">
                                {" "}
                                Aug 2018 - July 2021
                            </div>
                            <div className="text-neutral-300 lg:text-md">
                                {" "}
                                Grade: 7.16 CGPA{" "}
                            </div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-300 mt-10">
                        I completed my Bachelor of Science (B.Sc) in Computer
                        Application from St. Xavier’s College, Ranchi,
                        Jharkhand, from August 2018 to July 2021. During my
                        undergraduate studies, I developed a strong foundation
                        in computer science principles and practical
                        applications. My coursework included a variety of
                        subjects such as Data Structures, Algorithms,
                        Object-Oriented Programming, Database Management Systems
                        (DBMS), Operating Systems, and Computer Networks.
                    </div>
                </div>
            ),
        },
        {
            title: "Intermediate",
            content: (
                <div>
                    <div className="lg:flex">
                        <Image
                            className="w-150 h-150 bf-transparent"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRx43-vajk9Kd1JWmwS_6wf18q-vb02l5RA&s"
                            alt="startup template"
                            width={160}
                            height={10}
                        />
                        <div className="lg:mx-8 lg:mt-5 mt-8">
                            <div className=" text-neutral-200 text-2xl lg:text-3xl font-semibold">
                                sri chaitanya educational institutions
                            </div>
                            <div className="text-neutral-300 text-1xl lg:text-lg mt-2 font-semibold">
                                {" "}
                                CBSE(XII), Science with Computer{" "}
                            </div>
                            <div className="text-neutral-300 lg:text-md">
                                {" "}
                                June 2018
                            </div>
                            <div className="text-neutral-300 lg:text-md">
                                {" "}
                                Grade: 71.6%{" "}
                            </div>
                        </div>
                    </div>
                    <div className="text-neutral-300 text-sm mt-10">
                        I completed my high school education (Class 12) at Sri
                        Chaitanya Educational Institutions in Vishakapatnam,
                        Andhra Pradesh, where I studied a science stream with a
                        focus on Computer Science. This experience provided me
                        with a solid foundation in both scientific principles
                        and computer science, combining theoretical knowledge
                        with practical applications. The rigorous curriculum and
                        emphasis on computer science equipped me with essential
                        skills in programming and problem-solving, setting the
                        stage for my future studies and career in technology.
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className=" w-full pt-44 ">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="">
                <Timeline data={data} />
            </div>
            {/* <div className="h-40 text-black">vv</div> */}
        </div>
    );
};

export default page;
