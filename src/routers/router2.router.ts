import { Request, Response } from "express";
import { AbstractRouter, ExRouter, ExRoute, Inject } from "express-dependency-injection";
import { HttpVerbs } from "express-dependency-injection/dist/enums/http.verbs.enum";
import { ExampleRepository } from "../repositories/example.repository";
import { from } from "rxjs"; 
import { ExampleModel } from "../models/example.model";
import { Example2Middleware } from "../middlewares/example2.middleware";

/*
This Example router showcase how to integrates the module with mongoose through
the typegoose Typescript annotated API.
limited Here to GET and POST verbs, but all HTTP verbs are availables.
*/
@ExRouter({
    path: '/example'
})
export class Router2 extends AbstractRouter {

    @Inject(ExampleRepository)
    private repo: ExampleRepository;

    @ExRoute({
        path: "/get/:limit", //precise arguments with express syntax
        verb: HttpVerbs.GET
    })
    public findLasts(req: Request, res: Response, args: {params: {limit: string}, body: null}) {

        if(!! args.params.limit) {

            from(this.repo.getModel().findByProperty1(args.params.limit))
            .subscribe(
                data => res.json(data),
                err => res.status(500).send(err)
            )
        } else {

            res.status(400).send('bad parameters sent');
        }
    }
    @ExRoute({
        path: "/saveAll",
        verb: HttpVerbs.POST,
        middlewares: [
            Example2Middleware
        ]
    })
    public saveAll(req: Request, res: Response, args: {params: null, body: Array<ExampleModel>}) {

        const validated = args.body.reduce((acc, model) => acc && (model instanceof ExampleModel), true)
        if(validated) {

            from(this.repo.getModel().insertMany(args.body))
            .subscribe(
                data => res.json(data),
                err => res.status(500).send(err)
            )
        } else {

            res.status(400).send('bad request body sent');
        }
    }
}