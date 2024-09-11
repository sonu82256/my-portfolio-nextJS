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
                            <div className="text-2xl lg:text-3xl font-semibold">
                                Nit Bhopal
                            </div>
                            <div className="text-1xl lg:text-lg mt-2 font-semibold">
                                {" "}
                                Master of Computer Applications{" "}
                            </div>
                            <div className="lg:text-md">
                                {" "}
                                August 2021 - July 2024
                            </div>
                            <div className="lg:text-md"> Grade: 8.12 CGPA </div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-400 mt-10">
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
                            <div className="text-2xl lg:text-3xl font-semibold">
                                St. Xavier&apos;s College, Ranchi
                            </div>
                            <div className="text-1xl lg:text-lg mt-2 font-semibold">
                                {" "}
                                B.Sc Computer Application{" "}
                            </div>
                            <div className="lg:text-md">
                                {" "}
                                Aug 2018 - July 2021
                            </div>
                            <div className="lg:text-md"> Grade: 7.16 CGPA </div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-400 mt-10">
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
                            <div className="text-2xl lg:text-3xl font-semibold">
                            sri chaitanya educational institutions
                            </div>
                            <div className="text-1xl lg:text-lg mt-2 font-semibold">
                                {" "}
                                CBSE(XII), Science with Computer{" "}
                            </div>
                            <div className="lg:text-md">
                                {" "}
                                June 2018
                            </div>
                            <div className="lg:text-md"> Grade: 71.6% </div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-400 mt-10">
                    I completed my class 12 high school education at Sri Chaitanya Educational Institutions, Vishakapatnam AP, where I studied Science with Computer Science.
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div>
            {/* <LampContainer className="pt-64 h-auto">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className=" bg-gradient-to-br from-slate-300 to-slate-100 py-6 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    <br />
                    <br /> MCA Graduate
                </motion.h1>
            </LampContainer> */}
            <Spotlight
                    className="-top-40 left-20 md:left-40 md:-top-20"
                    fill="white"
                />
            <div className="w-full mt-44 lg:px-10">
                <Timeline data={data} />
            </div>
            <div className="h-40 text-black">vv</div>
        </div>
    );
};

export default page;
