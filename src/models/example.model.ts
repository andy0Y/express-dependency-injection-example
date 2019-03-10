import { prop, Typegoose, staticMethod, ModelType } from "typegoose";
import { ModelInterface } from "express-dependency-injection/dist/model/model.interface";
import { Service } from "express-dependency-injection";

//models have to be decorated as service in order to be injected
@Service()
export class ExampleModel extends Typegoose implements ModelInterface {

    @prop() property1: string;
    @prop() property2: string;

    @staticMethod
    public static findByProperty1(this: ModelType<ExampleModel> & ExampleModel, by: string): Promise<Array<ExampleModel>> {

        return this.find()
        .where('property1')
        .equals(by)
        .exec();
    }
}