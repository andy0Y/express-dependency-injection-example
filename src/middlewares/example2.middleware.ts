import { AbstractMiddleware, ExMiddleware } from "express-dependency-injection";
import { Request, Response } from "express";
import bodyParser = require("body-parser");
import { ExpressMiddleware } from "express-dependency-injection/dist/types/function.type";

/*
ExMiddleware Class decorator works as Service one, but check class inheritance from
AbstractMiddleware at runtime, throw error if not
Abstract middleware force the implementation of run method, wich should implements
whatever logic the middlware has to perform on request or response objects
*/
@ExMiddleware()
export class Example2Middleware extends AbstractMiddleware {
    
    run(req: Request, res: Response) {
        
        //not called !
    }
    /*redefine the inherited handle function
    if you have to use an external middleware module
    (like body-parser in this example)
    */
   public handle(): ExpressMiddleware {

        return bodyParser.json();
    }
}