import { getCharsArrBasedOnCharCode } from "../utils";

const UPPER_LETTERS_START_CHAR_CODE = 65;
const LOWER_LETTERS_START_CHAR_CODE = 97;
const AMOUNT_OF_LATIN_LETTERS = 26;

export const preparedChars = {
	digits: Array.from({ length: 10 }, (_, index) => String(index)),
	upperLetters: getCharsArrBasedOnCharCode(
		UPPER_LETTERS_START_CHAR_CODE,
		AMOUNT_OF_LATIN_LETTERS,
	),
	lowerLetters: getCharsArrBasedOnCharCode(
		LOWER_LETTERS_START_CHAR_CODE,
		AMOUNT_OF_LATIN_LETTERS,
	),
	specialSymbols: ["#", "@", "!", "*", "%", "_", "-", ">", "<"],
};
