import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class VerifyRequiredFieldCodeStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	/**
	 * Verify the code property in an object.
	 *
	 * @param {Object} obj - An object with an "code" property.
	 * @param {string} obj.code - The code string.
	 */
	async execute({ code }) {
		if (!code) {
			this.throwError('Código do status não informado', 400);
			return;
		}
	}
}
