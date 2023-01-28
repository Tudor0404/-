"use client";

export default function Button({ onClick, className, children }: any) {
	return (
		<button className={"p-2 under-hover " + className} onClick={onClick}>
			{children}
		</button>
	);
}
