import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserratSans = localFont({
    src: "./fonts/Montserrat-VariableFont_wght.ttf",
    variable: "--font-montserrat-sans",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Team 5",
    description: "Team 5 x Doer collab",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserratSans.variable} antialiased scroll-hidden`}>
                <div className="app-container">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
