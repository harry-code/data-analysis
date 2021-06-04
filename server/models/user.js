module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        cutoIncrement: true
      },
      username: {
        type: DataTypes.STRING(50), // 定义类型(长度)
        allowNull: false // 是否允许为 NULL
      },
      password: {
        type: DataTypes.STRING(50), // 定义类型(长度)
        allowNull: false, // 是否允许为 NULL
      },
  })
  }