import { Sequelize } from 'sequelize';
import dbConfig from '../config/database';
import cls from 'cls-hooked';
const namespace = cls.createNamespace('my-transaction-ns');
Sequelize.useCLS(namespace);

//Models
import Statuses from '../app/global/models/Status';
import User from '../app/global/models/User';

const models = [Statuses, User];

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(dbConfig);

		models
			.map((model) => model.init(this.connection))
			.map(
				(model) => model.associate && model.associate(this.connection.models)
			);
	}
}

export default new Database();
