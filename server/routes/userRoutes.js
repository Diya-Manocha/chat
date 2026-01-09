import express from "express";
import {
  checkAuth,
  login,
  signup,
  updateProfile,
} from "../controllers/UserController.js";
import { projectRoute } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.put("/update-profile", projectRoute, updateProfile);
userRouter.put("/check", projectRoute, checkAuth);


export default userRouter;