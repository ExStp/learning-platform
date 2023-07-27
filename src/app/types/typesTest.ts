// JUST PRACTICE TYPESCRIPT
export const arrNum: Array<number> = [1, 23, 4];
export const arrStr: Array<string> = ["1", "string"];

//Tuple
export const user: [string, string, number] = ["andrey", "araibov@mail.ru", 79825270409];

//Interfaces
interface IUser {
	userData: {
		id: number;
		email: string;
		password: string;
	};
}

interface IProps {
	readonly userData: IUser;
}

export const ShowUser = (userData: IProps) => {
	console.log(userData);
};
