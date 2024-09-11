"use client";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function page() {
    return (
        <div className="">
            <BackgroundBeamsWithCollision>
                <div className="max-w-5xl mx-auto px-8 mt-36">
                    <HoverEffect items={projects} />
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
}
const projects = [
    {
        title: "Frontend",
        myskill: [
            [
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
                "React",
            ],
            [
                "https://www.datocms-assets.com/98835/1684410508-image-7.png",
                "nextJs",
            ],
            [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
                "CSS",
            ],
            [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
                "Tailwind CSS",
            ],
            [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82cHZ4TQ-b97tuC7Z4QF0ueNj7juqkPbXxA&s",
                "Javascript",
            ],
            [
                "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
                "TypeScript",
            ],
            [
                "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
                "Redux",
            ],
            [
                "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
                "BootStrap",
            ],
            [
                "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
                "HTML",
            ],
        ],
    },
    {
        title: "Backend",
        myskill: [
            ["https://nodejs.org/static/images/logo.svg", "NodeJs"],
            [
                "data:image/png;base64,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",
                "ExpressJs",
            ],
            [
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
                "MySQL",
            ],
            [
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
                "MongoDB",
            ],
            [
                "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
                "Firebase",
            ],
            [
                "https://www.datocms-assets.com/98835/1684410508-image-7.png",
                "NextJs",
            ],
        ],
    },
    {
        title: "Mobile Development",
        myskill: [
            [
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
                "React Native",
            ],
            [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Android_Studio_Logo_%282023%29.svg/240px-Android_Studio_Logo_%282023%29.svg.png",
                "Android Studio",
            ],
        ],
    },
    {
        title: "Others",
        myskill: [
            ["https://git-scm.com/images/logos/logomark-orange@2x.png", "Git"],
            [
                "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                "Github",
            ],
            [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
                "VS Code",
            ],
            [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaC1Wwhn9L7cfCZluV6THjvosD4RJkoW7jQ&s",
                "Postman",
            ],
            [
                "data:image/png;base64,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",
                "Figma",
            ],
            [
                "data:image/jpeg;base64,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",
                "Canva",
            ],
        ],
    },
];
