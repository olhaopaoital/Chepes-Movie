import AbstractFacade from '../../global/abstract/AbstractFacade';
import { GetByCpfCommand, UpdatePasswordCommand, GetAllUsersCommand } from './commands';

export default class UserFacade extends AbstractFacade {
	constructor(UserController) {
		super(UserController);

		this.getByCpfCommand = new GetByCpfCommand(UserController);
		this.getAllUsersCommand = new GetAllUsersCommand(UserController);
		this.updatePasswordCommand = new UpdatePasswordCommand(UserController);

		this.getByCpf = this.getByCpf.bind(this);
		this.getAllUsers = this.getAllUsers.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
	}

	async getByCpf(req, res, next) {
		try {
			await this.getByCpfCommand.execute(req, res, next);
		} catch (error) {
			this.handleError(res, error);
		}
	}

	async getAllUsers(req, res, next) {
		try {
			await this.getAllUsersCommand.execute(req, res, next);
		} catch (error) {
			this.handleError(res, error);
		}
	}

	async updatePassword(req, res, next) {
		try {
			await this.updatePasswordCommand.execute(req, res, next);
		} catch (error) {
			this.handleError(res, error);
		}
	}
}
