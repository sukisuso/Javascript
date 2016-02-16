/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('App.Application', {
    extend: 'Ext.app.Application',
    
    name: 'App',

	views: [
		'App.framework.Login','App.framework.Main','App.framework.Menu',
		'App.view.box.MBox',
		'App.view.box.Card'
	],
	
    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
		var supportsLocalStorage = Ext.supports.LocalStorage,
			loggedIn;
			if (!supportsLocalStorage) {
			Ext.Msg.alert('Your Browser Does Not Support Local Storage');
			return;
			}
			loggedIn = localStorage.getItem("AppLoggedIn");
			Ext.widget(loggedIn ? 'app-main-dev' : 'login');
    }
});
