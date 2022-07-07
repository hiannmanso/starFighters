import { Request, Response } from "express";

import { findGitUser, responseBattle } from "../services/findGitUser.js";
import { getInfoUsers, newUserPOST } from "../repositories/battleStars.repository.js";

export async function newBattlePOST(req: Request ,res: Response) {
    const {firstUser,secondUser} = req.body

    if (firstUser === secondUser){
        throw {
            response:{
                status:404,
                statusText:'Users must be diferent.'
            }
        };
        
    }
    const starsUserOne =await findGitUser(firstUser)
    const starsUserTwo =await findGitUser(secondUser)
    newUserPOST(firstUser)
    newUserPOST(secondUser)
    const result =await responseBattle(firstUser,secondUser,starsUserOne,starsUserTwo)
    res.status(200).send(result)
}


export async function rankingUsers(req: Request, res: Response) {
   const result = await getInfoUsers()

   res.status(200).send(result)
}