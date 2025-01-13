"use client";

import React from "react";
import Modal from "../Modal";

// import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoIosWarning } from "react-icons/io";
import InputWrapper from "../ui/form/Input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";
import { registerSchema, RegistrationFormValues } from "@/lib/types/registerSchema";

import { useMutation } from "@tanstack/react-query";
import { userSignUp } from "../../../utils/auth/action";

import GoogleLogIn from "./GoogleLogIn";
import { useModal } from "@/context/ModalContext";

const Register = () => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<RegistrationFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            agreeToPrivacyPolcy: false,
        },
        mode: "onChange",
    });
    const { isSignUpModalOpen, closeSignUpModal, openSignInModal } = useModal();

    type registerDataTypes = {
        username: string;
        email: string;
        password: string;
    };

    const { mutate } = useMutation({
        mutationFn: async (formData: registerDataTypes) => {
            return await userSignUp(formData);
        },
        onSuccess: () => {
            console.log("User created successfully");
        },
        onError: (error) => {
            console.error("Error creating User:", error);
        },
    });

    const onSubmitHandler = async (data: RegistrationFormValues) => {
        const registerData = {
            username: data.username,
            email: data.email,
            password: data.password,
        };

        mutate(registerData);
    };

    return (
        <Modal btnText="Sign Up" isOpen={isSignUpModalOpen} onClose={closeSignUpModal}>
            {errors.agreeToPrivacyPolcy && (
                <div className="border border-red w-full rounded-2xl h-12 py-3 px-9 flex justify-center items-center text-white gap-2">
                    <IoIosWarning className="text-2xl text-red" />
                    <p className="text-sm font-medium">{errors.agreeToPrivacyPolcy.message}</p>
                </div>
            )}
            <form
                className="w-full flex flex-col items-center"
                onSubmit={handleSubmit(onSubmitHandler)}
            >
                <div className="flex flex-col gap-3 w-full">
                    <InputWrapper
                        type="text"
                        placeholder="Username"
                        register={register("username")}
                        error={errors.username}
                    />

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
                    <InputWrapper
                        placeholder="Repeat password"
                        register={register("confirmPassword")}
                        error={errors.confirmPassword}
                    />
                    <div className="self-start flex justify-center items-center gap-1.5">
                        <Checkbox
                            defaultChecked={true}
                            id="agreeToPrivacyPolcy"
                            checked={watch("agreeToPrivacyPolcy") || false}
                            onCheckedChange={(value: boolean) =>
                                setValue("agreeToPrivacyPolcy", value === true)
                            }
                            {...register("agreeToPrivacyPolcy")}
                        />
                        <p className=" underline text-white/90 text-base font-medium">
                            Agree terms and rules{" "}
                        </p>
                    </div>
                </div>

                <Button className="w-full mt-12 mb-6  rounded-2xl h-14 py-4 bg-Secondary text-white text-xl font-mediumtransition-colors  duration-200 ease-in-out">
                    Sign up
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
                <button
                    onClick={() => {
                        closeSignUpModal();
                        openSignInModal();
                    }}
                >
                    Log in
                </button>
            </div>
        </Modal>
    );
};

export default Register;
