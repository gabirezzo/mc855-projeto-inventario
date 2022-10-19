const mongoose = require('mongoose')

const url =
  'mongodb+srv://mc855_db:grupoinventario@cluster0.9pr1cy4.mongodb.net/?retryWrites=true&w=majority'

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log('Connected to the database ')
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`)
  })

console.log(connector)
