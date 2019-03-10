import { AbstractRouter, ExRouter } from "express-dependency-injection";
import { Router1 } from "./router1.router";
import { Router2 } from "./router2.router";
import { Example1Middleware } from "../middlewares/example1.middleware";

/*
Main router, showcasing the ability to bind branch routers,
can also declare actual routes within it's body
if you need a global middleware, declare it in this middleware array 
*/
@ExRouter({
    path: '/',
    routers: [
        Router1,
        Router2
    ],
    middlewares: [
        Example1Middleware
    ]
})
export class MainRouter extends AbstractRouter {


}