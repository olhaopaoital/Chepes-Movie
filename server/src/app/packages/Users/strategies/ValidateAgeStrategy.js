import { MINIMUM_AGE } from '../../../constants';
import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

/**
 * Strategy to validate if a person's age is above 18 years.
 *
 * @extends AbstractStrategy
 */
export default class ValidateAgeStrategy extends AbstractStrategy {
	constructor() {
		super();
	}

	/**
	 * Compare the birth date with today to determine if the person is at least 18 years old.
	 *
	 * @param {Object} data - The data object containing birthDate property.
	 * @param {string} data.birthDate - The birth date in the format 'YYYY-MM-DD'.
	 * @throws {Error} Throws an error if the person's age is less than 18.
	 */
	async execute({ birthDate }) {
		if (
			new Date().getFullYear() - new Date(birthDate).getFullYear() <
			MINIMUM_AGE
		) {
			this.throwError(`Minimum age: ${MINIMUM_AGE} years`, 400);
			return;
		}
	}
}
