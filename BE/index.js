const express = require('express')
const mongoose = require('mongoose')
const app = express();
const routerUser = require('./routes/User.routes')
const routerBook = require('./routes/Book.routes.js')
const path = require('path')
const cors = require('cors')



app.use(express.json())
app.use(cors())
app.use('/uploads' ,  express.static(path.join(__dirname , './uploads')))

const url = 'mongodb+srv://Gedawy:01003098950mo@cluster0.ouio1di.mongodb.net/dental?retryWrites=true&w=majority'

PORT = 4000

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


app.use('/user' , routerUser)
app.use('/book' , routerBook)


