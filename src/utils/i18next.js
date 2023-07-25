import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng: "ru",
		resources: {
			en: {
				translation: {
					title: "This is a chat app",
					btn: {
						colorTheme: "Change theme",
					},
				},
			},
			ru: {
				translation: {
					title: 'Это приложение "чат"',
					btn: {
						colorTheme: "Сменить тему",
					},
				},
			},
		},
	});
