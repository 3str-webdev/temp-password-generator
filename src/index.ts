import {
	type PasswordConfig,
	PasswordGenerator,
	createConfigWithEvenlyAlphabets,
	preparedChars,
} from "./password-generator";

const passwordGeneratorConfig: PasswordConfig = {
	length: 100,
	alphabets: [
		{
			chars: preparedChars.digits,
			amount: 10,
		},
		{
			chars: preparedChars.lowerLetters,
			amount: 10,
		},
	],
};

const passwordGenerator = new PasswordGenerator(passwordGeneratorConfig);

const password = passwordGenerator.generate();

console.log(password);
