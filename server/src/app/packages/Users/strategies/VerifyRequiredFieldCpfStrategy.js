import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

/**
 * Strategy to validate if data has the cpf property.
 *
 * @extends AbstractStrategy
 */
export default class VerifyRequiredFieldCpfStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	/**
	 * Verify if the data has the cpf property.
	 *
	 * @param {Object} data - The data object containing the cpf property.
	 * @param {string} data.cpf - A CPF string.
	 * @throws {Error} Throws an error if the data object does not have the cpf property.
	 */
	async execute({ cpf }) {
		if (!cpf) {
			this.throwError('CPF não informado', 400);
			return;
		}
	}
}
