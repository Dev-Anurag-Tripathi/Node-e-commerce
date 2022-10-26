const path = require('path');

//SO we created this utility function that will return the directory name of file where it is being called
module.exports = path.dirname(process.mainModule.filename);
