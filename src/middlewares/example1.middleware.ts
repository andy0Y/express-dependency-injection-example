import { AbstractMiddleware, ExMiddleware } from "express-dependency-injection";
import { Request, Response } from "express";

/*
ExMiddleware Class decorator works as Service one, but check class inheritance from
AbstractMiddleware at runtime, throw error if not
Abstract middleware force the implementation of run method, wich should implements
whatever logic the middlware has to perform on request or response objects
*/
@ExMiddleware()
export class Example1Middleware extends AbstractMiddleware {
    
    run(req: Request, res: Response) {

        //do something with request or response object !
        console.log('middleware called !');
    }



}