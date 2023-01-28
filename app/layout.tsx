import Head from "next/head";
// import "./globals.css";
import "./output.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<head />
			<body
				className={`${montserrat.variable} font-sans min-h-screen min-w-screen bg-bg`}
			>
				{children}
			</body>
		</html>
	);
}
