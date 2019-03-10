import { AbstractServer, ExServer } from "express-dependency-injection";
import { MainRouter } from "../routers/main.router";

/*
ExServer define the server entry point, check if extends AbstractServer,
and require a main router to be defined
AbstractServer provide the listen method to start the underlying express server
*/
@ExServer({
    main: MainRouter
})
export class App extends AbstractServer {

} 