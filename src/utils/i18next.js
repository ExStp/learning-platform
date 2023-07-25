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
						"change theme": "Change theme",
						increment: "increment",
						decrement: "decrement",
					},
					input: {
						"send message": "send message",
					},
				},
			},
			ru: {
				translation: {
					title: 'Это приложение "чат"',
					btn: {
						"change theme": "Сменить тему",
						increment: "прибавить",
						decrement: "отнять",
					},
					input: {
						"send message": "отправить сообщение",
					},
				},
			},
		},
	});
