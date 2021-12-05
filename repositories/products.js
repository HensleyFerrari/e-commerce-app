const Repository = require('./respository')

class ProductsRespository extends Repository {

}

module.exports = new ProductsRespository('products.json')