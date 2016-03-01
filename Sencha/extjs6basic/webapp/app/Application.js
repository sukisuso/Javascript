/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('App.Application', {
    extend: 'Ext.app.Application',
    
    name: 'App',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
		//CONFIG
		Ext.enableAriaButtons = false;
		Ext.enableAriaPanels = false;
		
        Ext.Loader.loadScript({
			 url: '/quevec_fw/quebec-all-debug.js'
			,onLoad: function(){
				var supportsLocalStorage = Ext.supports.LocalStorage,
				loggedIn;
				if (!supportsLocalStorage) {
				Ext.Msg.alert('Your Browser Does Not Support Local Storage');
				return;
				}
				loggedIn = localStorage.getItem("AppLoggedIn");
				Ext.widget(loggedIn ? 'app-main-dev' : 'login');
			}
			,onError: function(){
				Ext.Msg.alert('Error loading Framework.');
			}
		});
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
