import { Router } from 'express'
import { newBattlePOST, rankingUsers } from '../controllers/battleStars.Controler.js'
import validateUser from '../middlewares/validateUsers.js'



const battleStarsRouter = Router()

battleStarsRouter.post('/battle',validateUser, newBattlePOST)
battleStarsRouter.get('/ranking',rankingUsers)

export default battleStarsRouter