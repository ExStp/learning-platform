import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { FC } from "react";
import { WordExamples } from "./AccordionItems/WordExamples";
import { WordSynonyms } from "./AccordionItems/WordSynonyms";
import { WordAntonyms } from "./AccordionItems/WordAntonyms";

interface IProps {
	word: string;
}

export const DetailsAccordion: FC<IProps> = ({ word }) => {
	console.log(word);
	return (
		<Accordion allowMultiple>
			<AccordionItem header={({ state }) => `Examples: ${state.isEnter}`}>
				{({ toggle, state }) => {
					if (state.isEnter) {
						return (
							<>
								{state.isEnter ? <WordExamples word={word} /> : null}

								<button className="btn" onClick={() => toggle(!state.isEnter)}>
									{state.isEnter ? "Close item" : "Open item"}
								</button>
							</>
						);
					}
				}}
			</AccordionItem>

			<AccordionItem header={({ state }) => `Synonyms: ${state.isEnter}`}>
				{({ toggle, state }) => {
					if (state.isEnter) {
						return (
							<>
								{state.isEnter ? <WordSynonyms word={word} /> : null}

								<button className="btn" onClick={() => toggle(!state.isEnter)}>
									{state.isEnter ? "Close item" : "Open item"}
								</button>
							</>
						);
					}
				}}
			</AccordionItem>

			<AccordionItem header={({ state }) => `Antonyms: ${state.isEnter}`}>
				{({ toggle, state }) => {
					if (state.isEnter) {
						return (
							<>
								{state.isEnter ? <WordAntonyms word={word} /> : null}

								<button className="btn" onClick={() => toggle(!state.isEnter)}>
									{state.isEnter ? "Close item" : "Open item"}
								</button>
							</>
						);
					}
				}}
			</AccordionItem>
		</Accordion>
	);
};
