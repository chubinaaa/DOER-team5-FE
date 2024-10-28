"use client";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

const DUMMY_DATA = [
    { id: 1, name: "Sport" },
    { id: 2, name: "Concert" },
    { id: 3, name: "Theatre" },
    { id: 4, name: "Cinema" },
    { id: 5, name: "Events" },
];

const CategoryDropDown = () => {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState("Select Category");
    console.log(open);

    const isOpenArrow = open ? "rotate-180 ease-in duration-300" : "rotate-0 ease-in duration-300";
    return (
        <div>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger className="flex justify-center items-center gap-3 w-full  ">
                    <IoIosArrowDown className={`${isOpenArrow}`} />
                    {selected ? selected : "Select Category"}
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" className="px-4 py-2 border w-[200px]">
                    <DropdownMenuLabel className="text-white">Categories</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-400" />
                    {DUMMY_DATA.map((item) => (
                        <DropdownMenuItem key={item.id} onSelect={() => setSelected(item.name)}>
                            {item.name}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default CategoryDropDown;
