export type Alphabet = {
	chars: string[];
  amount?: number;
	intensity?: number;
};

export type PasswordConfig = {
	length: number;
	alphabets: Alphabet[];
};

export type CreateConfigWithEvenlyAlphabetsOptions = {
	length: number;
	charsMatrix: string[][];
};
