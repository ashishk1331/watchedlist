"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio"

import Image from "next/image";

export default function Post(props) {
	const height = 180,
		width = 0.68 * height;

	return (
		props.data.image && (
			<li className="max-w-[80px] flex flex-col items-center gap-2 text-primary-foreground">
				<AspectRatio ratio={9 / 16} className="mb-0 w-full">
				    <Image
				    	width={width}
				    	height={height}
					    src={props.data.image}
					    alt={props.data.title}
					    className="rounded-sm object-cover w-full"
				    />
				</AspectRatio>
				<h3 className="scroll-m-20 text-2xl font-semibold w-full">
					{props.data.title}
				</h3>
				<p className="leading-7 [&:not(:first-child)]:mt-6 text-xs w-full">
					{props.data.description.substring(
						0,
						props.data.description.indexOf(" ")
					)}
				</p>
			</li>
		)
	);
}
