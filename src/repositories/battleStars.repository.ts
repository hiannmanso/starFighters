import db from "../database.js"


export async function newUserPOST(user:string) {
    
    const verifyUserExist = await db.query(`SELECT * FROM fighters WHERE username =$1`,[user])
    if(verifyUserExist.rowCount ==0){
        const query =`INSERT INTO fighters (username,wins,losses,draws) VALUES ($1,0,0,0) `
        const result = await db.query(query,[user])
        return result
    }
}   



export async function updateUserBattleWIN(user:string) {

    const userInfo = await db.query(`SELECT * FROM fighters WHERE username =$1`,[user])
       const query =`UPDATE fighters SET wins = $1 +1 WHERE username = $2`
       const result = await db.query(query,[userInfo.rows[0].wins,user])

}
export async function updateUserBattleLOSE(user:string) {

    const userInfo = await db.query(`SELECT * FROM fighters WHERE username =$1`,[user])
       const query =`UPDATE fighters SET losses = $1 +1 WHERE username = $2`
       const result = await db.query(query,[userInfo.rows[0].wins,user])
}
export async function updateUserBattleDRAW(user:string) {

    const userInfo = await db.query(`SELECT * FROM fighters WHERE username =$1`,[user])

    const teste=userInfo.rows[0]

       const query =`UPDATE fighters SET draws = $1 +1 WHERE username = $2`
       const result = await db.query(query,[userInfo.rows[0].wins,user])
}


export async function getInfoUsers() {
    const query = `SELECT * FROM fighters ORDER BY wins desc`
    const result = await  db.query(query)
    const response = {fighters:result.rows}
    return response
}