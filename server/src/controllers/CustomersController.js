const {Customer} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let customers = null
      const search = req.query.search
      if (search) {
        customers = await Customer.findAll({
          where: {
            $or: [
              'name', 'mobile', 'address'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        customers = await Customer.findAll({
          limit: 10
        })
      }
      res.send(customers)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the customers'
      })
    }
  },
  async show (req, res) {
    try {
      const customer = await Customer.findById(req.params.Id)
      res.send(customer)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the customers'
      })
    }
  },
  async post (req, res) {
    try {
      const customer = await Customer.create(req.body)
      res.send(customer)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the customer'
      })
    }
  },
  async put (req, res) {
    try {
      await Customer.update(req.body, {
        where: {
          id: req.params.Id
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the customer'
      })
    }
  },
  async remove (req, res) {
    try {
      const {Id} = req.params
      const customer = await Customer.findOne({
        where: {
          id: Id
        }
      })
      if (!customer) {
        return res.status(403).send({
          error: 'you do not have access to this customer'
        })
      }
      await customer.destroy()
      res.send(customer)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the customer'
      })
    }
  }

}