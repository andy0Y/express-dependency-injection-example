import { AbstractRouter, ExRouter, HttpVerbs, ExRoute } from "express-dependency-injection";
import { Request, Response } from "express";

/*
showcase that it is possible to nest routers
*/
@ExRouter({
    path: '/subrouter',
})
export class SubRouter extends AbstractRouter {

    @ExRoute({
        path: "/get",
        verb: HttpVerbs.GET
    })
    public working(_req: Request, res: Response, _args: {params: null, body: null}) {

        res.send('nested router route working !')
    }
}