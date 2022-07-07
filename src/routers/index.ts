import {Router } from 'express'
import handdleError from '../middlewares/handdleError.js'
import battleStarsRouter from './battlestars.Router.js'

const router = Router()

router.use(battleStarsRouter)


export default router