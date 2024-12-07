"use server";
import axios from "axios";

export const userSignUp = async (data: FormData): Promise<void> => {
    try {
        const response = await axios.post(
            "https://biletebi-back-end.onrender.com/Users/register",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        return response.data;
    } catch (error) {
        console.error("Error creating User:", error);
        throw error;
    }
};
