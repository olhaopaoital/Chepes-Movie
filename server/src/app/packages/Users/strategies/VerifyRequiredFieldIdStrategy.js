import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class VerifyRequiredFieldIdStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	/**
	 * Verify the id property in an object.
	 *
	 * @param {Object} obj - An object with an "id" property.
	 * @param {string} obj.id - The ID string.
	 */
	async execute({ id }) {
		if (!id) {
			this.throwError('Id não informado', 400);
			return;
		}
	}
}
