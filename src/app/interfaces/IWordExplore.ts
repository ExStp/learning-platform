interface pronunciation {
	all: string;
}

interface result {
	definition: string;
	examples: Array<string>;
	partOfSpeech: string;
	similarTo: Array<string>;
	synonyms: Array<string>;
}

interface syllables {
	count: number;
	list: Array<string>;
}

export interface IWordExplore {
	frequency: number;
	pronunciation: pronunciation;
	results: result;
	syllables: syllables;
	word: string;
}
