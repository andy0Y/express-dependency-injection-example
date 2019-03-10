import { Service } from 'express-dependency-injection';

/*
Any injected class has to be declared as a service
*/
@Service()
export class ConfigService {
    
    private config: any;
    
    constructor() {
        
        const config = require('../../config/config');
        this.config = config.config;
    }

    getDatabaseConfig(): any {

        return this.config.databaseConfig;
    }

    getServerConfig(): any {

        return this.config.serverConfig;
    }
}