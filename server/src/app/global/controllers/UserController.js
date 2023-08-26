import AbstractController from '../abstract/AbstractController';
import { User } from '../domains';
import {
	CreateUserFactory,
	DeleteUserLogicallyFactory,
	GetUserByCpfFactory,
	GetUserByIdFactory,
	UpdateUserFactory,
	UpdateUserPasswordFactory,
} from '../../packages/Users/factories';

class UserController extends AbstractController {
	constructor() {
		super();
		this.create = this.create.bind(this);
		this.getById = this.getById.bind(this);
		this.getByCpf = this.getByCpf.bind(this);
		this.update = this.update.bind(this);
		this.deleteLogically = this.deleteLogically.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
	}

	async create(req, res, next) {
		let user = new User(req.body);

		const factory = new CreateUserFactory();
		const result = await factory.execute(user);
		res.json(result);
	}

	async update(req, res, next) {
		let user = new User(req.body);

		const factory = new UpdateUserFactory();
		const result = await factory.execute(user);
		res.json(result);
	}

	async updatePassword(req, res, next) {
		let user = new User(req.body);
		user.newPassword = req.body.newPassword || '';
		user.passwordConfirmation = req.body.passwordConfirmation || '';

		const factory = new UpdateUserPasswordFactory();
		const result = await factory.execute(user);
		res.json(result);
	}

	async deleteLogically(req, res, next) {
		let user = new User(req.body);

		const factory = new DeleteUserLogicallyFactory();
		const result = await factory.execute(user);
		res.json(result);
	}

	async getById(req, res, next) {
		let user = new User({
			id: req.params.id,
		});

		const factory = new GetUserByIdFactory();
		const result = await factory.execute(user);
		res.json(result);
	}

	async getByCpf(req, res, next) {
		let user = new User({
			cpf: req.params.cpf,
		});

		const factory = new GetUserByCpfFactory();
		const result = await factory.execute(user);
		res.json(result);
	}
}

export default new UserController();
