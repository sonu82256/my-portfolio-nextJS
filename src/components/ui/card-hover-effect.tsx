import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Sample data
export const projects = [
    {
        title: "Web Development",
        myskill: [
            [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5G8eECOD1PyiahPpMfAccK5bsb-iT5ozbw&s",
                "React",
            ],
            ["https://cdn-icons-png.freepik.com/512/189/189253.png", "nextJS"],
        ],
    },
];

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        myskill: [string, string][]; // Tuple of [image, skill name]
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card className="flex flex-col items-center justify-center">
                        <CardTitle className="text-center mt-0 text-lg text-white">
                            {item.title}
                        </CardTitle>

                        {/* Render myskill with image and name */}
                        <div className="flex justify-center flex-wrap mt-4">
                            {item.myskill.map(([imageUrl, skill], skillIdx) => (
                                <div
                                    key={skillIdx}
                                    className="inline-flex items-center mx-2 mt-2"
                                >
                                    <button className="flex items-center shadow-[0_0_0_3px_#000000_inset] px-4 py-2 bg-transparent border border-black dark:border-gray-600 dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        <img
                                            src={imageUrl}
                                            alt={skill}
                                            className="w-6 h-6 mr-2"
                                        />
                                        {skill}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return ( //from-indigo-500 via-purple-500
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-indigo-500 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4
            className={cn(
                "text-zinc-100 font-bold tracking-wide mt-4",
                className
            )}
        >
            {children}
        </h4>
    );
};
