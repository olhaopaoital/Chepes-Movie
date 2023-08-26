import AbstractStrategy from '../../../global/abstract/AbstractStrategy';

export default class GetStatusByCodeStrategy extends AbstractStrategy {
	constructor(statusesRepository) {
		super();
		this.statusesRepository = statusesRepository;
	}

	async execute({ code }) {
		const status = await this.statusesRepository.getByCode(code);

		if (!status) {
			this.throwError('Status não encontrado.', 200);
		}

		return status;
	}
}
