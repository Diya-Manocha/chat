import express from "express";
import {
  checkAuth,
  login,
  signup,
  updateProfile,
} from "../controllers/UserController";
import { projectRoute } from "../middleware/auth";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.put("/update-profile", projectRoute, updateProfile);
userRouter.put("/check", projectRoute, checkAuth);


export default userRouter;