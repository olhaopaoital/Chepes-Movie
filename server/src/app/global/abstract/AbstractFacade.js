import {
	CreateCommand,
	UpdateCommand,
	GetByIdCommand,
	DeleteLogicallyCommand,
} from '../commands';

export default class AbstractFacade {
	/**
	 * Creates an instance of AbstractFacade
	 *
	 * @param {AbstractController} controller - An instance of AbstractController
	 */
	constructor(controller) {
		this.controller = controller;

		this.createCommand = new CreateCommand(controller);
		this.getByIdCommand = new GetByIdCommand(controller);
		this.updateCommand = new UpdateCommand(controller);
		this.deleteLogicallyCommand = new DeleteLogicallyCommand(controller);

		this.create = this.create.bind(this);
		this.getById = this.getById.bind(this);
		this.update = this.update.bind(this);
		this.deleteLogically = this.deleteLogically.bind(this);
	}

	async create(req, res, next) {
		try {
			await this.createCommand.execute(req, res, next);
		} catch (error) {
			this.handleError(res, error);
		}
	}

	async getById(req, res, next) {
		try {
			await this.getByIdCommand.execute(req, res, next);
		} catch (error) {
			this.handleError(res, error);
		}
	}

	async update(req, res, next) {
		try {
			await this.updateCommand.execute(req, res, next);
		} catch (error) {
			this.handleError(res, error);
		}
	}

	async deleteLogically(req, res, next) {
		try {
			await this.deleteLogicallyCommand.execute(req, res, next);
		} catch (error) {
			this.handleError(res, error);
		}
	}

	handleError(res, error) {
		const { status, message, stack } = error;
		res.status(status ? status : 500).json(message);
		// console.log(stack);
	}
}
