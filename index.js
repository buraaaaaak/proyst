var fs = require("fs"),
    dr = require("path").dirname,
    UglifyJS = require("uglify-js"),
    drc = "./node_modules/proyst/";

function writeFile(s, r) {
    fs.mkdir(dr(s), {
        recursive: !0
    }, function(i) {
        if (i) return console.log(i);
        fs.writeFile(s, r, function(s, r) {
            s && console.log(s)
        })
    })
}

var files = [
    "./proyst/index.html",
    "./proyst/proyst.js",
    "./proyst/pages/homepage.html",
    "./proyst/pages/about.html",
    "./proyst/pages/404.html",
    "./proyst/styles/main.css"
    ]

if (!1 == fs.existsSync("./proyst/proyst.js")) {
    for (var i = 0; i < files.length; i++) {
        var data = fs.readFileSync(drc + files[i], "utf8");
        if(files[i].endsWith("index.html")) {
            writeFile(files[i].replace("proyst/", ""), data)
        } else {
            writeFile(files[i], data)
        }
    }
}

function app() {
    var s;
    return `${UglifyJS.minify(fs.readFileSync(drc+"main/prsMain.js","utf8")).code};${UglifyJS.minify(fs.readFileSync("./proyst/proyst.js","utf8")).code}

// proyst.js \xa9 - all rights reserved (2022)`
}
module.exports = {
    app
};