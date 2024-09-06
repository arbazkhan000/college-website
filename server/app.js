import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import dbConnect from "./src/DB/dbConnect.js";
import userRoutes from "./src/routes/user.Routes.js";
dotenv.config();

const app = express();

var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api", userRoutes);

const ServerStart = async () => {
    try {
        const port = process.env.PORT || 3000;
        await app.listen(port);
        console.log(`server is listening on ${port}`);
        await dbConnect();
    } catch (error) {
        console.log(error);
    }
};

ServerStart();
