import Sequelize, { Model } from 'sequelize';

class User extends Model {
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
				firstName: Sequelize.STRING,
				lastName: Sequelize.STRING,
				birthDate: Sequelize.DATEONLY,
				cpf: Sequelize.STRING,
				email: Sequelize.STRING,
				password: Sequelize.STRING,
				phoneNumber: Sequelize.STRING,
				genre: Sequelize.STRING,
				statusId: {
					type: Sequelize.UUID,
					references: {
						model: 'Statuses',
						key: 'id',
						onUpdate: 'CASCADE',
						onDelete: 'SET NULL',
					},
				},
			},
			{
				sequelize,
				tableName: 'Users',
				modelName: 'User',
			}
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.Status, {
			foreignKey: 'statusId',
			as: 'status',
		});
	}
}

export default User;
