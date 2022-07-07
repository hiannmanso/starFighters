import {  ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { expression } from "joi";



function handdleError(error :Error ,req: Request,res:Response,next: NextFunction) {
    console.log(error)
    res.sendStatus(400)
    // res.status(error.response.status).send(error.response.statusText)
}
interface Error {
    response:{
        status:number,
        statusText:string,
    }
}
export default handdleError