var glob = require('glob'),
    path = require('path');

module.exports = function(pattern) {
    return glob.sync(pattern).map(function(file) {
        return require(process.cwd() + '/' + cleanFile(file));
    });
};

function cleanFile(file) {
    return path.normalize(file).replace(process.cwd(), '');
}