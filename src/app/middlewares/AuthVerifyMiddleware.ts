import { NextFunction, Request, Response } from "express";
import  jwt from 'jsonwebtoken';
export const auth =(req:Request,res:Response,next:NextFunction)=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Token :any=req.headers['token'];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jwt.verify(Token,"SecretKey123456789",function (err:any,decoded:any) {
        if(err){
            console.log(Token)
            res.status(401).json({status:"unauthorized"})
        }
        else {
            const email=decoded['data'];
            console.log(email)
            req.headers.email=email
            next();
        }
    })
}