import express from 'express'
import chalk from 'chalk'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './src/routers/battlestars.Router.js'
import handdleError from './src/middlewares/handdleError.js'
import 'express-async-errors'

dotenv.config()

const server = express()
server.use(cors())
server.use(express.json())
server.use(router)
server.use(handdleError)

server.listen(process.env.PORT|| 5000,()=>{
    console.log(chalk.yellow(`Backend up on PORT:${process.env.PORT}`))
})
server.listen