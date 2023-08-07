const zipfRanges = {
	A1: [1, 2],
	A2: [2, 3],
	B1: [3, 4],
	B2: [4, 5],
	C1: [5, 6],
	C2: [6, 7],
};

// const perMillionRanges = {
// 	A1: [0, 10],
// 	A2: [10, 20],
// 	B1: [20, 30],
// 	B2: [30, 40],
// 	C1: [40, 50],
// 	C2: [50, 100],
// };

// const diversityRanges = {
// 	A1: [0, 0.2],
// 	A2: [0.2, 0.4],
// 	B1: [0.4, 0.6],
// 	B2: [0.6, 0.8],
// 	C1: [0.8, 1],
// 	C2: [1, 2],
// };

// Функция для определения уровня слова на основе его частоты
export const determineLevel = (frequency: number): string => {
	let level = "";
	for (const [key, [min, max]] of Object.entries(zipfRanges)) {
		if (frequency >= min && frequency < max) {
			level = key;
			break;
		}
	}
	return level || "Unknown";
};
