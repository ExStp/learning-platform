import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FC, ReactNode } from "react";
import { WordExamples } from "./AccordionItems/WordExamples";
import { WordSynonyms } from "./AccordionItems/WordSynonyms";
import { WordAntonyms } from "./AccordionItems/WordAntonyms";
import styles from "./styles.module.css";
import { Typography } from "@mui/joy";

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
		<Accordion className={styles.accordion}>
			<AccordionItem header="Examples">
				{({ state }) => {
					if (state.isEnter) {
						return <WordExamples word={word} />;
					}
				}}
			</AccordionItem>

			<AccordionItem header="Synonyms">
				{({ state }) => {
					if (state.isEnter) {
						return <WordSynonyms word={word} />;
					}
				}}
			</AccordionItem>

			<AccordionItem header="Antonyms">
				{({ state }) => {
					if (state.isEnter) {
						return <WordAntonyms word={word} />;
					}
				}}
			</AccordionItem>
		</Accordion>
	);
};
