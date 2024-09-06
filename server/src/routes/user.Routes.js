import express from "express";
import { findStudent } from "../Controller/student.Contoller.js";

const userRoutes = express.Router();

userRoutes.route("/user").get(findStudent);

export default userRoutes;
