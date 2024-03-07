import { UserLoginDto } from '../users/dto/user-login.dto';
import { UserRegisterDto } from '../users/dto/user-register.dto';
import { User } from '../users/user.entity';

export interface IUserService {
	createUser: (dto: UserRegisterDto) => Promise<User | null>;
	validateUser: (dto: UserLoginDto) => Promise<boolean>;
}
