"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
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
                <Link href={"/contact"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Contact"
                    ></MenuItem>
                </Link>
            </Menu>
        </div>
    );
};

export default Navbar;
