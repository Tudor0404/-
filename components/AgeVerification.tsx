"use client";
import { MouseEventHandler } from "react";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

type AppProps = {
	isOver18: MouseEventHandler;
	isNotOver18: MouseEventHandler;
};

export default function AgeVerification({ isOver18, isNotOver18 }: AppProps) {
	return (
		<div className="w-full ">
			<div className="absolute w-screen h-screen top-0 left-0 bgsvg -z-10"></div>

			<main
				className={`flex justify-start items-start m-auto h-screen flex-col text-main bg-transparent ${montserrat.variable} font-sans`}
			>
				<div className="mt-[280px] ml-[50px]">
					<div className=" text-5xl font-sans">ARE YOU OVER 18?</div>
					<div className="text-2xl my-5 ">
						Our products are only suitable for adults
					</div>
					<div className=" flex flex-row justify-between items-center mx-10">
						<button className="bg-main flex justify-center items-center px-5 py-2 rounded-xl text-white text-xl font-bold w-[80px]">
							Yes
						</button>
						<button className="border-2 border-main flex justify-center items-center px-5 py-2 rounded-xl text-main text-xl font-bold w-[80px]">
							No
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}
