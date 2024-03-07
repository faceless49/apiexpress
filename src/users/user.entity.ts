import { hash } from 'bcryptjs';

// Entities Используются для инкапсуляции бизнес логики, которая относится к опред. объекту
// Должны быть простыми и содержать только логику, которая относится к объекту
export class User {
	private _password: string;

	constructor(
		private readonly _email: string,
		private readonly _name: string,
	) {}

	get email(): string {
		return this._email;
	}

	get name(): string {
		return this._name;
	}

	get password(): string {
		return this._password;
	}

	public async setPassword(password: string): Promise<void> {
		this._password = await hash(password, 10);
	}
}
