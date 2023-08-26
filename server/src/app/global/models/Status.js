import Sequelize, { Model } from 'sequelize';

class Status extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: Sequelize.UUID,
					defaultValue: Sequelize.UUIDV4,
					primaryKey: true,
					autoIncrement: false,
					allowNull: false,
				},
				code: Sequelize.STRING,
				description: Sequelize.STRING,
			},
			{
				sequelize,
				tableName: 'Statuses',
				modelName: 'Status',
			}
		);

		return this;
	}

	static associate(model) {}
}

export default Status;
