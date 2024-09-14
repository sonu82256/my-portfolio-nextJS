"use client";
import React, { useState } from "react";
import { Menu, MenuItem,HoveredLink } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";



const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
        <div
            className={cn(
                "md:fixed md:top-10 md:inset-x-0 md:max-w-2xl md:mx-auto  md:z-50 hidden sm:block",
                className
            )}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="About"
                    ></MenuItem>
                </Link>
                <Link href={"/skill"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Skill"
                    ></MenuItem>
                </Link>
                <Link href={"/experience"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Experience"
                    ></MenuItem>
                </Link>
                <Link href={"/project"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Project"
                    ></MenuItem>
                </Link>

                <Link href={"/education"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Education"
                    ></MenuItem>
                </Link>
                {/* <Link href={"/contact"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Contact"
                    ></MenuItem>
                </Link> */}
            </Menu>
        </div>

        

        <div
            className={cn(
                "fixed top-10 right-6 w-10 mx-2 z-50 sm:hidden block",
                className
            )}
        >
            <Menu setActive={setActive}>
                <Link href={"#"}>
                <MenuItem setActive={setActive} active={active} item={""}>
                    <div className="text-sm grid grid-cols-3 gap-10 p-4 mr-72 ">
                        <HoveredLink href="$">Home</HoveredLink>
                        <HoveredLink href="#">Skill</HoveredLink>
                        <HoveredLink href="#">Experience</HoveredLink>
                        <HoveredLink href="#">Projects</HoveredLink>
                        <HoveredLink href="#">Education</HoveredLink>
                    </div>
                 </MenuItem>
                </Link>
                {/* <Link href={"/skill"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Skill"
                    ></MenuItem>
                </Link>
                <Link href={"/experience"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Experience"
                    ></MenuItem>
                </Link>
                <Link href={"/project"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Project"
                    ></MenuItem>
                </Link>

                <Link href={"/education"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Education"
                    ></MenuItem>
                </Link>
                {/* <Link href={"/contact"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Contact"
                    ></MenuItem>
                // </Link> */} 
            </Menu>
        </div>
        </>
    );
};

export default Navbar;
