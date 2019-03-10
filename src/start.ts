import { App } from "./app/app.server";
import { ConfigService } from "./services/config/config.service";
import * as dotenv from "dotenv";
/*
main programme file, instanciate the server class and call
listen with the injected port number from environment variables
*/
//load environnement variables from .env file
dotenv.config();
const app = new App(),
port = new ConfigService().getServerConfig().listen;

app.listen(port, () => console.log(`server listening on port ${port}`));