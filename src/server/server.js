/* eslint-disable no-console */
const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const _ = require('lodash')
const products = require('./initial')

const jsonParser = bodyParser.json()

app.use(cors())

app.get('/product', (req, res) => {
    res.json((products.map((product) => _.omit(product, ['description', 'image']))))
})

app.get('/product/:id', (req, res) => {
    const { id } = req.params
    const product = _.find(products, { id })

    if (!product) {
        res.status(404).send('404: No such article')
        return
    }

    res.json(product)
})

app.post('/product/:id', jsonParser, (req, res) => {
    const { id } = req.params
    const i = _.findIndex(products, { id })

    if (i === -1) {
        res.status(404).send('404: No such article')
        return
    }

    products[i] = _.extend(
        {},
        products[i],
        _.pick(req.body, ['title', 'cost', 'description', 'image'])
    )

    setTimeout(() => {
        res.json(products[i])
    }, 1000)
})

app.listen(3001, () => {
    console.log('Simple back app listening on port 3001!')
})
