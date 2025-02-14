"use server";

import { db } from "@/lib/db";
import { IShelter } from "@/interfaces";

interface IGetSheltersList {
	cityName: string;
	district: string;
}

export async function getSheltersList(data: IGetSheltersList): Promise<IShelter[] | null> {
	let whereCondition = {};

	if (data.cityName && data.district.length) {
		whereCondition = {
			address: {
				city: {
					contains: data.cityName,
					mode: "insensitive",
				},
				district: {
					contains: data.district,
					mode: "insensitive",
				},
			},
		};
	} else if (data.cityName.length) {
		whereCondition = {
			address: {
				city: {
					contains: data.cityName,
					mode: "insensitive",
				},
			},
		};
	}

	try {
		const sheltersList = await db.shelter.findMany({
			where: whereCondition,
			select: {
				id: true,
				name: true,
				type: true,
				address: {
					select: {
						street: true,
						number: true,
						district: true,
						referencePoint: true,
						state: true,
						city: true,
					},
				},
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		return sheltersList;
	} catch (error) {
		console.error(error);
		return null;
	} finally {
		await db.$disconnect();
	}
}
