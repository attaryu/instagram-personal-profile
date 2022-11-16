import React, { useState, useEffect } from "react";
import { BsInstagram } from "react-icons/bs/index";
import { MdErrorOutline } from "react-icons/md";

import Card from "./Card";

import { getMedia, getUserMedia, getUserProfile } from "../utils/api";

export default function CardBox() {
	const [user, setUser] = useState(null);
	const [mediaUser, setMediaUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getUserProfile().then((response) => {
			console.log(response);
			if (response) {
				setUser(response);
			}
		});
		getUserMedia()
			.then((response) => {
				if (response) {
					setMediaUser(response);
				}
			})
			.then(() => {
				if (mediaUser) {
					mediaUser.map((data) => getMedia(data.id));
				}
			})
			.then(() => setLoading(false));
	}, [mediaUser]);

	if (loading) {
		return (
			<div className="grid h-screen w-full place-items-center dark:bg-zinc-900">
				<h1 className="flex animate-pulse items-center dark:text-zinc-100">
					<BsInstagram className="text-2xl" />
					<p className="pl-4 text-lg font-bold">Loading...</p>
				</h1>
			</div>
		);
	}

	if (!mediaUser || !user) {
		return (
			<div className="grid h-screen w-full place-items-center dark:bg-zinc-900">
				<h1 className="flex items-center text-red-600 dark:text-red-400">
					<MdErrorOutline className="text-2xl" />
					<p className="pl-3 text-lg font-bold">Error</p>
				</h1>
			</div>
		);
	}

	return (
		<main className=" grid h-[100vh] w-full grid-cols-1 grid-rows-1/2 bg-white dark:bg-zinc-900">
			<div className="grid w-full place-items-center">
				<h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
					Instagram
					<span className="m-3 inline-block rounded-md bg-gradient-to-br from-purple-600 to-pink-400 py-1 px-3 font-extrabold text-zinc-100 dark:text-black">
						Clone
					</span>
				</h1>
			</div>
			<figure className="grid h-[95%] w-full grid-cols-3 items-center gap-14 px-40">
				{mediaUser.map(
					(media) =>
						media.media_type === "IMAGE" && (
							<Card key={media.id} data={media} />
						)
				)}
			</figure>
		</main>
	);
}
