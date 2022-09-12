const fs = require("fs")
const path = require("path")
const {execSync} = require("child_process")
const dotparser = require('dotparser');


const dotfile_contents = fs.readFileSync('./out_ast/1-ast.dot')
const ast = dotparser(dotfile_contents.toString())
console.log(ast[0].children[133]);
console.log(ast[0].children[0]);
console.log(ast[0].children[0].attr_list[0].eq);

