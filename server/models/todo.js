const todo = (Sequelize, DataTypes) => {
    const model = Sequelize.define('todo', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        done: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    }, {
        tableName: 'todo', // 실제 db 테이블명
        freezeTableName: true,
        timestamps: false,
    });
    return model;
};

module.exports = todo;