import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

/**
 * Strategy to validate user email availability.
 *
 * @extends AbstractStrategy
 */
export default class VerifyEmailExistenceStrategy extends AbstractStrategy {
	constructor(userRepository) {
		super();
		this.userRepository = userRepository;
	}

	/**
	 * Validates user email availability in the database.
	 *
	 * @param {User} data - The user data object.
	 * @throws {Error} Throws an error if the informed email was not available.
	 */
	async execute(data) {
		const { email } = data;

		if (!email) {
			this.throwError('Email address not informed', 400);
			return;
		}

		const user = await this.userRepository.getByEmail(email);

		if (user) {
			if (!data.id && user.id) {
				this.throwError('Email address already in use', 400);
				return;
			} else if (data.id && data.id !== user.id) {
				this.throwError('Email address already in use', 400);
				return;
			}
		}
	}
}
