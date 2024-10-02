import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ReduxProvider} from "@/app/ReduxProvider";

const farsiFont = localFont({
    src: "./fonts/IRANSansWeb(FaNum).woff", // Ensure this path is correct
    variable: "--font-farsi-shabnam",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "todo list project",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl"> {/* Setting Farsi as the default language and RTL direction */}
        <body
            className={`${farsiFont.variable}`}
            style={{fontFamily: 'var(--font-farsi-shabnam)'}} // Set Shabnam font as default
        >
        <ReduxProvider>
            {children}
        </ReduxProvider>
        </body>
        </html>
    );
}
