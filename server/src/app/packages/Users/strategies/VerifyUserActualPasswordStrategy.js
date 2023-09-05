import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class VerifyUserPasswordStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute({id, password }) {
		const user = await this.userRepository.getById(id);

		if ((await user.password != password)) {
			this.throwError('Senha atual incorreta.');
			return;
		}
	}
}
