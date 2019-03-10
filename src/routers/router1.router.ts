import { AbstractRouter, ExRouter, ExRoute, HttpVerbs } from "express-dependency-injection";
import { SubRouter } from "./sub-router.router";
import { Example1Middleware } from "../middlewares/example1.middleware";
import { Request, Response } from "express";

/*
show some other HTTP verbs available
*/
@ExRouter({
    path: '/otherexample',
    routers: [
        SubRouter
    ],
    middlewares: [
        Example1Middleware
    ]
})
export class Router1 extends AbstractRouter {

    @ExRoute({
        path: "/delete/:id",
        verb: HttpVerbs.DELETE
    })
    public delete(req: Request, res: Response, args: {params: {id: string}, body: null}) {

        res.send(`called with DELETE verb with ${args.params.id} param`);
    }
}