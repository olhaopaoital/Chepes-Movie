import AbstractFactory from '../../../global/abstract/AbstractFactory';
import { UserRepository } from '../../../global/repositories';
import { GetAllUsersStrategy } from '../strategies';

class GetAllUsersFactory extends AbstractFactory {
	constructor() {
		super([
			new GetAllUsersStrategy(UserRepository),
		]);
	}
}
export default GetAllUsersFactory;
