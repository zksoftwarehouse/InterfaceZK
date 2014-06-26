var fs = require('fs');
 
fs.readFile('./package.json', 'utf-8', function (error, contents) {
    document.write(contents);
});