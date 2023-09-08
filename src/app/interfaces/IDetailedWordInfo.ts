export interface IExamples {
	word: string;
	examples: Array<string>;
}

export interface ISynonyms {
	word: string;
	synonyms: Array<string>;
}

export interface IAntonyms {
	word: string;
	antonyms: Array<string>;
}

export interface IFrequency {
	word: string;
	frequency: {
		zipf: number;
		perMillion: number;
		diversity: number;
	};
}
