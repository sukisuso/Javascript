/*JSP_PAGE LOADED ON AJAX*/

/*FUTURE.
    var x = JSPP.getParamether('uno');
    var y = JSPP.getParamether('dos');

    var res = x + y ;
	JSPP.initResponse();
	JSPP.addResponse(JSPP.newH({type:4, text: res , id:"h1_id", gettext: true}));
	JSPP.sendResponse();
*/

JSPP.initResponse();

JSPP.addResponse(JSPP.newH({type:2, text: "SECUEL ++", id:"h1_id", classname:"jspp_h", gettext: true}));
JSPP.addResponse(JSPP.newH({type:4, text: "Segundo titulo.", id:"h1_id", gettext: true}));

JSPP.sendResponse();