/*
 *	i18n Lib Internationalization
 *	Jesus Juan Aguilar
 * 	11/03/2016
 *	v1.0.0
 */

var i18n = {};

i18n['jLang'] = 'en';
i18n['app']= {};
i18n['$'] = function (x){
	return (i18n['app'][i18n['jLang']][x]!= undefined)?i18n['app'][i18n['jLang']][x]:console.error('i18n key not found: "'+x+'"');
};

i18n['load'] = function(object){
	i18n['app'] = object;
};

i18n['loadLang']= function(lang){
	if(i18n['app'][lang] == undefined){
		console.error('i18n lang not found: "'+lang+'"');
		return;
	}
	i18n['jLang'] = lang;
};
