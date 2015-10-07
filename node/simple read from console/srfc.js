var sys = require("sys");

var stdin = process.openStdin();
process.stdout.write("# ");
stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then substring() 
    console.log("# You entered: [" + 
        d.toString().trim() + "]");

    process.stdout.write("# ");
  });