import { useTranslation } from "react-i18next";
import { LangSwitcher } from "./components/langSwitcher/LangSwitcher";

function App() {  
	const { t } = useTranslation();

	return (
		<>
			<LangSwitcher />
			<p className="read-the-docs">{t("title")}</p>
		</>
	);
}

export default App;
