import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMsgController } from "./controllers/CreateMsgController";
import { GetLast3MsgsController } from "./controllers/GetLast3MsgsController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();
router.post("/authenticate", new AuthenticateUserController().handle)

router.post(
 "/messages",
 ensureAuthenticated,
 new CreateMsgController().handle
);

router.get("/messages/last3", new GetLast3MsgsController().handle);

export { router };