import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class UpdateUserPasswordStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	async execute({id, newPassword }) {
		const user = await this.userRepository.updatePassword(id, newPassword);

		if (!user) {
			this.throwError('Não foi possível atualizar as informações.', 400);
			return;
		}

		return 'Senha alterada com sucesso.';
	}
}
