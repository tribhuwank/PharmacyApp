module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      
      product: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      cost: {
          type: DataTypes.DECIMAL,
          allowNull:false
        },
      tax: DataTypes.DECIMAL
      
    })
  
    Product.associate = function (models) {
    }
  
    return Product
  }