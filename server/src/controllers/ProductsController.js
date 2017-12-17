const {Product} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let products = null
      const search = req.query.search
      if (search) {
        products = await Product.findAll({
          where: {
            $or: [
              'product', 'cost', 'tax'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        products = await Product.findAll({
          limit: 10
        })
      }
      res.send(products)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the products'
      })
    }
  },
  async show (req, res) {
    try {
      const product = await Product.findById(req.params.Id)
      res.send(product)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the products'
      })
    }
  },
  async post (req, res) {
    try {
      const product = await Product.create(req.body)
      res.send(product)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the product'
      })
    }
  },
  async put (req, res) {
    try {
      await Product.update(req.body, {
        where: {
          id: req.params.Id
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the product'
      })
    }
  },
  async remove (req, res) {
    try {
      const {Id} = req.params
      const product = await Product.findOne({
        where: {
          id: Id
        }
      })
      if (!product) {
        return res.status(403).send({
          error: 'you do not have access to this product'
        })
      }
      await product.destroy()
      res.send(product)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the product'
      })
    }
  }
}