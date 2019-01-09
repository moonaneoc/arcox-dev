let { Editor, Renderer } = require("./arcox");

const fs = require("fs");
console.log(fs);

let template = fs.readFileSync("./template.html");
let app = document.getElementById("app");
console.log(app)
