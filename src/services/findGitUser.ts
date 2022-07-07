import axios from "axios"
import { response } from "express"
import {  updateUserBattleDRAW, updateUserBattleLOSE, updateUserBattleWIN } from "../repositories/battleStars.repository.js"

export async function findGitUser(user:string) {
    let starsCount = 0

   
        const infoUser = await axios({
            method:"get",
            url:`https://api.github.com/users/${user}/repos`
        })

            for (const item of infoUser.data) {
        
                if(item.stargazers_count != 0){
                    starsCount+=1
                }
            }

    
    return starsCount
}

export async function responseBattle(firstUser:string,secondUser:string,firstUserStarsCount:number,secondUserStarsCount:number) {
    let winner = ''
    let loser = ''
    let draw = false
    if(firstUserStarsCount === secondUserStarsCount){
            winner=null
            loser=null
            draw=true
            updateUserBattleDRAW(firstUser)
            updateUserBattleDRAW(secondUser)
      
    }
    else if(firstUserStarsCount > secondUserStarsCount){
            winner =firstUser
            loser = secondUser
            updateUserBattleWIN(firstUser)
            updateUserBattleLOSE(secondUser)
    }
    else{
        winner =secondUser
        loser = firstUser
        updateUserBattleWIN(secondUser)
        updateUserBattleLOSE(firstUser)
    }
           const response ={
        "winner":winner,
        "loser":loser,
        "draw":draw,
    }
    return response
}