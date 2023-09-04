import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class GetAllUsersStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute() {
		const users = await this.userRepository.getAllUsers();

		if (!users || users.length === 0) {
		  return 'Nenhum usuário encontrado.';
		}
	  
		return users;
	}
}
