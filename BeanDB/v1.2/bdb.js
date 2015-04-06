/* Bean Data Base. 2015 - Jesús Juan Aguilar. v1.2*/
// Data base Object.
var BDB = {};


// TABLE CLASS
function Table(name2) {
    this.name = name2;   // Name of the table.
    this.data = [];      // Data of the table.

    // Add new object to the table
    this.push = function (element) {
        this.data.push(element);
    };

    // Get one object from index
    this.get = function (index) {
        return this.data[index];
    };

    // Get all objects from the table
    this.getAll = function () {
        return this.data;
    };

    // Delete one object from de table
    this.delete = function (index) {
        if (index > -1) {
            this.data.splice(index, 1);
        }
    };

    // Edit one object of the table
    this.edit = function (index, object) {
        this.data[index] = object;
    };

    // Return an array of the objects like word
    this.like = function (word, campo) {
        var resp = [];
        var object ;
        var regex = new RegExp(word.toString().toUpperCase());

        if(campo!= null)
            for (var i = 0; i < this.data.length ; i++) {
                object = this.data[i];
                if(regex.test(object[campo].toString().toUpperCase())){
                    resp.push(object);
                }
            }
        else
            for (var i = 0; i < this.data.length ; i++) {
                object = this.data[i];
                for(x in object){
                    if(regex.test(object[x].toString().toUpperCase())){
                        resp.push(object);
                        break
                    }
                }
        }
        return resp;
    };  

    // returns the size of the table.
    this.size = function() {
        return this.data.length;
    };

    this.join = function(table, campo){

        var resp = [];
        var r;
        var array;
        for (var i = 0; i < this.data.length ; i++) {
            object = this.data[i];
            array = table.like(object[campo], campo);
            for(var j = 0; j < array.length ; j++){

                r = joinby(object, array[j], campo);
                console.log(r);
                resp.push(r);
            }
        }
        return resp;
    };

    this.toJson = function(){
        return JSON.stringify(this.data);
    };
};

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
    client.open('GET', url, false);
    client.send(null);
    BDB.table[name].data = JSON.parse(client.responseText || "null");
};

// Function to merge objects by one param.
function joinby(obj1,obj2, campo){ 
    var obj3 = {}; 
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; } 
    for (var attrname in obj2) {
        if(campo != attrname)
            obj3[attrname] = obj2[attrname]; 
    } 
    return obj3; 
}
