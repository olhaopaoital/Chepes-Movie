import GetStatusByCodeFactory from '../../packages/Statuses/factories/GetStatusByCodeFactory';
import AbstractController from '../abstract/AbstractController';
import { Status } from '../domains';

class StatusesController extends AbstractController {
	constructor() {
		super();
		this.getByCode = this.getByCode.bind(this);
	}

	async getByCode(req, res, next) {
		let status = new Status({
			code: req.params.code,
		});
		const factory = new GetStatusByCodeFactory();
		const result = await factory.execute(status);
		res.json(result);
	}
}

export default new StatusesController();
