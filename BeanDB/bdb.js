/* Bean Data Base. 2015 - Jesús Juan Aguilar. v1.0*/
// Data base Object.
var BDB = {};

// Array of tables
BDB.table = [];

// Function to get a Table
BDB.getTable = function (table) {
    return BDB.table[table];
};

// Function to declare new table
BDB.createTable = function (name) {
    BDB.table[name] = new Table(name);
};

// Function to load table from JSON
BDB.loadJSON = function (name, url) {

    var client = new XMLHttpRequest();
    client.open('GET', url, true);
    
    client.onreadystatechange = function () {
        BDB.table[name].data = JSON.parse(client.responseText);
    };
    client.send(null); 
};


// TABLE CLASS
function Table(name) {
    this.name = name;   // Name of the table
    this.data = [];     // Data of the table

    // Add new object to the table
    this.push = function (element) {
        this.data.push(element);
    };

    // Get one object from index
    this.get = function (index) {
        return this.data[index];
    };

    //  Get all objects from the table
    this.getAll = function () {
        return this.data;
    };

    // Delete one object from de table
    this.delete = function(index){
        if (index > -1) {
            this.data.splice(index, 1);
        }
    };

    // Edit one object of the table
    this.edit = function(index , object){
        this.data[index] = object;
    };

    // Return an array of the objects like word
    this.like = function(word){
        var resp = [];
        var regex = new RegExp(word);
        for (var i = this.data.length - 1; i >= 0; i--) {
            var object = this.data[i];
            for(x in object){
                if(regex.test(object[x])){
                    resp.push(object);
                    break
                }
            }
        }
        return resp;
    };  

    // Return an array of the objects like word in specefic param
    this.likeTo = function(word, campo){
        var resp = [];
        var regex = new RegExp(word);
        for (var i = this.data.length - 1; i >= 0; i--) {
            var object = this.data[i];
            if(regex.test(object[campo])){
                resp.push(object);
            }
        }
        return resp;
    };   

    // Just returns the equals objects.
    this.equal = function(word, campo){
        var resp = [];
        for (var i = this.data.length - 1; i >= 0; i--) {
            var object = this.data[i];
            if(object[campo] === word){
                resp.push(object);
            }
        }
        return resp; 
    };

    // returns the size of the table.
    this.size = function(){
        return this.data.length;
    };
};