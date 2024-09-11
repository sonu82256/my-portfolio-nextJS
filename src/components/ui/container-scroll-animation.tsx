"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
    titleComponent,
    descriptionComponent,
    children,
}: {
    titleComponent: string | React.ReactNode;
    descriptionComponent: string | React.ReactNode;
    children: React.ReactNode;
}) => {
    const containerRef = useRef<HTMLDivElement>(null); // Ref for the div element
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const scaleDimensions = () => {
        return isMobile ? [0.7, 0.9] : [1.05, 1];
    };

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div
            className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
            ref={containerRef}
        >
            <div
                className="py-10 md:py-40 w-full relative"
                style={{
                    perspective: "1000px",
                }}
            >
                {/* Title Section */}
                <Header translate={translate} titleComponent={titleComponent} />

                {/* Card with children and description */}
                <Card rotate={rotate} translate={translate} scale={scale}>
                    {children}

                    {/* Render descriptionComponent after the image */}
                </Card>
                <div className="mt-8">{descriptionComponent}</div>
            </div>
        </div>
    );
};

// Define proper prop types for Header
export const Header = ({
    translate,
    titleComponent,
}: {
    translate: MotionValue<number>; // Proper type for translate
    titleComponent: string | React.ReactNode; // Define the proper type
}) => {
    return (
        <motion.div
            style={{
                translateY: translate,
            }}
            className="div max-w-5xl mx-auto text-center"
        >
            {titleComponent}
        </motion.div>
    );
};

// Define proper prop types for Card
export const Card = ({
    rotate,
    scale,
    // translate,
    children,
}: {
    rotate: MotionValue<number>;
    scale: MotionValue<number>;
    translate: MotionValue<number>;
    children: React.ReactNode;
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                boxShadow:
                    "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className="max-w-5xl -mt-16 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
        >
            <div className="h-full w-full overflow-hidden rounded-2xl  md:rounded-2xl md:p-4">
                {children}

                {/* Description component goes here */}
                <div className="mt-8">
                    <div className="h-full flex flex-col items-center">
                        {children}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
