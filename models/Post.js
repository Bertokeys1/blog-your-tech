const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
const moment = require('moment');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("date_created"))
          .startOf("minute")
          .fromNow();
      },
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
  }
);

module.exports = Post;
