/* Bean Data Base. 2015 - Jesús Juan Aguilar.*/

var BDB = {};

BDB.table = [];

BDB.getTable = function (table) {
    return BDB.table[table];
};

BDB.createTable = function (name) {
    BDB.table[name] = new Table(name);
};

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
    this.name = name;
    this.data = [];

    this.push = function (element) {
        this.data.push(element);
    };

    this.get = function (index) {
        return this.data[index];
    };

    this.getAll = function () {
        return this.data;
    };

    this.delete = function(index){
        var ind = this.data.indexOf(index);
        if (ind > -1) {
            this.data.splice(index, 1);
        }
    };

    this.size = function(){
        return this.data.length;
    };
};