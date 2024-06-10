import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "dashboard page",
    description: "dashboard climat-guardian",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
