module.exports = (sequelize, DataTypes) => {
var User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: !0,
      autoIncrement: !0,
      value:1
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        isEmail: true
      },
      unique: true
    }
  });
  return User;
}
