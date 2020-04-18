module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING(100)
    },
    username: {
      type: DataTypes.STRING(100),
      unique: true
    },
    password: {
      type: DataTypes.STRING(100)
    }
  });

  User.associate = models => {
    User.hasMany(models.Note, { foreignKey: 'user_id' });
  };

  return User;
};
