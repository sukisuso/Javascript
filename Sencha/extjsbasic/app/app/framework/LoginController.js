Ext.define('App.framework.LoginController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',
	onLoginClick: function(){
		localStorage.setItem("AppLoggedIn", true);
		this.getView().destroy();
		Ext.widget('app-main-dev');
	}
});