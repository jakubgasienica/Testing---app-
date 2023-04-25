import express from "express";
import bodyParser from "body-parser";
import cats from "./data";
import cors from "cors";
const port = 4000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/cats", async (req, res) => {
	res.status(200).json(cats);
});

app.listen(4000, () => {
	console.log("listening");
});
