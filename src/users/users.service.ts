import { injectable } from 'inversify';
import { UserLoginDto } from '../users/dto/user-login.dto';
import { UserRegisterDto } from '../users/dto/user-register.dto';
import { User } from '../users/user.entity';
import { IUserService } from '../users/users.service.interface';

@injectable()
export class UsersService implements IUserService {
	async createUser({ email, password, name }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		await newUser.setPassword(password);

		return null;
	}

	async validateUser({}: UserLoginDto): Promise<boolean> {
		return true;
	}
}
