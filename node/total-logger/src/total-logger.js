/**
 *  Total Logger For Node Projects
 *  Jesus Juan Aguilar!
 */

var fs = require('fs');
var tlp = {};
tlp.pathDir = './logger';
tlp.fullPath = 'logger/tl_log';
tlp.checkFileDirection = function(){
	if (!fs.existsSync(tlp.pathDir)){
		fs.mkdirSync(tlp.pathDir);
	}
};
tlp.size = function (x){
	if(x !== undefined && x.length < 25){
		while(x.length < 25){
			x+= " ";
		}
	}
	return (x !== undefined && x.length < 25?x:(x !== undefined?x.substr(0,25):"")); 
};

if (!fs.existsSync(tlp.pathDir)){
    fs.mkdirSync(tlp.pathDir);
}

var log = function (x, y){
	console.log(x);
	var stream = fs.createWriteStream(tlp.fullPath, {'flags': 'a'});
	stream.once('open', function(fd) {
	  stream.write(tlp.size(x) + " ### " + (y !== undefined && y.length < 130?y:(y !== undefined?y.substr(0,130):"")) + "\n");
	  stream.end();
	});
};

var change = function(folder, file){
	tlp.pathDir = './'+folder;
	tlp.fullPath = folder+'/'+file;
	tlp.checkFileDirection();
};


module.exports = {
	    log: log,
	    change: change
};


