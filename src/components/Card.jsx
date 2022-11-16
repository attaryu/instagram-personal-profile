import justAtr from "../image/just.atr_.jpg";

export default function Card({ data, index }) {
	const story =
		"bg-gradient-to-tr from-one via-two via-three via-four to-five p-[1.8px]";

	const positioning =
		index === 1
			? "order-2 scale-110 -translate-y-5 z-20 shadow-xl shadow-zinc-100 dark:shadow-lg"
			: index === 2
			? "order-1 -rotate-6 scale-90 z-10 translate-x-40 shadow-md dark:shadow-none"
			: "order-3 rotate-6 scale-90 z-0 -translate-x-40 shadow-md dark:shadow-none";

	return (
		<div
			className={`flex h-[85%] w-[90%] flex-col overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 dark:shadow-zinc-800 ${positioning}`}
		>
			<div className="flex w-full items-center py-3 px-4">
				<div
					className={`grid h-8 w-8 place-items-center rounded-full ${
						data.story && story
					}`}
				>
					<div className="grid h-full w-full place-items-center rounded-full bg-zinc-100 p-[1.3px] dark:bg-zinc-800">
						<img
							src={justAtr}
							alt=""
							className="h-full rounded-full object-cover"
						/>
					</div>
				</div>
				<h2 className="pl-5 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
					{data.userName}
				</h2>
			</div>
			<div className="h-full w-full bg-zinc-200 dark:bg-zinc-700">
				<p>{data.caption}</p>
			</div>
		</div>
	);
}
