import { Router } from "express";
import { sendMessage } from "../controllers/contact.controller";

const ContactRoutes: Router = Router();
ContactRoutes.post("/send-message", sendMessage);

export default ContactRoutes;
