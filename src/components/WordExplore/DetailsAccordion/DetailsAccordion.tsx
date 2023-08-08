import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FC, ReactNode } from "react";
import { WordExamples } from "./AccordionItems/WordExamples";
import { WordSynonyms } from "./AccordionItems/WordSynonyms";
import { WordAntonyms } from "./AccordionItems/WordAntonyms";
import styles from "./styles.module.css";
import { Button, Stack, Typography } from "@mui/joy";

interface AccordionItemProps {
	header: string;
	children: (params: { toggle: () => void; state: { isEnter: boolean } }) => ReactNode;
}

const AccordionItem: FC<AccordionItemProps> = ({ header, children }) => (
	<Item
		header={<Typography>{header}</Typography>}
		className={styles.item}
		buttonProps={{
			className: `${styles.itemBtn}`,
		}}
		contentProps={{ className: styles.itemContent }}
		panelProps={{ className: styles.itemPanel }}
	>
		{children}
	</Item>
);

interface IProps {
	word: string;
}

export const DetailsAccordion: FC<IProps> = ({ word }) => {
	return (
		<Accordion allowMultiple className={styles.accordion}>
			<AccordionItem header="Examples">
				{({ toggle, state }) => {
					if (state.isEnter) {
						return (
							<Stack alignItems="flex-start" spacing={2}>
								{state.isEnter ? <WordExamples word={word} /> : null}
								<Button className="btn" onClick={() => toggle()}>
									{state.isEnter ? "Close" : "Open"}
								</Button>
							</Stack>
						);
					}
				}}
			</AccordionItem>

			<AccordionItem header="Synonyms">
				{({ toggle, state }) => {
					if (state.isEnter) {
						return (
							<Stack alignItems="flex-start" spacing={2}>
								{state.isEnter ? <WordSynonyms word={word} /> : null}
								<Button className="btn" onClick={() => toggle()}>
									{state.isEnter ? "Close" : "Open"}
								</Button>
							</Stack>
						);
					}
				}}
			</AccordionItem>

			<AccordionItem header="Antonyms">
				{({ toggle, state }) => {
					if (state.isEnter) {
						return (
							<Stack alignItems="flex-start" spacing={2}>
								{state.isEnter ? <WordAntonyms word={word} /> : null}
								<Button className="btn" onClick={() => toggle()}>
									{state.isEnter ? "Close" : "Open"}
								</Button>
							</Stack>
						);
					}
				}}
			</AccordionItem>
		</Accordion>
	);
};
