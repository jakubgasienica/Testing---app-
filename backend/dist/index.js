"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_1 = __importDefault(require("./data"));
const cors_1 = __importDefault(require("cors"));
const port = 4000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/cats", async (req, res) => {
    res.status(200).json(data_1.default);
});
app.listen(4000, () => {
    console.log("listening");
});
