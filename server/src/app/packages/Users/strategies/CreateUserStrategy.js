import AbstractStrategy from '../../../global/abstract/AbstractStrategy';
import User from '../../../global/domains/User';

/**
 * Strategy for creating a user in the database.
 *
 * @extends AbstractStrategy
 */
export default class CreateUserStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	/**
	 * Creates a user in the database.
	 *
	 * @param {User} data - The user data object.
	 * @throws {Error} Throws an error if it was not possible to create the record.
	 * @returns {User} The created User instance.
	 */
	async execute(data) {
		const user = await this.userRepository.createUser(data);

		if (!user) {
			this.throwError('Não foi possível criar o usuário.');
			return;
		}

		return user;
	}
}
