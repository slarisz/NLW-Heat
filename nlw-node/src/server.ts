import { serverHttp } from "./app";

serverHttp.listen(4000, () => 
    console.log(`🚀 Server está rodando na porta 4000`)
);