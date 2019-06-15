const express = require('express')
const bodyParser =  require('body-parser')
const path = require('path')

const productRouter = require('./routes/product')
const shopRouter = require('./routes/shop')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, './public')))
app.set('view engine', 'pug')
app.set('views', 'views')

app.use(shopRouter)
app.use('/admin', productRouter.router)


// app.use((req, res, next)=> {
//     console.log('middleware 1st');
//     next();
// })

// app.use((req, res, next)=> {
//     console.log('middleware 2nd');
//     res.sendStatus(200);
// })
// app.use('/', (req, res, next)=> {
//     console.log('home');
//     // res.send('home');
//     res.sendFile(path.join(__dirname, './views/index.html'))
    
// })

// app.use('/user',(req, res, next)=> {
//     console.log('user');
//     res.send('user');

// })

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, './views/404.html'))
})
app.listen(3000);   