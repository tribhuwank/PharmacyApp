module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
     
      name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      mobile: {
          type: DataTypes.STRING,
          allowNull:false
        },
      address: {
          type: DataTypes.STRING,
          allowNull:false
        }
      
    })
  
    Customer.associate = function (models) {
    }
  
    return Customer
  }