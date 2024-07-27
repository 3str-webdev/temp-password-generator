import type { PasswordConfig } from "./types";
import { pickRandom, shuffle } from "./utils";

export class PasswordGenerator {
	private _config: PasswordConfig;

	constructor(config: PasswordConfig) {
		this._config = config;
	}

	private _getGenerationObjectsList() {
		const { alphabets, length } = this._config;

		return alphabets.map(({ chars, amount, intensity }) => {
			const baseGenObj = {
				chars,
			};

			if (amount) {
				return {
					...baseGenObj,
					amount,
				};
			}

			if (intensity) {
				return {
					...baseGenObj,
					amount: Math.floor(length * intensity),
				};
			}

			return {
				...baseGenObj,
				amount: Math.floor(length / alphabets.length),
			};
		});
	}

	public generate() {
		const result: string[] = [];

		const { length } = this._config;

		const generationObjectsList = this._getGenerationObjectsList();

		const amountOfChardExcludeLastAlphabet = generationObjectsList.reduce(
			(acc, item, i) => {
				if (i >= generationObjectsList.length - 1) {
					return acc;
				}

				return acc + item.amount;
			},
			0,
		);

		generationObjectsList[generationObjectsList.length - 1].amount =
			length - amountOfChardExcludeLastAlphabet;

		for (const generationObject of generationObjectsList) {
			const { chars, amount } = generationObject;

			for (let i = 0; i < amount; ++i) {
				result.push(pickRandom(chars));
			}
		}

		return shuffle(result).join("");
	}
}

export { preparedChars } from "./constants/prepared-chars";
export type { Alphabet, PasswordConfig } from "./types";
export { createConfigWithEvenlyAlphabets } from "./utils";
