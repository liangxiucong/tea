var dev_env = require('./dev');
var build_env = require('./build');

//根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
var argv = process.argv;
var NODE_ENV = 'dev';
if (argv.indexOf('-dev') !== -1) {
  	NODE_ENV = 'dev';
} else if (argv.indexOf('-build') !== -1) {
	NODE_ENV = 'build';
}
module.exports = {
    dev: dev_env,
    build: build_env
}[NODE_ENV || 'dev']