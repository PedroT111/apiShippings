module.exports = (sequelize, Sequelize) => {
  const Shippings =  sequelize.define('shippings', {
      id:{
          type: Sequelize.INTEGER,
          primaryKey : true,
          autoIncrement: true,
          allowNull: false
      },
      customer:{
        type: Sequelize.STRING(100),
        allowNull: false
      },
      describ: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING(10),
        validate: {
          isIn: {
            args:[['inprocess', 'pending', 'delivered']],
            msg:"status must be one of these values ['inprocess', 'pending', 'delivered']"
          }
        },
        allowNull: false
      },
      origin_lat:{
        type: Sequelize.DECIMAL(11,8),
        allowNull: false
      },
      origin_long:{
        type: Sequelize.DECIMAL(11,8),
        allowNull: false
      },
      current_lat:{
        type: Sequelize.DECIMAL(11,8),
        allowNull: false
      },
      current_long:{
        type: Sequelize.DECIMAL(11,8),
        allowNull: false

      },
      end_lat:{
        type: Sequelize.DECIMAL(11,8),
        allowNull: false

      },
      end_long:{
        type: Sequelize.DECIMAL(11,8),
        allowNull: false

      },
      aprox_distance: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      finish_at:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
    return Shippings;

  }








