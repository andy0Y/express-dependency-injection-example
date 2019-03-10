import { ConfigService } from "../services/config/config.service";
import * as mongoose from 'mongoose';
import { Inject } from "express-dependency-injection";

export class GenericRepository {

    @Inject(ConfigService)
    private readonly configService: ConfigService;

    protected connect() {

        const options = this.configService.getDatabaseConfig();
        if(mongoose.connection.readyState === 0) {

            mongoose.connect(
                
                `mongodb://${options.address}:${options.port}/`,
                {
                    "user": options.user,
                    "pass": options.pass,
                    "dbName": options.databaseName,
                    "poolSize": options.poolSize
            });
        }
    }
}