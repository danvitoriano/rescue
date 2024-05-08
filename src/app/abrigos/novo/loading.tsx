import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<div className="py-8 px-4 lg:px-8 flex flex-col gap-6">
			<Skeleton className="font-semibold text-lg w-36 h-7"/>
			<Skeleton
				className="bg-muted flex flex-col gap-6 rounded-lg p-3"
			>
				<div className="flex flex-col gap-2">
					<Skeleton className="font-medium w-36 h-7 bg-white"/>
					<Skeleton  className="w-full h-11 bg-white"/>
				</div>
				<div className="flex flex-col gap-2">
					<Skeleton className="font-medium w-40 h-7 bg-white"/>
					<div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
						{Array.from({length:6}).map((_,index) => (
							<Skeleton key={index} className="w-full h-11 bg-white"/>
						))}
					</div>
				</div>
				<Skeleton className="w-full h-11 bg-primary/20"/>
			</Skeleton>
		</div>
	);
}





