export type User = {
	id: string;
	name: string;
	email: string;
	pass: string | null;
};

export type Task = {
	id?: string;
	title: string;
	description: string;
	state: string;  
	startDate: string;
	endDate: string;
};


