var fs = require("fs");
var plist = require('plist');

function generate(from_json,to_tmlanguage) {
    var text = fs.readFileSync(from_json, "utf8");
    var grammar = JSON.parse(text);
    fs.writeFileSync(to_tmlanguage, plist.build(grammar));
}

generate("syntaxes/koka.JSON-tmLanguage","syntaxes/koka.tmLanguage");
generate("syntaxes/kokadoc.JSON-tmLanguage","syntaxes/kokadoc.tmLanguage")