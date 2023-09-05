import CustomError from '../domains/CustomError';

export default class AbstractFactory {
	constructor(strategies) {
		this.strategies = strategies;
		this.error = {};
	}

	async execute(data) {
		let result;
		for (const strategy of this.strategies) {
			if (result instanceof CustomError) {
				throw result;
			}
			result = await strategy.execute(data);
		}

		return result;
	}
}
