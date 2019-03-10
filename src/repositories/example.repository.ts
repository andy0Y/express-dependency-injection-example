import { Repository, Inject, ExRepository } from "express-dependency-injection";
import { GenericRepository } from "./generic.repository";
import { ExampleModel } from "../models/example.model";

/*
ExRepository Class decorator checks if extends the Repository mixin.
Repository mixin allows to factorize common behaviours (here connection to database)
and force to implements the getModel method to retrieve
the database representation of the model
*/
@ExRepository()
export class ExampleRepository extends Repository(GenericRepository) {

    @Inject(ExampleModel)
    private exampleModel: ExampleModel

    getModel() {

        this.connect();
        return this.exampleModel.getModelForClass(ExampleModel);
    }
} 