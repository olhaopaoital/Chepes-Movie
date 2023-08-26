import AbstractRepository from '../abstract/AbstractRepository';
import Status from '../models/Status';

class StatusesRepository extends AbstractRepository {
	constructor() {
		super(Status);
	}

	async getByCode(code) {
		return await Status.findOne({
			where: {
				code: code,
			},
		});
	}
}

export default StatusesRepository.getInstance();
