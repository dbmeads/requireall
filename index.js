var glob = require('glob'),
    path = require('path');

module.exports = function(pattern, options) {
    return glob.sync(pattern, options).map(function(file) {
        return require(cleanFile(file, options));
    });
};

function cleanFile(file, options) {
    options = options || {};
    var cwd = options.cwd || process.cwd();
    return path.join(cwd, path.normalize(file).replace(cwd, ''));
}
