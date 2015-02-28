/*JSPP Validate*/
var numericRegex = /^[0-9]+$/,
    integerRegex = /^\-?[0-9]+$/,
    decimalRegex = /^\-?[0-9]*\.?[0-9]+$/,
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    alphaRegex = /^[a-z]+$/i,
    alphaNumericRegex = /^[a-z0-9]+$/i,
    naturalRegex = /^[0-9]+$/i,
    naturalNoZeroRegex = /^[1-9][0-9]*$/i,
    ipRegex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
    base64Regex = /[^a-zA-Z0-9\/\+=]/i,
    urlRegex = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

/*
* Funcion para saber si la entrada es numerica
*@param num : entrada
*@out : true/false
*/
function isNumeric(num){
    return numericRegex.test(num);
}

/*
* Funcion para saber si la entrada es un Integer
*@param num : entrada
*@out : true/false
*/
function isInteger(num){
    return integerRegex.test(num);
}

/*
* Funcion para saber si la entrada es un decimal
*@param num : entrada
*@out : true/false
*/
function isDecimal(num){
    return decimalRegex.test(num);
}

/*
* Funcion para saber si la entrada es un email
*@param num : entrada
*@out : true/false
*/
function isEmail(num){
    return emailRegex.test(num);
}

/*
* Funcion para saber si la entrada es una palabra
*@param num : entrada
*@out : true/false
*/
function isAlpha(num){
    return alphaRegex.test(num);
}


/*
* Funcion para saber si la entrada es un palabra con numeros
*@param num : entrada
*@out : true/false
*/
function isAlphaNumeric(num){
    return alphaNumericRegex.test(num);
}

/*
* Funcion para saber si la entrada es un natural
*@param num : entrada
*@out : true/false
*/
function isNatural(num){
    return naturalRegex.test(num);
}

/*
* Funcion para saber si la entrada es un natural sin incluir cero
*@param num : entrada
*@out : true/false
*/
function isNaturalNoZero(num){
    return naturalNoZeroRegex.test(num);
}

/*
* Funcion para saber si la entrada es una IP
*@param num : entrada
*@out : true/false
*/
function isIP(num){
    return ipRegex.test(num);
}

/*
* Funcion para saber si la entrada es un numero en base 64
*@param num : entrada
*@out : true/false
*/
function isBase64(num){
    return base64Regex.test(num);
}

/*
* Funcion para saber si la entrada es una URL
*@param num : entrada
*@out : true/false
*/
function isURL(num){
    return urlRegex.test(num);
}

function notNull(object){

    if(object){
        return true;
    }
    return false;
}

function yesNull(object){
     if(!object){
        return true;
    }
    return false;
}

/*VALIDATE TEST YOUR APP*/

JSPP.test = function(paramA, paramB, message){
    




};

JSPP.assert = function(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message;
    }
};