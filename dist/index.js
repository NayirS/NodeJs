"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var port = process.env.PORT || 3000;
app_1.app.listen(port, function () {
    console.log("Server currently listening on port $(PORT)");
}).on("error", function (error) {
    throw new Error(error.message);
});
