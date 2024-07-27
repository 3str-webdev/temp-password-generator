import type {
	CreateConfigWithEvenlyAlphabetsOptions,
	PasswordConfig,
} from "../types";

export const random = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const pickRandom = <T = unknown>(collection: T[]): T => {
	return collection[random(0, collection.length - 1)];
};

export const shuffle = <T = unknown>(collection: T[]): T[] => {
	const freeIndexList = Array.from(
		{ length: collection.length },
		(_, index) => index,
	);
	const result: T[] = [];

	for (let i = 0; i < collection.length; ++i) {
		const itemIndex = pickRandom(freeIndexList);

		result.push(collection[itemIndex]);
		freeIndexList.splice(itemIndex, 1);
	}

	return result;
};

export const getCharsArrBasedOnCharCode = (
	startCharCode: number,
	amountOfChars: number,
): string[] => {
	return Array.from<unknown, string>(
		{
			length: amountOfChars,
		},
		(_, index) => {
			return String.fromCharCode(startCharCode + index);
		},
	);
};

export const createConfigWithEvenlyAlphabets = ({
	length,
	charsMatrix,
}: CreateConfigWithEvenlyAlphabetsOptions): PasswordConfig => {
	return {
		length: length,
		alphabets: charsMatrix.map((chars) => {
			return {
				chars,
				intensity: chars.length / length,
			};
		}),
	};
};
