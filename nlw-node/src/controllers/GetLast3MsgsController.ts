import { Request, Response } from "express";
import { GetLast3MsgsService } from "../services/GetLast3MsgsService";

class GetLast3MsgsController {
    async handle(request: Request, response: Response) {

        const service = new GetLast3MsgsService();

        const result = await service.execute();

        return response.json(result);
    }

}

export { GetLast3MsgsController };