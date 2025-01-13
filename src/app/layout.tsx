import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./providers";
import { auth } from "@/auth";

const montserratSans = localFont({
    src: "./fonts/Montserrat-VariableFont_wght.ttf",
    variable: "--font-montserrat-sans",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Team 5",
    description: "Team 5 x Doer collab",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    return (
        <html lang="en">
            <body className={`${montserratSans.variable} antialiased scroll-hidden`}>
                <Providers>
                    <div className="app-container">
                        <Header session={{ user: session ? session.user : null }} />
                        {children}
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
