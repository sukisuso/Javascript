/**
 * 
 */
var logger= require('../src/total-logger');


console.log("\033[31m this will be red \033[91m and this will be normal");
console.log('\x1b[36m', 'sometext' ,'\x1b[0m');
logger.log('Hi total asdasLogger2', "asdasasdasdasdasdasdasdasdasdasdahsfiojasflkjaskfjlaksfjlkasjflkasjlfkjaslfkjaslkfjlaksfjlakjflkasjlfkajslfkjaslfkjalskfjlaksjflkasjflkajslfkjaklsfjlakjf");
logger.log("NEWEST");
logger.log("123", "123");