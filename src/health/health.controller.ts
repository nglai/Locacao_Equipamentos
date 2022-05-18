import {Request, Response} from 'express';
import { health } from "../data";

export const getHealth = ((req:Request, res:Response)=>{
    try {
        res.status(200).json(health);
    } catch (error) {
        res.status(500).json({error: error})
    }  
})