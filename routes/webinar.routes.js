import { Router } from "express";
import { getAllWebinars, getWebinarById, createWebinar, updateWebinar, deleteWebinar, getAllActiveWebinars } from "../controllers/webinar.controller.js"
import authenticate from "../middleware/auth.middleware.js";
const router = Router();

router.route("/")
    .get(authenticate, getAllWebinars)
    .post(authenticate, createWebinar)

router.route("/active").get(authenticate, getAllActiveWebinars)

router.route("/:id")
    .get(authenticate, getWebinarById)
    .patch(authenticate, updateWebinar)
    .delete(authenticate, deleteWebinar)

export default router;