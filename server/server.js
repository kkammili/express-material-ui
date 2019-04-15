import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'
import chalk from 'chalk'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {useCreateIndex:true, useNewUrlParser:true})
mongoose.connection.on('error', () => {
  console.log(`unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info(chalk.red('Server started on port ======>'), chalk.blue(config.port))
})
