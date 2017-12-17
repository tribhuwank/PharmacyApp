const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const CustomersController = require('./controllers/CustomersController')
const ProductsController = require('./controllers/ProductsController')


const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)

  app.get('/customers',
  CustomersController.index)
  app.get('/customers/:Id',
  CustomersController.show)
  app.post('/customers',
  CustomersController.post)
  app.delete('/customers/:Id',
  isAuthenticated,  
  CustomersController.remove)


  app.get('/products',
    isAuthenticated,
    ProductsController.index)
  app.post('/products',
    isAuthenticated,
    ProductsController.post)
  app.delete('/products/:Id',
    isAuthenticated,  
    ProductsController.remove)

  
}