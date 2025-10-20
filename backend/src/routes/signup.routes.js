import express from "express";
import signup from "../controllers/signup.controllers.js";
import login from "../controllers/login.controllers.js";

const router = express.Router();
router.route('/signup').post(signup);
router.route('/login').post(login);

export default router;