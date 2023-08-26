import AbstractFactory from '../../../global/abstract/AbstractFactory';
import StatusesRepository from '../../../global/repositories/StatusesRepository';
import GetStatusByCodeStrategy from '../strategies/GetStatusByCodeStrategy';
import VerifyRequiredFieldCodeStrategy from '../strategies/VerifyRequiredFieldCodeStrategy';

class GetStatusByCodeFactory extends AbstractFactory {
	constructor() {
		const strategies = [
			new VerifyRequiredFieldCodeStrategy(),
			new GetStatusByCodeStrategy(StatusesRepository),
		];

		super(strategies);
	}
}

export default GetStatusByCodeFactory;
