module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    title: {
      type: DataTypes.STRING(100)
    },
    text: {
      type: DataTypes.STRING(500),
      unique: true
    }
  });

  Note.associate = (models) => {
    Note.belongsTo(models.User, { foreignKey: 'user_id' });
  };
  return Note;
};
