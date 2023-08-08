import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWordExplore } from "../interfaces/IWordExplore";
import { IAntonyms, IExamples, ISynonyms } from "../interfaces/IDetailedWordInfo";

const API = {
	baseURL: "https://wordsapiv1.p.rapidapi.com/words/",
	headers: {
		accept: "application/json",
		"X-RapidAPI-Key": "73a2cdea2emsh63ae134245ff7b8p152068jsn2debd7a456f6",
		"X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
	},
};

export const wordsAPI = createApi({
	reducerPath: "wordsAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: API.baseURL,
		prepareHeaders: (headers) => {
			for (const [key, value] of Object.entries(API.headers)) {
				headers.set(key, value);
			}
		},
	}),
	endpoints: (build) => ({
		fetchExploreWord: build.query<IWordExplore, string>({
			query: (word) => ({
				url: word,
			}),
		}),
		fetchExamples: build.query<IExamples, string>({
			query: (word) => ({
				url: `${word}/examples`,
			}),
		}),
		fetchSynonyms: build.query<ISynonyms, string>({
			query: (word) => ({
				url: `${word}/synonyms`,
			}),
		}),
		fetchAntonyms: build.query<IAntonyms, string>({
			query: (word) => ({
				url: `${word}/antonyms`,
			}),
		}),
	}),
});
