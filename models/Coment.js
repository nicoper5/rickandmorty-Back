module.exports = (sequelize, Model, DataTypes) => {
  class Coment extends Model {}

  Coment.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.TEXT,
        allow_null: false,
      },
      content: {
        type: DataTypes.TEXT,
        allow_null: false,
      },
      characterId: {
        type: DataTypes.BIGINT.UNSIGNED,
        allow_null: false,
      },
    },
    {
      sequelize,
      modelName: "coment",
    },
  );

  return Coment;
};
