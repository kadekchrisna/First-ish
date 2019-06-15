const express = require('express')
const path = require('path')

const router = express.Router()

const productData = require('./product')


router.get('/', (req, res, next) => {
    const products = productData.product
    res.render('shop', { products, docTitle: 'Shop' })
})

module.exports = router
