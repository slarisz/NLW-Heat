import { Request, Response } from "express";
import { CreateMsgService } from "../services/CreateMsgService";

class CreateMsgController {
    async handle(request: Request, response: Response) {
        const { message } = request.body;
        const { user_id } = request;

        const service = new CreateMsgService();

        const result = await service.execute(message, user_id);
        
        return response.json(result);
    }

}

export { CreateMsgController };