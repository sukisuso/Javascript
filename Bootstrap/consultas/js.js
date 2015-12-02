
console.log("JQUERY");

$(document).ready(function () {
    $("button#submit").click(function(){
  

        if(checkAll()){
            $.ajax({
               url: 'send.php',
               data: {
                  res1:getCheck(1),
                  res2:getCheck(2),
                  res3:getCheck(3),
                  res4:getCheck(4),
                  res5:getCheck(5)
               },
                error: function() {
                 console.log("error");
               },
               success: function(data) {
                 window.location.href = 'fin.html';
               },
               type: 'GET'
            });

        }else{
           console.log("ERROR");
           $("#error").html("<div class='alert alert-danger' style='margin-top: 20px;''><strong>Error!</strong> por favor rellena bien los datos.  </div>");
        }
    });



});

function check(group, checkbox ){
    for(var i = 1; i <=5;i++){
        if(i != checkbox){
            var ch = $("#ch"+group+i);
            ch.prop('checked', false);
        }
    }
}

function getCheck(group){
    for(var i = 1; i <=5;i++){
        var ch = $("#ch"+group+i);
        if(ch.is(':checked')) {
            return i;
        }
    }
}

function checkAll(){
    var oks  = [];
    for(var j = 1; j <= 5; j++){
        var bool=false;
        for(var i = 1; i <=5;i++){

            var ch = $("#ch"+j+i);
            if(ch.is(':checked')) {
                bool = true;
            }   
            
        }
        oks.push(bool);
    }

    for(var i = 0; i < oks.length; i++){
        if(!oks[i])
            return false;
    }
    return true;
}