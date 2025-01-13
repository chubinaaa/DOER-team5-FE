"use client";

import React from "react";
import { GoGlobe } from "react-icons/go";

import { AnimateLink } from "./animationHelpers/MotionLink";

import LoginModal from "./auth/LogIn";
import LogOut from "./auth/LogOut";

const Header = ({ session }: { session: { user: { name: string; email: string } } | null }) => {
    const [isOpenLoginModal, setIsOpenLoginModal] = React.useState(false);

    return (
        <header className="sticky z-50 top-0 h-[83px] w-full px-[90px] py-4 flex justify-between items-center  bg-primary-bg border-b border-b-[#7d7d8040] ">
            <div>
                <h1 className="text-default-primary font-bold text-lg">BiletHub</h1>
            </div>
            <div className="flex justify-center items-center gap-9">
                <div className="h-10 w-10 rounded-full border border-gray-700 flex justify-center items-center hover:bg-[#6D6F7433] hover:border-[#6D6F744D] transition-colors duration-200 ease-in-out cursor-pointer">
                    <GoGlobe className="text-lg" />
                </div>
                <AnimateLink href="/sell-ticket">Sell Tickets</AnimateLink>

                {!session?.user && (
                    <LoginModal
                        callFromHeader={true}
                        isOpen={isOpenLoginModal}
                        onClose={() => setIsOpenLoginModal((prevIsOpen) => !prevIsOpen)}
                    />
                )}

                {session?.user && <LogOut />}
            </div>
        </header>
    );
};

export default Header;
