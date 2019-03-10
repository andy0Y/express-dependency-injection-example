export const config = {
    
    "databaseConfig": {

        "address": process.env.DATABASE_ADRESS,
        "databaseName": process.env.DATABASE_NAME,
        "port": process.env.DATABASE_PORT,
        "user": process.env.DATABASE_USER,
        "pass": process.env.DATABASE_PASS,
        "poolSize": process.env.DATABASE_POOL_SIZE
    },
    "serverConfig": {

        url: process.env.SERVER_URL,
        "listen": process.env.SERVER_PORT
    }
};
