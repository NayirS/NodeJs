"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
// inference de type : lorsque le langage devine le type d'une variable
// a partir de donner qui sert a l'initialisation
//Nous allons créer notre première route
// une route: l'association Method http + URL 
exports.app.get("/", function (req, res) {
    res.status(200).send("Hello from my REST API");
});
