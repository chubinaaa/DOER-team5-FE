"use client";

import React from "react";
import Modal from "../Modal";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import InputWrapper from "../ui/form/Input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";
import { LoginFormValues, loginSchema } from "@/lib/types/registerSchema";

import { useMutation } from "@tanstack/react-query";

import RegisterModal from "./Register";
import GoogleLogIn from "./GoogleLogIn";
import { userSignIn } from "../../../utils/auth/action";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    callFromHeader?: boolean;
}

const LogIn = ({
    isOpen: isLoginOpen,
    onClose: onCloseLoginModal,
    callFromHeader,
}: LoginModalProps) => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),

        mode: "onChange",
    });
    const [isOpenRegisterModal, setIsOpenRegisterModal] = React.useState(false);

    const { mutate } = useMutation({
        mutationFn: async (formData: FormData) => {
            return await userSignIn(formData);
        },
        onSuccess: () => {
            console.log("User Loged In successfully");
        },
        onError: (error) => {
            console.error("Error Loggin User:", error);
        },
    });

    const onSubmitHandler = async (data: LoginFormValues) => {
        console.log("shemovida ak");
        const formData = new FormData();

        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("loginType", "standard");

        mutate(formData);
    };

    return (
        <Modal
            callFromHeader={callFromHeader}
            btnText="Log In"
            isOpen={isLoginOpen}
            onClose={onCloseLoginModal}
        >
            <form
                className="w-full flex flex-col items-center"
                onSubmit={handleSubmit(onSubmitHandler)}
            >
                <div className="flex flex-col gap-3 w-full">
                    <InputWrapper
                        type="email"
                        placeholder="Email"
                        register={register("email")}
                        error={errors.email}
                    />

                    <InputWrapper
                        placeholder="Password"
                        register={register("password")}
                        error={errors.password}
                    />
                    <div className="flex  justify-between w-full ">
                        <div className="self-start flex justify-center items-center gap-1.5">
                            <Checkbox defaultChecked={true} />
                            <p className="  text-white/90 text-base font-medium">Remember</p>
                        </div>
                        <p className="text-white/90 text-base ">Forget Password</p>
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full mt-12 mb-6  rounded-2xl h-14 py-4 bg-Secondary text-white text-xl font-mediumtransition-colors  duration-200 ease-in-out"
                >
                    Sign in
                </Button>
            </form>
            <div className="flex justify-center items-center w-full gap-3">
                <span className="border-b bg-[#6D6F7424]  w-full" />
                <p>Or</p>
                <span className="border-b bg-[#6D6F7424] w-full" />
            </div>

            <GoogleLogIn />
            <div className="flex   justify-center items-center gap-1 text-[#FFFFFF] text-base font-medium">
                <p>Already have an account?</p>

                <RegisterModal
                    isOpen={isOpenRegisterModal}
                    onClose={() => {
                        setIsOpenRegisterModal((prevIsOpen) => !prevIsOpen);
                    }}
                />
            </div>
        </Modal>
    );
};

export default LogIn;
