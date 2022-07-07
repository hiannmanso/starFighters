import { NextFunction, Request, Response } from 'express';
import joi from 'joi'
import { userSchema } from '../schemas/usersSchemas.js';



function validateUser(req: Request,res: Response,next: NextFunction) {
  
    const {error }= userSchema.validate(req.body)
    if (error){
        return res
				.status(422)
				.send(error.details.map((detail:any) => detail.message))
		}
		next()
    
}

export default validateUser