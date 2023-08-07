interface pronunciation {
	all: string;
}

export interface IResult {
	definition: string;
	derivation?: Array<string>;
	examples?: Array<string>;
	partOfSpeech: string;
	similarTo?: Array<string>;
	synonyms?: Array<string>;
	typeOf?: Array<string>;
	[key: string]: Array<string> | string | undefined;
}

interface syllables {
	count: number;
	list: Array<string>;
}

export interface IWordExplore {
	frequency: number;
	pronunciation: pronunciation;
	results: Array<IResult>;
	syllables: syllables;
	word: string;
}
